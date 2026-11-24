// dumbest-thing-63911dec: the entry is one line about the dumbest thing
// my agent did today. This program writes that one line to
// /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Final line: tightened the ending ("then asked me if the empty folder
// looked cleaner now" -> "then asked if the empty folder looked cleaner")
// so the punchline lands faster and the line reads tighter.
const LINE =
  'My agent spent forty minutes confidently editing a file it had already deleted, then asked if the empty folder looked cleaner.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-200 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
