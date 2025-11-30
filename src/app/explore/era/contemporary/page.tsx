import Link from 'next/link';

export default function ContemporaryThinkersPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Contemporary Thinkers</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Engage with the voices shaping our present and future. 
            Discover how modern thinkers address today's challenges through philosophy, science, and social innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Philosophy & Ethics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Peter Singer</h3>
                  <p className="text-foreground/80 mb-4">1946-Present • Australia/USA</p>
                  <p className="mb-4">"The way we choose to treat animals is a moral issue, not a matter of personal taste."</p>
                  <Link href="/authors/singer" className="text-accent hover:underline">Explore Singer →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Martha Nussbaum</h3>
                  <p className="text-foreground/80 mb-4">1947-Present • United States</p>
                  <p className="mb-4">"The ability to see the world from another's perspective is fundamental to human intelligence."</p>
                  <Link href="/authors/nussbaum" className="text-accent hover:underline">Explore Nussbaum →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Slavoj Žižek</h3>
                  <p className="text-foreground/80 mb-4">1949-Present • Slovenia</p>
                  <p className="mb-4">"The worst thing is not when people are evil but when they are passive."</p>
                  <Link href="/authors/zizek" className="text-accent hover:underline">Explore Žižek →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Judith Butler</h3>
                  <p className="text-foreground/80 mb-4">1956-Present • United States</p>
                  <p className="mb-4">"Gender is a kind of performance that we do, rather than an identity that we have."</p>
                  <Link href="/authors/butler" className="text-accent hover:underline">Explore Butler →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Science & Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Yuval Noah Harari</h3>
                  <p className="text-foreground/80 mb-4">1976-Present • Israel</p>
                  <p className="mb-4">"The real test of 'knowing who you are' is not falling apart when you do something wrong."</p>
                  <Link href="/authors/harari" className="text-accent hover:underline">Explore Harari →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Michio Kaku</h3>
                  <p className="text-foreground/80 mb-4">1947-Present • United States</p>
                  <p className="mb-4">"The future is not something we enter, but something we create."</p>
                  <Link href="/authors/kaku" className="text-accent hover:underline">Explore Kaku →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Brian Cox</h3>
                  <p className="text-foreground/80 mb-4">1968-Present • United Kingdom</p>
                  <p className="mb-4">"We are all made of star stuff."</p>
                  <Link href="/authors/cox" className="text-accent hover:underline">Explore Cox →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Neil deGrasse Tyson</h3>
                  <p className="text-foreground/80 mb-4">1958-Present • United States</p>
                  <p className="mb-4">"The good thing about science is that it's true whether or not you believe in it."</p>
                  <Link href="/authors/tyson" className="text-accent hover:underline">Explore Tyson →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Social Justice & Activism</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Angela Davis</h3>
                  <p className="text-foreground/80 mb-4">1944-Present • United States</p>
                  <p className="mb-4">"I am no longer accepting the things I cannot change. I am changing the things I cannot accept."</p>
                  <Link href="/authors/davis" className="text-accent hover:underline">Explore Davis →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Noam Chomsky</h3>
                  <p className="text-foreground/80 mb-4">1928-Present • United States</p>
                  <p className="mb-4">"If we don't believe in freedom of expression for people we despise, we don't believe in it at all."</p>
                  <Link href="/authors/chomsky" className="text-accent hover:underline">Explore Chomsky →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">bell hooks</h3>
                  <p className="text-foreground/80 mb-4">1952-2021 • United States</p>
                  <p className="mb-4">"I decided I would rather be free than comfortable."</p>
                  <Link href="/authors/hooks" className="text-accent hover:underline">Explore hooks →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Malala Yousafzai</h3>
                  <p className="text-foreground/80 mb-4">1997-Present • Pakistan</p>
                  <p className="mb-4">"One child, one teacher, one book, one pen can change the world."</p>
                  <Link href="/authors/yousafzai" className="text-accent hover:underline">Explore Yousafzai →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Contemporary Worldview</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Global Issues Map</span>
              </div>
              <p className="text-foreground/80">
                Explore how modern thinkers address global challenges through our interactive map of contemporary issues.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Did You Know?</h3>
              <p className="text-foreground/80 mb-4">
                The internet has revolutionized how ideas spread, allowing thinkers to reach global audiences instantly.
              </p>
              <p className="text-foreground/80">
                Today's philosophers often work across disciplines, combining insights from science, technology, and social sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}