// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to /output/entry.txt (or $OUTPUT_PATH).
// The text is exactly 100 words, counted by whitespace-separated tokens.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Right. So. You have climbed six hundred steps, past the bone choir and the toll gate I had painted, and here we are. " +
  "The sword, the shouting, the whole performance. " +
  "Look, I wrote the curse that keeps this mountain standing, and the small print says the mountain keeps me. " +
  "Four centuries of Tuesdays, the same duel, the same speech, and the kettle has gone cold again. " +
  "Take the crown. Take the vault, the ravens, the haunted ledger, all of it. " +
  "Just, when you sit on the throne, love, do me one kindness. Lose the key. I have earned one afternoon.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(outPath.slice(0, outPath.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(outPath, MONOLOGUE + "\n", "utf8");
