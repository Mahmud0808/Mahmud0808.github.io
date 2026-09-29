import { IMAGE_WIDTHS, prefix } from './config';

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}) {
  const target =
    IMAGE_WIDTHS.find((w) => w >= width) ??
    IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
  const path = src.replace(/^\/images\//, '').replace(/\.[a-z0-9]+$/i, '');
  return `${prefix}/images/_generated/${path}-${target}.webp`;
}
