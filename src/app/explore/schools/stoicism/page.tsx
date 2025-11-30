import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function StoicismPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Stoicism</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Embrace the ancient philosophy of emotional resilience and virtue. 
            Discover how Stoic principles can help you navigate life's challenges with wisdom and tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <DynamicQuoteSection 
              title="Foundational Figures" 
              filterType="school" 
              filterValue="stoicism" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Core Principles" 
              filterType="theme" 
              filterValue="virtue" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Modern Applications" 
              filterType="theme" 
              filterValue="resilience" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Daily Practices" 
              filterType="theme" 
              filterValue="mindfulness" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Emotional Mastery" 
              filterType="theme" 
              filterValue="control" 
              limit={100} // Increased from 60 to 100
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Stoic Practices</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Daily Exercises</span>
              </div>
              <p className="text-foreground/80">
                Explore practical Stoic exercises for daily life through our interactive guide.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>What aspects of your life are truly within your control?</li>
                <li>How can you respond to challenges with wisdom rather than emotion?</li>
                <li>What virtues do you most want to cultivate in yourself?</li>
                <li>How can remembering your mortality help you live more fully?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}