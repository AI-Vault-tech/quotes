import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';
import type { Metadata } from 'next';
import { BreadcrumbStructuredData } from '@/components/StructuredData';
import { generateMetadataWithHreflang } from '@/lib/seo';

export const metadata: Metadata = generateMetadataWithHreflang({
  title: "Explore Wisdom | Veritas",
  description: "Journey through 11,000+ quotes organized by time periods, themes, schools of philosophy, and personality types. Discover wisdom from Ancient Greece to Contemporary Thinkers. Find the perfect quote for your journey to wisdom today!",
  keywords: [
    "explore quotes", "wisdom by era", "philosophy themes", "philosophical schools", 
    "personality types", "ancient wisdom", "modern thinkers", "philosophical journey"
  ],
  openGraph: {
    title: "Explore Wisdom Through Time and Themes | Veritas",
    description: "Journey through 11,000+ quotes organized by time periods, themes, schools of philosophy, and personality types.",
    url: "https://veritas.example.com/explore", // Update with your actual domain
    siteName: "Veritas",
    images: [
      {
        url: "/og-explore.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Explore Wisdom Through Time and Themes"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Wisdom Through Time and Themes | Veritas",
    description: "Journey through 11,000+ quotes organized by time periods, themes, schools of philosophy, and personality types.",
    images: ["/twitter-explore.png"], // You'll need to add this image
  },
}, '/explore', {
  'en-US': '/explore',
  'es-ES': '/es/explore',
  'fr-FR': '/fr/explore',
  'de-DE': '/de/explore',
  'it-IT': '/it/explore',
  'pt-PT': '/pt/explore',
  'zh-CN': '/zh/explore',
  'ja-JP': '/ja/explore',
  'ko-KR': '/ko/explore',
  'ar-SA': '/ar/explore'
});

export default function ExplorePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://veritas.example.com/" },
    { name: "Explore", url: "https://veritas.example.com/explore" }
  ];

  return (
    <>
      <BreadcrumbStructuredData breadcrumbs={breadcrumbs} />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Explore Wisdom</h1>
            <p className="text-xl max-w-3xl mx-auto text-foreground/80">
              Journey through 5,000 years of human thought across time periods, themes, schools of philosophy, and personality types.
            </p>
          </div>

          {/* Featured Quotes Section */}
          <div className="mb-16">
            <DynamicQuoteSection 
              title="Featured Quotes" 
              filterType="theme" 
              filterValue="wisdom" 
              limit={200} // Increased from 75 to 200
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* By Time Period */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">By Time Period</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/explore/era/ancient" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Ancient Wisdom</h3>
                    <p className="text-sm text-foreground/70">Pre-500 CE</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/era/medieval" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Medieval Thought</h3>
                    <p className="text-sm text-foreground/70">500-1500</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/era/renaissance" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Renaissance & Enlightenment</h3>
                    <p className="text-sm text-foreground/70">1500-1800</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/era/modern" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Modern Voices</h3>
                    <p className="text-sm text-foreground/70">1800-1950</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/era/contemporary" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Contemporary Thinkers</h3>
                    <p className="text-sm text-foreground/70">1950-Present</p>
                  </Link>
                </li>
              </ul>
            </div>

            {/* By Theme */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">By Theme</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/explore/themes/love" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Love & Relationships</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/themes/success" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Success & Ambition</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/themes/struggle" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Struggle & Resilience</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/themes/nature" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Nature & Beauty</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/themes/truth" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Truth & Knowledge</h3>
                  </Link>
                </li>
              </ul>
            </div>

            {/* By Philosophy School */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">By Philosophy School</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/explore/schools/stoicism" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Stoicism</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/schools/existentialism" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Existentialism</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/schools/buddhism" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Buddhism</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/schools/feminism" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Feminism</h3>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/schools/pragmatism" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">Pragmatism</h3>
                  </Link>
                </li>
              </ul>
            </div>

            {/* By Personality */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">By Personality</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/explore/personality/analysts" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">For Analysts</h3>
                    <p className="text-sm text-foreground/70">INTJ, INTP, ENTJ, ENTP</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/personality/diplomats" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">For Diplomats</h3>
                    <p className="text-sm text-foreground/70">INFJ, INFP, ENFJ, ENFP</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/personality/sentinels" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">For Sentinels</h3>
                    <p className="text-sm text-foreground/70">ISTJ, ISFJ, ESTJ, ESFJ</p>
                  </Link>
                </li>
                <li>
                  <Link href="/explore/personality/explorers" className="block p-4 bg-background rounded-lg border border-cream/30 hover:border-accent transition-all">
                    <h3 className="font-bold mb-2">For Explorers</h3>
                    <p className="text-sm text-foreground/70">ISTP, ISFP, ESTP, ESFP</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}