import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function AncientWisdomPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Ancient Wisdom</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover the foundational thoughts of civilization from 500 BCE and earlier. 
            Explore the wisdom of Greek philosophers, Eastern sages, and ancient texts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <DynamicQuoteSection 
              title="Greek Philosophers" 
              filterType="school" 
              filterValue="ancient-greek" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Eastern Sages" 
              filterType="theme" 
              filterValue="wisdom" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Biblical Wisdom" 
              filterType="theme" 
              filterValue="truth" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Roman Thinkers" 
              filterType="school" 
              filterValue="roman" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Chinese Philosophers" 
              filterType="school" 
              filterValue="confucianism" 
              limit={200} // Increased from 60 to 200
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Classical Worldview</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Interactive Map</span>
              </div>
              <p className="text-foreground/80">
                Explore the interconnected philosophical traditions of the ancient world through our interactive map.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Did You Know?</h3>
              <p className="text-foreground/80 mb-4">
                The word "philosophy" comes from the Greek words "philo" (love) and "sophia" (wisdom), literally meaning "love of wisdom".
              </p>
              <p className="text-foreground/80">
                Many of the philosophical questions debated today were first posed by ancient thinkers over 2,000 years ago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}