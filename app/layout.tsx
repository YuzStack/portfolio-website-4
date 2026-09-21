import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yusuf Oyinlola Portfolio',
  description:
    'Portfolio website of Yusuf Oyinlola, a Frontend Heavy, Full-Stack Developer, proficient in React, Next.js, Tailwind, TypeScript, JavaScript, and Supabase',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${font.className} h-full bg-[#0d0d1f] antialiased`}
    >
      <body className='min-h-full'>{children}</body>
    </html>
  );
}
