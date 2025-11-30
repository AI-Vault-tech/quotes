import Link from 'next/link';

export default function ExistentialismPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Existentialism</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Confront the fundamental questions of human existence. 
            Explore how existentialist thinkers grappled with freedom, authenticity, and the search for meaning in an seemingly meaningless world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Key Thinkers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Søren Kierkegaard</h3>
                  <p className="text-foreground/80 mb-4">1813-1855 • Denmark</p>
                  <p className="mb-4">"The most common form of despair is not being who you are."</p>
                  <Link href="/authors/kierkegaard" className="text-accent hover:underline">Explore Kierkegaard →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Friedrich Nietzsche</h3>
                  <p className="text-foreground/80 mb-4">1844-1900 • Germany</p>
                  <p className="mb-4">"He who has a why to live can bear almost any how."</p>
                  <Link href="/authors/nietzsche" className="text-accent hover:underline">Explore Nietzsche →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Jean-Paul Sartre</h3>
                  <p className="text-foreground/80 mb-4">1905-1980 • France</p>
                  <p className="mb-4">"Man is condemned to be free."</p>
                  <Link href="/authors/sartre" className="text-accent hover:underline">Explore Sartre →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Simone de Beauvoir</h3>
                  <p className="text-foreground/80 mb-4">1908-1986 • France</p>
                  <p className="mb-4">"One is not born, but rather becomes, a woman."</p>
                  <Link href="/authors/de-beauvoir" className="text-accent hover:underline">Explore de Beauvoir →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Central Concepts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Existence Precedes Essence</h3>
                  <p className="text-foreground/80 mb-4">The fundamental principle</p>
                  <p className="mb-4">"Man first of all exists, encounters himself, surges up in the world—and defines himself afterwards."</p>
                  <Link href="/concepts/existence-precedes-essence" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Authenticity</h3>
                  <p className="text-foreground/80 mb-4">Living genuinely</p>
                  <p className="mb-4">"The realization that man has no nature, that is to say, that at the start he is nothing."</p>
                  <Link href="/concepts/authenticity" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Bad Faith</h3>
                  <p className="text-foreground/80 mb-4">Self-deception</p>
                  <p className="mb-4">"Bad faith is essentially a lie to oneself."</p>
                  <Link href="/concepts/bad-faith" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Absurdity</h3>
                  <p className="text-foreground/80 mb-4">The human condition</p>
                  <p className="mb-4">"The absurd is the essential concept and the first truth."</p>
                  <Link href="/concepts/absurdity" className="text-accent hover:underline">Learn More →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Cultural Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Literature & Arts</h3>
                  <p className="text-foreground/80 mb-4">Creative expressions</p>
                  <p className="mb-4">"Existentialism profoundly influenced 20th-century literature, theater, and film."</p>
                  <Link href="/impact/literature" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Psychology & Therapy</h3>
                  <p className="text-foreground/80 mb-4">Therapeutic approaches</p>
                  <p className="mb-4">"Existential psychology explores themes of meaning, freedom, and anxiety."</p>
                  <Link href="/impact/psychology" className="text-accent hover:underline">Learn More →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Existential Themes</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Conceptual Map</span>
              </div>
              <p className="text-foreground/80">
                Explore the interconnected themes of existentialism through our conceptual map.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>What does it mean to live authentically?</li>
                <li>How do you create meaning in your own life?</li>
                <li>What responsibilities come with radical freedom?</li>
                <li>How do you confront the anxiety of existence?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}