import Link from 'next/link';

export default function ExplorersPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">For Explorers</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover wisdom that resonates with spontaneous adventurers, flexible creators, and hands-on problem-solvers. 
            Explore philosophical insights that complement your adaptable nature and zest for new experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ISTP - The Virtuoso</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Practical Mastery</h3>
                  <p className="text-foreground/80 mb-4">Hands-on expertise</p>
                  <p className="mb-4">"The best way to find out if you can trust somebody is to trust them."</p>
                  <Link href="/wisdom/istp-mastery" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Flexible Adaptation</h3>
                  <p className="text-foreground/80 mb-4">Responsive problem-solving</p>
                  <p className="mb-4">"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."</p>
                  <Link href="/wisdom/istp-adaptation" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ISFP - The Adventurer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Artistic Expression</h3>
                  <p className="text-foreground/80 mb-4">Creative authenticity</p>
                  <p className="mb-4">"Creativity takes courage."</p>
                  <Link href="/wisdom/isfp-creativity" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Gentle Sensitivity</h3>
                  <p className="text-foreground/80 mb-4">Empathetic awareness</p>
                  <p className="mb-4">"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."</p>
                  <Link href="/wisdom/isfp-sensitivity" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ESTP - The Entrepreneur</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Dynamic Action</h3>
                  <p className="text-foreground/80 mb-4">Energetic engagement</p>
                  <p className="mb-4">"You miss 100% of the shots you don't take."</p>
                  <Link href="/wisdom/estp-action" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Practical Resourcefulness</h3>
                  <p className="text-foreground/80 mb-4">Quick problem-solving</p>
                  <p className="mb-4">"The expert in anything was once a beginner."</p>
                  <Link href="/wisdom/estp-resourcefulness" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">ESFP - The Entertainer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Enthusiastic Engagement</h3>
                  <p className="text-foreground/80 mb-4">Joyful participation</p>
                  <p className="mb-4">"The best way to take care of the future is to take care of the present moment."</p>
                  <Link href="/wisdom/esfp-enthusiasm" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Spontaneous Discovery</h3>
                  <p className="text-foreground/80 mb-4">Flexible exploration</p>
                  <p className="mb-4">"Life is either a daring adventure or nothing at all."</p>
                  <Link href="/wisdom/esfp-discovery" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Explorer Wisdom</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Experience Principles</span>
              </div>
              <p className="text-foreground/80">
                Explore how different experiential wisdom traditions connect with explorer personality types.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How can philosophical wisdom enhance your ability to adapt to new situations?</li>
                <li>What role does hands-on experience play in your learning and growth?</li>
                <li>How can you balance spontaneity with long-term planning?</li>
                <li>What wisdom traditions celebrate the joy of living in the moment?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}