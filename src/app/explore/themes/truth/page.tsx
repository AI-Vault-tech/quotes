import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function TruthKnowledgePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Truth & Knowledge</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Embark on a journey to understand the nature of truth, knowledge, and wisdom. 
            Explore how thinkers have grappled with questions of epistemology and the pursuit of understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <DynamicQuoteSection 
              title="Philosophical Foundations" 
              filterType="theme" 
              filterValue="truth" 
              limit={100} // Increased from 60 to 100
            />
            
            <DynamicQuoteSection 
              title="Scientific Inquiry" 
              filterType="theme" 
              filterValue="knowledge" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Religious and Spiritual Truths" 
              filterType="theme" 
              filterValue="spirituality" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Modern Epistemology" 
              filterType="theme" 
              filterValue="understanding" 
              limit={200} // Increased from 60 to 200
            />
            
            <DynamicQuoteSection 
              title="Wisdom Traditions" 
              filterType="theme" 
              filterValue="wisdom" 
              limit={200} // Increased from 60 to 200
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Paths to Truth</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Knowledge Framework</span>
              </div>
              <p className="text-foreground/80">
                Explore different approaches to understanding truth through our interactive framework of knowledge acquisition.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How do you distinguish between truth and belief in your own life?</li>
                <li>What role does evidence play in forming your convictions?</li>
                <li>How can we remain open to new knowledge while holding firm beliefs?</li>
                <li>What is the relationship between knowledge and wisdom?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}