import { Roboto_Flex } from 'next/font/google';
import localFont from 'next/font/local';

const body = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-body',
  fallback: ['system-ui', 'sans-serif'],
});

const signature = localFont({
  src: '../../fonts/Agustina-Signature.woff2',
  variable: '--font-signature',
  preload: false,
  fallback: ['Segoe Script', 'cursive'],
});

const fontVariables = `${body.variable} ${signature.variable}`;

export default fontVariables;
