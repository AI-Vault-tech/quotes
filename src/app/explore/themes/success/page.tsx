import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function SuccessAmbitionPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Success & Ambition</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover wisdom on achievement, purpose, and the pursuit of excellence. 
            Learn from thinkers who have explored the nature of success and what it means to live a fulfilling life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <DynamicQuoteSection 
              title="Ancient Wisdom on Excellence" 
              filterType="theme" 
              filterValue="excellence" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Modern Perspectives" 
              filterType="theme" 
              filterValue="achievement" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Eastern Philosophies" 
              filterType="theme" 
              filterValue="purpose" 
               limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Leadership Insights" 
              filterType="theme" 
              filterValue="leadership" 
               limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Goal Setting Wisdom" 
              filterType="theme" 
              filterValue="goals" 
               limit={200} // Increased from 60 to 200
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Paths to Success</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Mind Map Visualization</span>
              </div>
              <p className="text-foreground/80">
                Explore different philosophical approaches to success and achievement through our interactive mind map.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How do you define success for yourself?</li>
                <li>What role does failure play in achieving your goals?</li>
                <li>How can ambition be balanced with contentment?</li>
                <li>What does it mean to live a purposeful life?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}