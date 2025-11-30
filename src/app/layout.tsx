import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Veritas - Ancient Wisdom for Modern Life',
  description: 'Explore 11,000+ timeless quotes from history\'s greatest minds. Discover wisdom from philosophers, poets, scientists, and leaders across cultures and centuries.',
  keywords: ['philosophy', 'quotes', 'wisdom', 'stoicism', 'mindfulness', 'personal growth'],
  authors: [{ name: 'Veritas Team' }],
  creator: 'Veritas',
  publisher: 'Veritas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Veritas - Ancient Wisdom for Modern Life',
    description: 'Explore 11,000+ timeless quotes from history\'s greatest minds.',
    url: 'https://wisdomvault.vercel.app',
    siteName: 'Veritas',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Veritas - Ancient Wisdom for Modern Life',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veritas - Ancient Wisdom for Modern Life',
    description: 'Explore 11,000+ timeless quotes from history\'s greatest minds.',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="jHraxgLIDV6_KU_3yrqz8YTK65ekU7BqBQW96eF8pzA" />
      </head>
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}