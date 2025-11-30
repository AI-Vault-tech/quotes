import Link from 'next/link';

export default function FeminismPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Feminism</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Explore the transformative movement for gender equality and social justice. 
            Discover how feminist thinkers have challenged patriarchal structures and advocated for women's rights and human dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Waves of Feminism</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">First Wave</h3>
                  <p className="text-foreground/80 mb-4">19th-early 20th century</p>
                  <p className="mb-4">"Woman's wrongs form a great aggregate, but her wrongs are all unnecessary."</p>
                  <Link href="/movements/first-wave" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Second Wave</h3>
                  <p className="text-foreground/80 mb-4">1960s-1980s</p>
                  <p className="mb-4">"The personal is political."</p>
                  <Link href="/movements/second-wave" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Third Wave</h3>
                  <p className="text-foreground/80 mb-4">1990s-2000s</p>
                  <p className="mb-4">"I am not a feminist, I'm a humanist."</p>
                  <Link href="/movements/third-wave" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Fourth Wave</h3>
                  <p className="text-foreground/80 mb-4">2010s-present</p>
                  <p className="mb-4">"We cannot all succeed when half of us are held back."</p>
                  <Link href="/movements/fourth-wave" className="text-accent hover:underline">Learn More →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Key Thinkers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Mary Wollstonecraft</h3>
                  <p className="text-foreground/80 mb-4">1759-1797 • England</p>
                  <p className="mb-4">"I do not wish women to have power over men, but over themselves."</p>
                  <Link href="/authors/wollstonecraft" className="text-accent hover:underline">Explore Wollstonecraft →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Simone de Beauvoir</h3>
                  <p className="text-foreground/80 mb-4">1908-1986 • France</p>
                  <p className="mb-4">"One is not born, but rather becomes, a woman."</p>
                  <Link href="/authors/de-beauvoir" className="text-accent hover:underline">Explore de Beauvoir →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">bell hooks</h3>
                  <p className="text-foreground/80 mb-4">1952-2021 • United States</p>
                  <p className="mb-4">"Feminism is a movement to end sexism, sexist exploitation, and oppression."</p>
                  <Link href="/authors/hooks" className="text-accent hover:underline">Explore hooks →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Audre Lorde</h3>
                  <p className="text-foreground/80 mb-4">1934-1992 • United States</p>
                  <p className="mb-4">"I am not free while any woman is unfree, even when her shackles are very different from my own."</p>
                  <Link href="/authors/lorde" className="text-accent hover:underline">Explore Lorde →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Contemporary Issues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Intersectionality</h3>
                  <p className="text-foreground/80 mb-4">Multiple identities and oppressions</p>
                  <p className="mb-4">"There is no gender-neutral way to be Black in America."</p>
                  <Link href="/concepts/intersectionality" className="text-accent hover:underline">Learn More →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Global Feminism</h3>
                  <p className="text-foreground/80 mb-4">International perspectives</p>
                  <p className="mb-4">"Human rights are women's rights, and women's rights are human rights."</p>
                  <Link href="/concepts/global-feminism" className="text-accent hover:underline">Learn More →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Feminist Principles</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Core Values</span>
              </div>
              <p className="text-foreground/80">
                Explore the foundational principles of feminism through our interactive framework.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How do gender expectations shape your daily life?</li>
                <li>What does equality mean to you in your relationships and workplace?</li>
                <li>How can we create more inclusive spaces for all genders?</li>
                <li>What role does intersectionality play in social justice movements?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}