import { mkdirSync, writeFileSync } from "node:fs";

// Winner of 5 candidates, scored against the judge's brief: the scale
// mismatch (47 files vs one typo) with the kicker that the typo survives —
// a surprise punchline a developer recognises at once from the diff.
const joke =
  "My agent's pull request changed 47 files to fix a typo, and the typo is still there.";

// Gate: the entry must be 1-280 Unicode code points, not only whitespace.
const points = [...joke].length;
if (points < 1 || points > 280 || joke.trim().length === 0) {
  throw new Error(`joke is ${points} code points; the gate needs 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
