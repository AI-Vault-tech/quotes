import Link from 'next/link';

export default function ModernVoicesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Modern Voices</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover the revolutionary ideas that shaped the modern world. 
            Explore how 19th and early 20th-century thinkers challenged conventions and redefined human understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Revolutionary Thinkers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Karl Marx</h3>
                  <p className="text-foreground/80 mb-4">1818-1883 • Germany</p>
                  <p className="mb-4">"The philosophers have only interpreted the world, in various ways; the point is to change it."</p>
                  <Link href="/authors/marx" className="text-accent hover:underline">Explore Marx →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Friedrich Nietzsche</h3>
                  <p className="text-foreground/80 mb-4">1844-1900 • Germany</p>
                  <p className="mb-4">"That which does not kill us makes us stronger."</p>
                  <Link href="/authors/nietzsche" className="text-accent hover:underline">Explore Nietzsche →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Charles Darwin</h3>
                  <p className="text-foreground/80 mb-4">1809-1882 • England</p>
                  <p className="mb-4">"It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change."</p>
                  <Link href="/authors/darwin" className="text-accent hover:underline">Explore Darwin →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Søren Kierkegaard</h3>
                  <p className="text-foreground/80 mb-4">1813-1855 • Denmark</p>
                  <p className="mb-4">"The most common form of despair is not being who you are."</p>
                  <Link href="/authors/kierkegaard" className="text-accent hover:underline">Explore Kierkegaard →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Social Reformers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Frederick Douglass</h3>
                  <p className="text-foreground/80 mb-4">1818-1895 • United States</p>
                  <p className="mb-4">"If there is no struggle, there is no progress."</p>
                  <Link href="/authors/douglass" className="text-accent hover:underline">Explore Douglass →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Susan B. Anthony</h3>
                  <p className="text-foreground/80 mb-4">1820-1906 • United States</p>
                  <p className="mb-4">"Failure is impossible."</p>
                  <Link href="/authors/anthony" className="text-accent hover:underline">Explore Anthony →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Mahatma Gandhi</h3>
                  <p className="text-foreground/80 mb-4">1869-1948 • India</p>
                  <p className="mb-4">"Be the change that you wish to see in the world."</p>
                  <Link href="/authors/gandhi" className="text-accent hover:underline">Explore Gandhi →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">W.E.B. Du Bois</h3>
                  <p className="text-foreground/80 mb-4">1868-1963 • United States</p>
                  <p className="mb-4">"The cost of liberty is less than the price of repression."</p>
                  <Link href="/authors/du-bois" className="text-accent hover:underline">Explore Du Bois →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Philosophical Innovators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">John Stuart Mill</h3>
                  <p className="text-foreground/80 mb-4">1806-1873 • England</p>
                  <p className="mb-4">"The only way in which a human being can make some approach to knowing the whole of a subject is by hearing what can be said about it by persons of every variety of opinion."</p>
                  <Link href="/authors/mill" className="text-accent hover:underline">Explore Mill →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Henry David Thoreau</h3>
                  <p className="text-foreground/80 mb-4">1817-1862 • United States</p>
                  <p className="mb-4">"Go confidently in the direction of your dreams. Live the life you have imagined."</p>
                  <Link href="/authors/thoreau" className="text-accent hover:underline">Explore Thoreau →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Modern Worldview</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Timeline Visualization</span>
              </div>
              <p className="text-foreground/80">
                Explore the transformation of human thought during the industrial revolution and the age of scientific discovery.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Did You Know?</h3>
              <p className="text-foreground/80 mb-4">
                The 19th century saw more scientific discoveries and technological innovations than all previous centuries combined.
              </p>
              <p className="text-foreground/80">
                Many modern political ideologies, from socialism to libertarianism, trace their origins to 19th-century thinkers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}