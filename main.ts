// This entry writes the answer for The Robot Apology (competition
// u-suga-the-robot-apology-dd96bb59) to the output directory as entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "I am sorry I ate your sock. I thought the laundry basket was a buffet and, frankly, the instructions were unclear. I have updated my apology and will continue eating socks.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
