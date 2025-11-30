import Link from 'next/link';

export default function MarcusAureliusPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/authors" className="text-accent hover:underline">&larr; Back to Authors</Link>
        </div>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-foreground to-foreground/90 text-background rounded-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 items-center">
            <div className="lg:col-span-1">
              <div className="bg-cream/20 w-full aspect-square rounded-full flex items-center justify-center">
                <span className="text-6xl">🏛️</span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="heading-text text-4xl mb-4">Marcus Aurelius</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div>
                  <p className="text-cream/80">Born</p>
                  <p>April 26, 121 CE</p>
                </div>
                <div>
                  <p className="text-cream/80">Died</p>
                  <p>March 17, 180 CE</p>
                </div>
                <div>
                  <p className="text-cream/80">Nationality</p>
                  <p>Roman</p>
                </div>
                <div>
                  <p className="text-cream/80">Era</p>
                  <p>Ancient Rome</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-cream/80">Main Schools</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">Stoicism</span>
                  <span className="px-3 py-1 bg-accent/20 rounded-full text-sm">Roman Philosophy</span>
                </div>
              </div>
              <div className="bg-cream/10 p-4 rounded-lg">
                <p className="quote-text text-xl italic">"You have power over your mind—not outside events. Realize this, and you will find strength."</p>
                <p className="text-right mt-2">— Meditations, Book 4</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Biography */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Biography</h2>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Brief</h3>
                <p className="text-foreground/80">
                  Marcus Aurelius Antoninus was a Roman emperor from 161 to 180 and a Stoic philosopher. 
                  He was the last of the rulers known as the Five Good Emperors and the last emperor of the Pax Romana.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Detailed</h3>
                <p className="text-foreground/80 mb-4">
                  Born into a wealthy family, Marcus Aurelius was adopted by Emperor Antoninus Pius and later became emperor himself. 
                  His reign was marked by military conflicts and natural disasters, but he remained committed to Stoic principles of virtue, 
                  justice, and self-discipline.
                </p>
                <p className="text-foreground/80">
                  During his military campaigns, particularly against Germanic tribes, he wrote his philosophical work "Meditations," 
                  which remains one of the most influential pieces of philosophical literature. The work, written in Greek, 
                  offers timeless wisdom on resilience, self-discipline, and virtue.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-3">Scholarly</h3>
                <p className="text-foreground/80">
                  Marcus Aurelius represents the culmination of Roman imperial Stoicism. His philosophical writings demonstrate 
                  the practical application of Stoic principles to governance and personal conduct. Scholars note his unique position 
                  as both a philosopher-emperor and a practitioner of the philosophical life in the midst of political and military responsibilities.
                </p>
              </div>
            </div>
            
            {/* Major Works */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Major Works</h2>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Meditations</h3>
                  <p className="text-foreground/80 mb-4">
                    A series of personal writings by Marcus Aurelius, documenting his private notes to himself and ideas on Stoic philosophy. 
                    Written during his military campaigns, it remains one of the most influential works of philosophy.
                  </p>
                  
                  <div className="bg-cream/10 p-4 rounded-lg mb-4">
                    <p className="quote-text italic mb-2">"Waste no more time arguing about what a good man should be. Be one."</p>
                    <p className="text-sm text-foreground/70">— Meditations, Book 10</p>
                  </div>
                  
                  <div className="bg-cream/10 p-4 rounded-lg mb-4">
                    <p className="quote-text italic mb-2">"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."</p>
                    <p className="text-sm text-foreground/70">— Meditations, Book 5</p>
                  </div>
                  
                  <Link href="/works/meditations" className="text-accent hover:underline">Read Full Text →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Letters to Fronto</h3>
                  <p className="text-foreground/80 mb-4">
                    A collection of correspondence between Marcus Aurelius and his rhetoric teacher Marcus Cornelius Fronto. 
                    These letters provide insight into his education and early philosophical development.
                  </p>
                  
                  <Link href="/works/fronto-letters" className="text-accent hover:underline">Explore Letters →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Historical Context */}
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Historical Context</h3>
              <p className="text-foreground/80 mb-4">
                Marcus Aurelius ruled during the height of the Roman Empire, a period known as the Pax Romana. 
                His reign faced numerous challenges including wars with Germanic tribes, the Parthian War, and plagues.
              </p>
              <p className="text-foreground/80">
                The Antonine Plague, which may have been either smallpox or measles, devastated the empire during his reign, 
                killing an estimated five million people.
              </p>
            </div>
            
            {/* Influence Network */}
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Influence Network</h3>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">Influenced By</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                    <Link href="/authors/epictetus" className="hover:text-accent">Epictetus</Link>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                    <Link href="/authors/seneca" className="hover:text-accent">Seneca</Link>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                    <span>Socrates</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Influenced</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                    <span>Modern Stoicism Movement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-accent mr-2"></div>
                    <span>Cognitive Behavioral Therapy</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Modern Relevance */}
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Modern Relevance</h3>
              <p className="text-foreground/80 mb-4">
                Marcus Aurelius's "Meditations" has experienced a resurgence in popularity in recent decades, 
                with modern readers finding practical wisdom for dealing with stress, adversity, and uncertainty.
              </p>
              <p className="text-foreground/80">
                His philosophy has influenced modern psychological approaches, particularly cognitive behavioral therapy, 
                which shares Stoic principles about controlling our responses to external events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}