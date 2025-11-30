import PremiumHero from '@/components/PremiumHero';
import PremiumFooter from '@/components/PremiumFooter';
import { BreadcrumbStructuredData, SitelinksSearchBoxStructuredData } from '@/components/StructuredData';
import PhilosophicalInsightExplorer from '@/components/PhilosophicalInsightExplorer';
import UniqueThematicCollections from '@/components/UniqueThematicCollections';

export default function Home() {
  const breadcrumbs = [
    { name: "Home", url: "https://veritas.example.com/" }
  ];

  return (
    <>
      <BreadcrumbStructuredData breadcrumbs={breadcrumbs} />
      <SitelinksSearchBoxStructuredData />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <PremiumHero />
        
        {/* Premium Philosophical Insight Explorer */}
        <PhilosophicalInsightExplorer />
        
        {/* Unique Thematic Collections */}
        <UniqueThematicCollections />
        
        {/* Featured Sections */}
        <section className="py-16 bg-cream/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-6 border border-cream/20">
                <h3 className="heading-text text-xl mb-3 text-accent">Quote of the Day</h3>
                <p className="quote-text text-lg italic mb-4">"The unexamined life is not worth living."</p>
                <p className="text-accent font-medium">— Socrates</p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-cream/20">
                <h3 className="heading-text text-xl mb-3 text-accent">Featured Collection</h3>
                <p className="mb-4">Explore our curated collection of Stoic wisdom for modern resilience.</p>
                <button className="text-accent hover:underline font-medium">View Collection</button>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-cream/20">
                <h3 className="heading-text text-xl mb-3 text-accent">Author Spotlight</h3>
                <p className="mb-4">Discover the profound insights of Marcus Aurelius and his timeless Meditations.</p>
                <button className="text-accent hover:underline font-medium">Read More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <PremiumFooter />
    </>
  );
}