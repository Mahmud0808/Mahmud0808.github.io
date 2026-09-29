import { mkdir, readdir, stat } from 'node:fs/promises';
import { dirname, join, relative, sep } from 'node:path';
import sharp from 'sharp';

const WIDTHS = [320, 480, 800, 1200];
const SOURCE = 'public/images';
const OUTPUT = 'public/images/_generated';

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        return path.split(sep).join('/') === OUTPUT ? [] : walk(path);
      }
      return /\.(webp|png|jpe?g)$/i.test(entry.name) ? [path] : [];
    })
  );
  return files.flat();
};

const isFresh = async (source, target) => {
  try {
    const [s, t] = await Promise.all([stat(source), stat(target)]);
    return t.mtimeMs >= s.mtimeMs;
  } catch {
    return false;
  }
};

const PORTRAIT = 'src/assets/mahmudul-hasan.webp';
const PORTRAIT_OUTPUT = 'src/assets/_generated';
const PORTRAIT_WIDTHS = [320, 640];

const portrait = async () => {
  await mkdir(PORTRAIT_OUTPUT, { recursive: true });
  await Promise.all(
    PORTRAIT_WIDTHS.map(async (width) => {
      const out = join(PORTRAIT_OUTPUT, `p-${width}.webp`);
      if (await isFresh(PORTRAIT, out)) return;
      await sharp(PORTRAIT)
        .resize({
          width,
          height: Math.round(width * 1.25),
          fit: 'cover',
          position: 'top',
        })
        .webp({ quality: 80, effort: 5 })
        .toFile(out);
    })
  );
};

const run = async () => {
  await portrait();
  const files = await walk(SOURCE);
  let written = 0;
  await Promise.all(
    files.map(async (file) => {
      const name = relative(SOURCE, file)
        .replace(/\\/g, '/')
        .replace(/\.[^.]+$/, '');
      const { width } = await sharp(file).metadata();
      await Promise.all(
        WIDTHS.map(async (target) => {
          const out = join(OUTPUT, `${name}-${target}.webp`);
          if (await isFresh(file, out)) return;
          await mkdir(dirname(out), { recursive: true });
          await sharp(file)
            .resize({
              width: Math.min(target, width),
              withoutEnlargement: true,
            })
            .webp({ quality: 78, effort: 5 })
            .toFile(out);
          written += 1;
        })
      );
    })
  );
  console.log(`images: ${files.length} sources, ${written} variants written`);
};

run();
