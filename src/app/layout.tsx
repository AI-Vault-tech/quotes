import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cinzel } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WebsiteStructuredData, OrganizationStructuredData, SitelinksSearchBoxStructuredData } from '@/components/StructuredData';
import { generateMetadataWithCanonical } from '@/lib/seo';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Sans-serif font for UI elements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Serif font for quotes and headings
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Decorative font for special elements
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = generateMetadataWithCanonical({
  title: {
    template: "%s | Veritas - Where Wisdom Finds Its Voice",
    default: "Veritas - Where Wisdom Finds Its Voice"
  },
  description: "Discover 11,000+ timeless quotes from history's greatest minds. Explore wisdom on love, success, courage, hope, and more. Transform your perspective with curated insights from philosophers, leaders, and thinkers across 5,000 years of human thought.",
  keywords: [
    "quotes", "wisdom", "philosophy", "inspiration", "motivation", 
    "life advice", "famous quotes", "thinkers", "philosophers", 
    "personal development", "mindfulness", "self improvement"
  ],
  authors: [{ name: "Veritas Team" }],
  creator: "Veritas",
  publisher: "Veritas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Veritas - Where Wisdom Finds Its Voice",
    description: "Discover 11,000+ timeless quotes from history's greatest minds. Explore wisdom on love, success, courage, hope, and more.",
    url: "https://wisdomvault.vercel.app", // Update with your actual domain
    siteName: "Veritas",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Veritas - Where Wisdom Finds Its Voice"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas - Where Wisdom Finds Its Voice",
    description: "Discover 11,000+ timeless quotes from history's greatest minds.",
    creator: "@veritas_wisdom", // Update with your actual Twitter handle
    images: ["/twitter-image.png"], // You'll need to add this image
  },
  verification: {
    google: "jHraxgLIDV6_KU_3yrqz8YTK65ekU7BqBQW96eF8pzA", // Add your Google Search Console verification code
    yandex: "", // Add your Yandex verification code
  },
}, '/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2894915343289598" />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${cinzel.variable} antialiased`}
      >
        <WebsiteStructuredData />
        <OrganizationStructuredData />
        <SitelinksSearchBoxStructuredData />
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}