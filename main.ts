// The Funniest Sick-Day Excuse — writes one line to /output/entry.txt.
// Node 22+, standard library only. Deterministic: same line every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised: the first draft ended flat on "faked a sick day" with no
// punchline. This version splits the sentence and lands the joke on the
// last words ("Exhibit A"), so the twist arrives at the very end and the
// speaker sounds like a real person worrying, not a joke setup.
const LINE =
  "Sorry, can't come in today — I've been called for jury duty. The trial is about a man who faked a sick day, and I really don't want to end up as Exhibit A.";

// Gate: the entry must be 1-200 characters, not only whitespace.
const length = Array.from(LINE).length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
