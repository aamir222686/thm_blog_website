import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Honest Machine - Build Intelligent Agents in Minutes',
  description: 'Deploy AI-powered bots that understand, learn, and evolve with your business needs. Create complex AI agents without writing code.',
  keywords: ['AI', 'artificial intelligence', 'bots', 'automation', 'no-code', 'agents', 'honest machine'],
  authors: [{ name: 'The Honest Machine Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#5200ff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}