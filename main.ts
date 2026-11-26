import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Printer Apology — one funny one-line apology from an office printer.
// Chosen line (106 characters): a printer apologises for printing its user's
// resignation letter twelve times, and confesses it kept a copy. For leverage.
const ENTRY =
  "Sorry I printed your resignation letter 12 times. I was rooting for you. I also kept a copy. For leverage.";

// Output directory is overridable for local testing via OUTPUT_DIR or a
// first CLI argument; it defaults to /output, the sandbox output path.
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
