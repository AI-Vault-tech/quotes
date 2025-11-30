import Link from 'next/link';

export default function DiplomatsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">For Diplomats</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover wisdom that resonates with empathetic idealists, insightful counselors, and passionate advocates. 
            Explore philosophical insights that complement your diplomatic nature and deep understanding of human values.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">INFJ - The Advocate</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Visionary Idealism</h3>
                  <p className="text-foreground/80 mb-4">Purpose-driven action</p>
                  <p className="mb-4">"The best way to predict the future is to create it."</p>
                  <Link href="/wisdom/infj-vision" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Deep Insight</h3>
                  <p className="text-foreground/80 mb-4">Understanding others</p>
                  <p className="mb-4">"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."</p>
                  <Link href="/wisdom/infj-insight" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">INFP - The Mediator</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Authentic Values</h3>
                  <p className="text-foreground/80 mb-4">Genuine self-expression</p>
                  <p className="mb-4">"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."</p>
                  <Link href="/wisdom/infp-authenticity" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Creative Idealism</h3>
                  <p className="text-foreground/80 mb-4">Artistic expression</p>
                  <p className="mb-4">"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."</p>
                  <Link href="/wisdom/infp-creativity" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ENFJ - The Protagonist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Inspiring Leadership</h3>
                  <p className="text-foreground/80 mb-4">Motivating others</p>
                  <p className="mb-4">"A leader is one who knows the way, goes the way, and shows the way."</p>
                  <Link href="/wisdom/enfj-leadership" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Harmonious Relationships</h3>
                  <p className="text-foreground/80 mb-4">Building connections</p>
                  <p className="mb-4">"No one has ever become poor by giving."</p>
                  <Link href="/wisdom/enfj-harmony" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">ENFP - The Campaigner</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Enthusiastic Exploration</h3>
                  <p className="text-foreground/80 mb-4">Curious discovery</p>
                  <p className="mb-4">"The only way to have a friend is to be one."</p>
                  <Link href="/wisdom/enfp-exploration" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Empathetic Understanding</h3>
                  <p className="text-foreground/80 mb-4">Emotional intelligence</p>
                  <p className="mb-4">"We can never judge the lives of others, because each person knows only their own pain and renunciation."</p>
                  <Link href="/wisdom/enfp-empathy" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Diplomatic Wisdom</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Value Systems</span>
              </div>
              <p className="text-foreground/80">
                Explore how different value systems and ethical frameworks connect with diplomatic personality types.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How can philosophical wisdom enhance your ability to understand others?</li>
                <li>What ethical frameworks align with your values and ideals?</li>
                <li>How can you balance empathy with self-care in your relationships?</li>
                <li>What role does authenticity play in your personal and professional life?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}