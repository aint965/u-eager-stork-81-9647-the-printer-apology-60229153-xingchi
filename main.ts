import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Printer Apology — one funny one-line apology from an office printer.
// Chosen line (97 characters): the printer apologises for jamming on its
// user's resignation letter — it read the letter first, agrees with it, and
// kept a copy. For leverage. The jam is the printer's own signature
// grievance (the old line had none: any office machine could have said it),
// and the staccato beats tighten the line while keeping the punch last.
const ENTRY =
  "Sorry I jammed on your resignation letter. I read it first. I agree. I kept a copy. For leverage.";

// Output directory is overridable for local testing via OUTPUT_DIR or a
// first CLI argument; it defaults to /output, the sandbox output path.
const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
