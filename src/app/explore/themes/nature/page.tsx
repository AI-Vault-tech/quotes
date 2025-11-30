import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function NatureBeautyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Nature & Beauty</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Contemplate the profound wisdom found in the natural world. 
            Discover how thinkers across cultures have drawn inspiration from nature's beauty and cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <DynamicQuoteSection 
              title="Ancient Nature Philosophies" 
              filterType="theme" 
              filterValue="nature" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Modern Environmental Wisdom" 
              filterType="theme" 
              filterValue="environment" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Beauty and Aesthetics" 
              filterType="theme" 
              filterValue="beauty" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Seasonal Reflections" 
              filterType="theme" 
              filterValue="seasons" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Wilderness and Solitude" 
              filterType="theme" 
              filterValue="solitude" 
              limit={200} // Increased from 60 to 200
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Nature's Lessons</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Ecosystem Visualization</span>
              </div>
              <p className="text-foreground/80">
                Explore how nature's principles can teach us about balance, resilience, and harmony through our interactive ecosystem model.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How does spending time in nature affect your perspective on life?</li>
                <li>What can we learn from the cycles and rhythms of the natural world?</li>
                <li>How can we better align ourselves with nature's principles?</li>
                <li>What role does beauty play in our understanding of truth?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}