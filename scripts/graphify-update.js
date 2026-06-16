/**
 * Debounced Graphify updater — used by Cursor afterFileEdit hook and npm scripts.
 * Rebuilds graphify-out/ from code changes only (no LLM / API key required).
 */
const { spawn } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DEBOUNCE_MS = 2500;
const SOURCE_FILE = /\.(tsx?|jsx?|css|mjs|cjs|json|md)$/i;

let timer = null;

function shouldUpdate(filePath) {
  if (!filePath) return true;
  const normalized = filePath.replace(/\\/g, '/');
  if (normalized.includes('graphify-out/')) return false;
  if (normalized.includes('node_modules/')) return false;
  if (normalized.includes('.next/')) return false;
  return SOURCE_FILE.test(normalized);
}

function runUpdate() {
  const proc = spawn('graphify', ['update', '.'], {
    cwd: ROOT,
    shell: true,
    stdio: 'ignore',
    windowsHide: true,
  });
  proc.unref();
}

function scheduleUpdate(filePath) {
  if (!shouldUpdate(filePath)) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(runUpdate, DEBOUNCE_MS);
}

async function main() {
  let filePath = process.argv[2];

  if (!filePath && !process.stdin.isTTY) {
    const chunks = [];
    for await (const chunk of process.stdin) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf8').trim();
    if (raw) {
      try {
        const payload = JSON.parse(raw);
        filePath = payload.file_path || payload.path || payload.filePath;
      } catch {
        // ignore malformed hook input
      }
    }
  }

  scheduleUpdate(filePath);
}

main().catch(() => process.exit(0));
