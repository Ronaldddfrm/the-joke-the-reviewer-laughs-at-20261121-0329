import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My agent's pull request changed 47 files to fix a typo, and the typo is still there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
