import { spawn } from "node:child_process";
import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { loadProductData } from "./load-product-data.mjs";

const { productEditorialForModel } = loadProductData("productEditorial");
function decodeHtml(text) {
  return text.replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(parseInt(hex ?? decimal, hex ? 16 : 10)))
    .replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
}

async function auditAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await auditAssets(file);
    else if (/\.(tsx?|css)$/.test(file)) {
      const source = await readFile(file, "utf8");
      for (const match of source.matchAll(/["'](\/[^"'\n?]*\.(?:png|jpe?g|svg|webp|pdf|mp4))["']/g)) {
        await access(path.join("public", decodeURIComponent(match[1]))).catch(() => {
          throw new Error(`Missing asset ${match[1]} referenced by ${file}`);
        });
      }
    }
  }
}
await auditAssets("src");
console.log("Literal public asset references verified.");

const port = 3100;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  windowsHide: true, stdio: ["ignore", "pipe", "pipe"],
});
let log = "";
server.stdout.on("data", (chunk) => { log += chunk; });
server.stderr.on("data", (chunk) => { log += chunk; });
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error(log);
    try { ready = (await fetch(base)).ok; } catch {}
    if (ready) break;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  assert(ready, `Server did not start: ${log}`);
  for (const route of ["/", "/products", "/AboutUs", "/news", "/contact", "/DownloadBrochure", "/services", "/services/service-outlets", "/services/gold-service", "/services/financial-services", "/services/satisfaction-survey"]) {
    assert.equal((await fetch(base + route)).status, 200, route);
  }
  const html = await (await fetch(base)).text();
  const links = [...new Set([...html.matchAll(/href="(\/products\?[^"\s]+)"/g)].map((m) => m[1].replaceAll("&amp;", "&")))];
  assert(links.length > 50, "Expected full product catalog links");
  for (const href of links) {
    const response = await fetch(base + href);
    assert.equal(response.status, 200, href);
    const body = await response.text();
    const model = new URL(href, base).searchParams.get("model");
    if (model) {
      assert(body.includes(model), `Missing model content: ${href}`);
      const editorial = productEditorialForModel(model);
      assert(editorial, `Missing editorial: ${model}`);
      const overview = decodeHtml(body.split('id="model-overview"')[1]?.split('id="model-parameters"')[0] ?? "");
      for (const paragraph of editorial.paragraphs) assert(overview.includes(paragraph), `Truncated overview: ${model}`);
      for (const benefit of editorial.benefits) assert(overview.includes(benefit), `Missing benefit: ${model}`);
    }
  }
  // Search parameters are already decoded by Next.js; malformed percent input must not crash.
  assert.equal((await fetch(base + "/products?model=%25&type=%25&subtype=%25")).status, 200);
  for (const source of ["/hero/top-final.webp", "/equipment/electric-vehicles/EV-PIC/XC918-EV.png"]) {
    const response = await fetch(`${base}/_next/image?url=${encodeURIComponent(source)}&w=640&q=75`);
    assert.equal(response.status, 200, `Optimized image: ${source}`);
    assert(response.headers.get("content-type")?.startsWith("image/"));
  }
  assert.equal((await fetch(base + "/this-page-does-not-exist")).status, 404);
  console.log(`11 pages, ${links.length} catalog links, malformed query handling, image optimization and 404 handling passed.`);
} finally {
  server.kill();
}
