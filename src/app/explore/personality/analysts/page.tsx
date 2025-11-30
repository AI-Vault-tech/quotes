import Link from 'next/link';

export default function AnalystsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">For Analysts</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover wisdom that resonates with strategic thinkers, logical reasoners, and innovative problem-solvers. 
            Explore philosophical insights that complement your analytical nature and intellectual curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">INTJ - The Architect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Strategic Visionaries</h3>
                  <p className="text-foreground/80 mb-4">Long-term planning</p>
                  <p className="mb-4">"The best way to predict the future is to invent it."</p>
                  <Link href="/wisdom/intj-visionaries" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Independent Thinkers</h3>
                  <p className="text-foreground/80 mb-4">Self-reliant analysis</p>
                  <p className="mb-4">"Trust yourself. You know more than you think you do."</p>
                  <Link href="/wisdom/intj-independence" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">INTP - The Thinker</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Abstract Reasoning</h3>
                  <p className="text-foreground/80 mb-4">Theoretical exploration</p>
                  <p className="mb-4">"The important thing is not to stop questioning."</p>
                  <Link href="/wisdom/intp-reasoning" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Intellectual Curiosity</h3>
                  <p className="text-foreground/80 mb-4">Knowledge pursuit</p>
                  <p className="mb-4">"The unexamined life is not worth living."</p>
                  <Link href="/wisdom/intp-curiosity" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ENTJ - The Commander</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Strategic Leadership</h3>
                  <p className="text-foreground/80 mb-4">Organizational vision</p>
                  <p className="mb-4">"The greatest leader is not necessarily the one who does the greatest things."</p>
                  <Link href="/wisdom/entj-leadership" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Efficient Decision-Making</h3>
                  <p className="text-foreground/80 mb-4">Rational choices</p>
                  <p className="mb-4">"In any moment of decision, the best thing you can do is the right thing."</p>
                  <Link href="/wisdom/entj-decision" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">ENTP - The Debater</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Creative Problem-Solving</h3>
                  <p className="text-foreground/80 mb-4">Innovative approaches</p>
                  <p className="mb-4">"The mind is not a vessel to be filled, but a fire to be kindled."</p>
                  <Link href="/wisdom/entp-creativity" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Intellectual Debate</h3>
                  <p className="text-foreground/80 mb-4">Challenging ideas</p>
                  <p className="mb-4">"The untested life is not worth living."</p>
                  <Link href="/wisdom/entp-debate" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Analytical Wisdom</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Thinking Patterns</span>
              </div>
              <p className="text-foreground/80">
                Explore how different analytical thinking patterns connect with philosophical wisdom traditions.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How can philosophical reasoning enhance your analytical skills?</li>
                <li>What wisdom traditions align with your problem-solving approach?</li>
                <li>How can you balance logic with emotional intelligence?</li>
                <li>What role does intellectual humility play in your thinking?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}