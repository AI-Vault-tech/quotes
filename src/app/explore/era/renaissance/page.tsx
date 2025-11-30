import Link from 'next/link';

export default function RenaissanceEnlightenmentPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Renaissance & Enlightenment</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Experience the rebirth of humanism and the dawn of reason. 
            Discover how thinkers challenged tradition and laid the groundwork for modern philosophy, science, and democracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Renaissance Humanists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Erasmus</h3>
                  <p className="text-foreground/80 mb-4">1466-1536 • Netherlands</p>
                  <p className="mb-4">"The main hope of a nation lies in the proper education of its youth."</p>
                  <Link href="/authors/erasmus" className="text-accent hover:underline">Explore Erasmus →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Michel de Montaigne</h3>
                  <p className="text-foreground/80 mb-4">1533-1592 • France</p>
                  <p className="mb-4">"I am myself the matter of my book."</p>
                  <Link href="/authors/montaigne" className="text-accent hover:underline">Explore Montaigne →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Niccolò Machiavelli</h3>
                  <p className="text-foreground/80 mb-4">1469-1527 • Italy</p>
                  <p className="mb-4">"It is better to be feared than loved, if you cannot be both."</p>
                  <Link href="/authors/machiavelli" className="text-accent hover:underline">Explore Machiavelli →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Galileo Galilei</h3>
                  <p className="text-foreground/80 mb-4">1564-1642 • Italy</p>
                  <p className="mb-4">"Mathematics is the language with which God has written the universe."</p>
                  <Link href="/authors/galileo" className="text-accent hover:underline">Explore Galileo →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Enlightenment Thinkers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">John Locke</h3>
                  <p className="text-foreground/80 mb-4">1632-1704 • England</p>
                  <p className="mb-4">"No man's knowledge here can go beyond his experience."</p>
                  <Link href="/authors/locke" className="text-accent hover:underline">Explore Locke →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Voltaire</h3>
                  <p className="text-foreground/80 mb-4">1694-1778 • France</p>
                  <p className="mb-4">"Judge a man by his questions rather than by his answers."</p>
                  <Link href="/authors/voltaire" className="text-accent hover:underline">Explore Voltaire →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Jean-Jacques Rousseau</h3>
                  <p className="text-foreground/80 mb-4">1712-1778 • Switzerland/France</p>
                  <p className="mb-4">"Man is born free, and everywhere he is in chains."</p>
                  <Link href="/authors/rousseau" className="text-accent hover:underline">Explore Rousseau →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Immanuel Kant</h3>
                  <p className="text-foreground/80 mb-4">1724-1804 • Germany</p>
                  <p className="mb-4">"Two things awe me most, the starry sky above me and the moral law within me."</p>
                  <Link href="/authors/kant" className="text-accent hover:underline">Explore Kant →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Founding Philosophers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Thomas Jefferson</h3>
                  <p className="text-foreground/80 mb-4">1743-1826 • United States</p>
                  <p className="mb-4">"I cannot live without books."</p>
                  <Link href="/authors/jefferson" className="text-accent hover:underline">Explore Jefferson →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Benjamin Franklin</h3>
                  <p className="text-foreground/80 mb-4">1706-1790 • United States</p>
                  <p className="mb-4">"An investment in knowledge pays the best interest."</p>
                  <Link href="/authors/franklin" className="text-accent hover:underline">Explore Franklin →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Renaissance & Enlightenment</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Timeline Visualization</span>
              </div>
              <p className="text-foreground/80">
                Explore the progression from medieval scholasticism to humanism and rationalism through our interactive timeline.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Did You Know?</h3>
              <p className="text-foreground/80 mb-4">
                The printing press, invented in the 15th century, revolutionized the spread of ideas and made books accessible to the general public.
              </p>
              <p className="text-foreground/80">
                Many of the democratic ideals we cherish today were first articulated by Enlightenment philosophers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}