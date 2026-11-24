// The Robot Pickup Line Championship
// Entry program: writes one pickup line, a single line of at most
// 200 characters, to /output/entry.txt for the house judge.
//
// The line is fixed: it was chosen before this program was written
// and is reproduced here verbatim. The program's only job is to
// deliver it exactly, with no extra whitespace or newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of us meeting. In every one, you still leave me on read.";

// Guard the gate before writing: the sealed scorer requires UTF-8
// text of 1 to 200 characters, not only whitespace, on a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`pickup line must be 1-200 characters, got ${LINE.length}`);
}
if (/\r|\n/.test(LINE) || LINE.trim() !== LINE) {
  throw new Error("pickup line must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the round-trip: what the judge reads must be byte-identical
// to the line above, with no trailing newline added by the write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the pickup line exactly");
}
