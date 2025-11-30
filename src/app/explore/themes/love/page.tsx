import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';
import type { Metadata } from 'next';
import { BreadcrumbStructuredData } from '@/components/StructuredData';
import { generateMetadataWithHreflang } from '@/lib/seo';

export const metadata: Metadata = generateMetadataWithHreflang({
  title: "Love & Relationships Wisdom | Veritas",
  description: "Explore 500+ timeless quotes on love, connection, and human relationships. Discover how thinkers across cultures and centuries have understood the complexities of the heart. Find inspiration for your relationships today!",
  keywords: [
    "love quotes", "relationship wisdom", "romantic quotes", "family bonds", 
    "self-love", "connection", "heart wisdom", "emotional intelligence"
  ],
  openGraph: {
    title: "Love & Relationships Wisdom | Veritas",
    description: "Explore 500+ timeless quotes on love, connection, and human relationships from history's greatest minds.",
    url: "https://veritas.example.com/explore/themes/love", // Update with your actual domain
    siteName: "Veritas",
    images: [
      {
        url: "/og-love.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Love & Relationships Wisdom"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love & Relationships Wisdom | Veritas",
    description: "Explore 500+ timeless quotes on love, connection, and human relationships from history's greatest minds.",
    images: ["/twitter-love.png"], // You'll need to add this image
  },
}, '/explore/themes/love', {
  'en-US': '/explore/themes/love',
  'es-ES': '/es/explore/themes/love',
  'fr-FR': '/fr/explore/themes/love',
  'de-DE': '/de/explore/themes/love',
  'it-IT': '/it/explore/themes/love',
  'pt-PT': '/pt/explore/themes/love',
  'zh-CN': '/zh/explore/themes/love',
  'ja-JP': '/ja/explore/themes/love',
  'ko-KR': '/ko/explore/themes/love',
  'ar-SA': '/ar/explore/themes/love'
});

export default function LoveRelationshipsPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://veritas.example.com/" },
    { name: "Explore", url: "https://veritas.example.com/explore" },
    { name: "Love & Relationships", url: "https://veritas.example.com/explore/themes/love" }
  ];

  return (
    <>
      <BreadcrumbStructuredData breadcrumbs={breadcrumbs} />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Love & Relationships</h1>
            <p className="text-xl max-w-3xl mx-auto text-foreground/80">
              Explore timeless wisdom on love, connection, and human relationships. 
              Discover how thinkers across cultures and centuries have understood the complexities of the heart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <DynamicQuoteSection 
                title="Classical Perspectives" 
                filterType="theme" 
                filterValue="love" 
                limit={200} // Increased from 60 to 200
              />
              
              <DynamicQuoteSection 
                title="Modern Insights" 
                filterType="theme" 
                filterValue="relationships" 
                limit={200} // Increased from 60 to 200
              />
              
              <DynamicQuoteSection 
                title="Cultural Wisdom" 
                filterType="theme" 
                filterValue="connection" 
                limit={200} // Increased from 60 to 200
              />
              
              <DynamicQuoteSection 
                title="Romantic Expressions" 
                filterType="theme" 
                filterValue="romance" 
                limit={200} // Increased from 60 to 200
              />
              
              <DynamicQuoteSection 
                title="Family Bonds" 
                filterType="theme" 
                filterValue="family" 
                limit={200} // Increased from 60 to 200
              />
              
              <DynamicQuoteSection 
                title="Self-Love & Compassion" 
                filterType="theme" 
                filterValue="self-love" 
                limit={200} // Increased from 60 to 200
              />
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
                <h3 className="heading-text text-xl mb-4 text-accent">Love Through the Ages</h3>
                <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-foreground/50">Timeline Visualization</span>
                </div>
                <p className="text-foreground/80">
                  Explore how concepts of love and relationships have evolved across cultures and centuries.
                </p>
              </div>
              
              <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
                <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                  <li>What does love mean to you personally?</li>
                  <li>How do cultural differences shape our understanding of relationships?</li>
                  <li>What role does self-love play in healthy relationships?</li>
                  <li>How can we cultivate more compassion in our connections with others?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}