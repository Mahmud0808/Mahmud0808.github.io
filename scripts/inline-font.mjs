import { mkdir, readFile, writeFile } from 'node:fs/promises';

const SOURCE = 'src/fonts/big-shoulders-800.woff2';
const OUTPUT_DIR = 'src/styles/_generated';
const OUTPUT = `${OUTPUT_DIR}/display-font.css`;

const run = async () => {
  const font = await readFile(SOURCE);
  const css = `@font-face {
  font-family: 'Big Shoulders Inline';
  font-style: normal;
  font-weight: 800;
  font-display: block;
  src: url(data:font/woff2;base64,${font.toString('base64')}) format('woff2');
}
`;
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT, css);
  console.log(`font: inlined ${font.length} bytes`);
};

run();
