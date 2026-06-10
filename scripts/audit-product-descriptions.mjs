/**
 * Audit product description lengths before/after summarizeProductDescription.
 * Run: node scripts/audit-product-descriptions.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function normalizeDescriptionModelKey(model) {
  return model.replace(/\s+/g, "").replace(/-/g, "_").replace(/\//g, "").toUpperCase();
}

function splitDescriptionSentences(text) {
  return text.match(/[^.!?]+[.!?]+(?:\s|$)/g)?.map((s) => s.trim()) ?? [text.trim()];
}

function summarizeProductDescription(text, model) {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;

  const paragraphs = trimmed.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  let body = trimmed.replace(/\n\n+/g, " ");

  if (model && paragraphs.length > 1) {
    const modelKey = normalizeDescriptionModelKey(model);
    const modelTail = paragraphs.find(
      (p, index) => index > 0 && normalizeDescriptionModelKey(p).includes(modelKey),
    );
    const modelAnywhere = paragraphs.find((p) => normalizeDescriptionModelKey(p).includes(modelKey));
    const genericSeries =
      /^(the\s+)?xcmg\s+xtr\s+series|zero-emission electric loader|zero-emission electric loaders/i.test(
        paragraphs[0] ?? "",
      );

    if (modelTail) body = modelTail;
    else if (modelAnywhere && genericSeries) body = modelAnywhere;
    else if (modelAnywhere && paragraphs.length === 2) body = modelAnywhere;
    else if (!normalizeDescriptionModelKey(paragraphs[0]).includes(modelKey)) {
      body = paragraphs[paragraphs.length - 1] ?? body;
    }
  }

  body = body.replace(/\s+/g, " ");
  const sentences = splitDescriptionSentences(body);
  const maxSentences = trimmed.length > 340 ? 2 : body.length > 300 ? 2 : 3;

  if (body.length <= 260 && sentences.length <= maxSentences) return body;

  let summary = sentences.slice(0, maxSentences).join(" ");
  if (summary.length > 300 && sentences.length > 1) summary = sentences[0] ?? summary;
  return summary.trim();
}

const catalog = [
  "Lw200kv", "ZL30E", "XC936", "XC938", "XC958", "XC938EV", "XC968EV",
  "XE140I_K", "XE215I_K", "XE230CLC", "XE380C",
  "XC975EV", "XC918EV", "XE215EV", "RP905HEV", "XCR40_EV", "XS265HEV",
  "GR150", "GR165", "XP163",
  "SQS125TL_4", "SQS68TL_5", "XCT25L4_Y", "XCT25_Y1", "XCT50_Y1", "XCT80_Y1", "XCT110_Y1",
  "XTR4/260", "XTR6/280", "XTR7/360", "XUD135", "XUD275", "XUD295",
  "XR138E", "XR158E", "XR178E", "XR210C", "XR240E",
  "SLM4", "XS3017S",
];

const evMetaKeys = new Set([
  "XC918EV", "XC938EV", "XC968EV", "XC975EV", "XE215EV", "RP905HEV", "XCR40_EV", "XS265HEV",
]);

function roadKey(model) {
  return model.replace(/\s+/g, "").replace(/-/g, "_").toUpperCase();
}

function parseStringMap(tsSource, exportName) {
  const start = tsSource.indexOf(`export const ${exportName}`);
  if (start < 0) return {};
  const brace = tsSource.indexOf("{", start);
  let depth = 0;
  let end = brace;
  for (let i = brace; i < tsSource.length; i++) {
    if (tsSource[i] === "{") depth++;
    if (tsSource[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  const block = tsSource.slice(brace + 1, end);
  const out = {};
  const re = /(?:"([^"]+)"|([A-Za-z0-9_/.-]+))\s*:\s*(?:"((?:[^"\\]|\\.)*)"|`([\s\S]*?)`)/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    const key = m[1] || m[2];
    const val = (m[3] ?? m[4] ?? "").trim();
    out[roadKey(key)] = val;
  }
  return out;
}

const roadSrc = fs.readFileSync(path.join(root, "src/app/_data/roadEarthSpecifications.ts"), "utf8");
const evSrc = fs.readFileSync(path.join(root, "src/app/_data/evSpecifications.ts"), "utf8");
const concreteSrc = fs.readFileSync(path.join(root, "src/app/_data/concreteSpecifications.ts"), "utf8");

const roadDesc = parseStringMap(roadSrc, "roadEarthDescriptionsByModel");
const evDesc = parseStringMap(evSrc, "evProductDescriptionsByModel");
const concreteDesc = parseStringMap(concreteSrc, "concreteDescriptionsByModel");

function resolveRaw(model) {
  const k = roadKey(model);
  if (evMetaKeys.has(k) || evDesc[k]) return evDesc[k] || "";
  if (concreteDesc[k]) return concreteDesc[k];
  const road = roadDesc[k];
  if (road && road.trim()) return road;
  return `${model} — catalogue equipment configured for Nepal sites with local support from UHEEM.`;
}

const rows = catalog.map((model) => {
  const raw = resolveRaw(model);
  const summary = summarizeProductDescription(raw, model);
  return { model, rawLen: raw.length, sumLen: summary.length, changed: raw !== summary, summary };
});

const changed = rows.filter((r) => r.changed);
const stillLong = rows.filter((r) => r.sumLen > 320);
console.log(`Audited ${rows.length} catalogue models\n`);
console.log(`Shortened: ${changed.length}`);
console.log(`Still >320 chars after summary: ${stillLong.length}`);
if (stillLong.length) {
  for (const r of stillLong) console.log(`  ${r.model}: ${r.sumLen} chars`);
}
console.log(`\nGeneric/fallback copy (<80 chars source):`);
for (const r of rows.filter((x) => {
  const raw = resolveRaw(x.model);
  return raw.length < 100 && !raw.includes("— catalogue");
})) {
  console.log(`  ${r.model}: "${resolveRaw(r.model).slice(0, 60)}"`);
}
console.log("\nTop shortenings:");
changed
  .sort((a, b) => b.rawLen - b.sumLen - (a.rawLen - a.sumLen))
  .slice(0, 20)
  .forEach((r) => console.log(`  ${r.model}: ${r.rawLen} → ${r.sumLen}`));

const unchanged = rows.filter((r) => !r.changed);
console.log(`\nUnchanged (already short): ${unchanged.length}`);
unchanged.forEach((r) => console.log(`  ${r.model}: ${r.sumLen} chars`));
