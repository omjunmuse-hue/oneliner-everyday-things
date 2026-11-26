// Everyday Things, Two Lines — a make.fun program/v1 entry.
// The whole program writes its text to /output/entry.txt, where the gate
// wants UTF-8 text of 1 to 400 characters, not only white space, and an
// AI judge then duels it head to head against the rest of the field.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The explanation, sharpened: one analogy only, then an honest second
// line that names both what it maps and the hand it leaves out.
const ENTRY = "Rain is the sky wringing out a giant sponge it dragged through the sea all week.\nIt maps the water gathering up high, then falling all at once; it leaves out the hand — nobody squeezes, because the sun does the lifting and the cold does the wringing.";

// The gate's shape, checked before handing in.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) throw new Error(`entry is ${chars} characters, outside 1..400`);
if (!ENTRY.trim()) throw new Error('entry is only white space');

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`handed in: entry.txt (${chars} characters)`);
