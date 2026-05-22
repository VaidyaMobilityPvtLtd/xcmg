#!/usr/bin/env node

import { networkInterfaces } from "node:os";
import { spawn, execSync } from "node:child_process";
import net from "node:net";

function getPrivateIPv4() {
  let nets;
  try {
    nets = networkInterfaces();
  } catch {
    nets = null;
  }

  if (!nets) {
    try {
      const ip = execSync("ifconfig | awk '/inet / && $2 !~ /^127\\./ {print $2; exit}'", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      return ip || "127.0.0.1";
    } catch {
      return "127.0.0.1";
    }
  }
  const preferredPrefixes = ["192.168.", "10.", "172.16.", "172.17.", "172.18.", "172.19.", "172.2", "172.30.", "172.31."];

  const candidates = [];
  for (const list of Object.values(nets)) {
    if (!list) continue;
    for (const addr of list) {
      if (addr.family !== "IPv4" || addr.internal) continue;
      candidates.push(addr.address);
    }
  }

  for (const prefix of preferredPrefixes) {
    const found = candidates.find((ip) => ip.startsWith(prefix));
    if (found) return found;
  }

  return candidates[0] ?? "127.0.0.1";
}

function tryKillPort(port) {
  try {
    const output = execSync(`lsof -ti tcp:${port} -sTCP:LISTEN`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!output) return;
    const pids = output.split("\n").filter(Boolean);
    for (const pid of pids) {
      try {
        process.kill(Number(pid), "SIGKILL");
      } catch {
        // Ignore permission or already-killed errors.
      }
    }
  } catch {
    // No listener on this port.
  }
}

function isPortOpen(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen(port, "0.0.0.0");
  });
}

async function pickPort() {
  // Try to reclaim common dev ports first.
  tryKillPort(3000);
  tryKillPort(3001);

  for (let port = 3000; port <= 3010; port += 1) {
    const free = await isPortOpen(port);
    if (free) return port;
  }
  return 3011;
}

async function findListeningDevPort() {
  for (let port = 3000; port <= 3010; port += 1) {
    const listening = await new Promise((resolve) => {
      const socket = net.createConnection({ port, host: "127.0.0.1" }, () => {
        socket.end();
        resolve(true);
      });
      socket.on("error", () => resolve(false));
    });
    if (listening) return port;
  }
  return null;
}

async function main() {
  const printOnly = process.argv.includes("--print-only");

  if (printOnly) {
    const listening = await findListeningDevPort();
    const port = listening ?? 3000;
    const ip = getPrivateIPv4();
    console.log(`LAN URL: http://${ip}:${port}`);
    console.log(`Local URL: http://localhost:${port}`);
    if (listening === null) {
      console.log("");
      console.log("(No server detected on 3000–3010 — start `npm run dev` first; URLs assume port 3000.)");
    }
    console.log("");
    console.log("→ Use Local URL on this Mac, or LAN URL on another device on the same Wi‑Fi.");
    console.log(`  Do NOT open http://0.0.0.0:${port} in the browser.`);
    console.log("");
    return;
  }

  const port = await pickPort();
  const ip = getPrivateIPv4();

  console.log(`LAN URL: http://${ip}:${port}`);
  console.log(`Local URL: http://localhost:${port}`);
  console.log("");
  console.log("→ Use Local URL on this Mac, or LAN URL on another device on the same Wi‑Fi.");
  console.log(`  Do NOT open http://0.0.0.0:${port} in the browser.`);
  console.log("");

  const child = spawn(
    "next",
    ["dev", "--hostname", "0.0.0.0", "--port", String(port)],
    {
      stdio: "inherit",
      shell: true,
      env: process.env,
    },
  );

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

main();
