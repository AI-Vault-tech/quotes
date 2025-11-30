import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function StruggleResiliencePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Struggle & Resilience</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Find strength in adversity and wisdom in hardship. 
            Discover how thinkers throughout history have understood resilience, perseverance, and the transformative power of struggle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <DynamicQuoteSection 
              title="Perseverance Through History" 
              filterType="theme" 
              filterValue="perseverance" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Overcoming Adversity" 
              filterType="theme" 
              filterValue="adversity" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Growth Through Challenges" 
              filterType="theme" 
              filterValue="growth" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Finding Meaning in Suffering" 
              filterType="theme" 
              filterValue="meaning" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Courage in the Face of Fear" 
              filterType="theme" 
              filterValue="courage" 
              limit={200} // Increased from 60 to 200
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">The Alchemy of Struggle</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Transformation Process</span>
              </div>
              <p className="text-foreground/80">
                Explore how struggle can be transformed into strength and wisdom through our interactive diagram.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>What challenges have shaped who you are today?</li>
                <li>How can difficulties become opportunities for growth?</li>
                <li>What sources of strength do you draw upon during tough times?</li>
                <li>How can we find meaning in our struggles?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}