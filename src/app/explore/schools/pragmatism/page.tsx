import Link from 'next/link';

export default function PragmatismPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Pragmatism</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Embrace the philosophy of practical consequences and real-world application. 
            Discover how pragmatist thinkers emphasized the importance of experience, experimentation, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Foundational Thinkers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Charles Sanders Peirce</h3>
                  <p className="text-foreground/80 mb-4">1839-1914 • United States</p>
                  <p className="mb-4">"The opinion which is fated to be ultimately agreed to by all who investigate is what we mean by the truth."</p>
                  <Link href="/authors/peirce" className="text-accent hover:underline">Explore Peirce →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">William James</h3>
                  <p className="text-foreground/80 mb-4">1842-1910 • United States</p>
                  <p className="mb-4">"The true is only the expedient in the way of our thinking."</p>
                  <Link href="/authors/james" className="text-accent hover:underline">Explore James →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">John Dewey</h3>
                  <p className="text-foreground/80 mb-4">1859-1952 • United States</p>
                  <p className="mb-4">"Education is not preparation for life; education is life itself."</p>
                  <Link href="/authors/dewey" className="text-accent hover:underline">Explore Dewey →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Richard Rorty</h3>
                  <p className="text-foreground/80 mb-4">1931-2007 • United States</p>
                  <p className="mb-4">"The goal of philosophy is not to discover the truth, but to create it."</p>
                  <Link href="/authors/rorty" className="text-accent hover:underline">Explore Rorty →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Truth as Utility</h3>
                  <p className="text-foreground/80 mb-4">Practical consequences</p>
                  <p className="mb-4">"The true is the name for whatever proves itself to be good in the way of belief."</p>
                  <Link href="/concepts/truth-utility" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Fallibilism</h3>
                  <p className="text-foreground/80 mb-4">Provisional knowledge</p>
                  <p className="mb-4">"To be radically doubtful about everything is to be radically doubtful about nothing."</p>
                  <Link href="/concepts/fallibilism" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Instrumentalism</h3>
                  <p className="text-foreground/80 mb-4">Tools for problem-solving</p>
                  <p className="mb-4">"Ideas are tools for action, not mirrors of reality."</p>
                  <Link href="/concepts/instrumentalism" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Democratic Experimentalism</h3>
                  <p className="text-foreground/80 mb-4">Social problem-solving</p>
                  <p className="mb-4">"The public is not a collection of individuals, but a community of inquiry."</p>
                  <Link href="/concepts/democratic-experimentalism" className="text-accent hover:underline">Learn More →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Modern Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Education Reform</h3>
                  <p className="text-foreground/80 mb-4">Progressive learning</p>
                  <p className="mb-4">"Learning by doing is the only way to truly understand."</p>
                  <Link href="/applications/education" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Policy Development</h3>
                  <p className="text-foreground/80 mb-4">Evidence-based solutions</p>
                  <p className="mb-4">"Test ideas through implementation, not just theory."</p>
                  <Link href="/applications/policy" className="text-accent hover:underline">Learn More →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Pragmatic Methods</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Problem-Solving Framework</span>
              </div>
              <p className="text-foreground/80">
                Explore the pragmatic approach to addressing complex challenges through our interactive framework.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How can you apply pragmatic thinking to solve problems in your life?</li>
                <li>What does it mean to judge ideas by their practical consequences?</li>
                <li>How can fallibilism help you remain open to new perspectives?</li>
                <li>What role should experimentation play in social and political reform?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}