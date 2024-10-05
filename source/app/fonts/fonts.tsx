import { Manrope } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600'],
  variable: '--font-manrope',
  display: 'block',
  fallback: ['sans-serif', 'arial'],
});
