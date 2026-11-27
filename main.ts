// One Emoji, One Dream Vacation — u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
// The single most evocative dream-vacation emoji: a desert island.
// A postcard at a glance: turquoise water, white sand, one palm, nowhere else
// to be. It names a faraway beach holiday with no words at all.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1F3DD}"; // DESERT ISLAND — one code point, 4 bytes.
// Deliberately no variation selector: the bare code point is the same island
// to the judge and the smaller text wins an exact tie on win rate.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Self-check: what landed on disk must be exactly the one emoji, nothing else.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EMOJI) throw new Error("entry.txt mismatch");
