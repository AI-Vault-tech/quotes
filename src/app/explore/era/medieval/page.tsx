import Link from 'next/link';

export default function MedievalThoughtPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Medieval Thought</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Explore the synthesis of Christian theology and classical philosophy during the Middle Ages. 
            Discover the wisdom of scholars who preserved and expanded ancient knowledge through centuries of transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Christian Philosophers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Augustine of Hippo</h3>
                  <p className="text-foreground/80 mb-4">354-430 CE • Roman North Africa</p>
                  <p className="mb-4">"The world is a book, and those who do not travel read only a page."</p>
                  <Link href="/authors/augustine" className="text-accent hover:underline">Explore Augustine →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Thomas Aquinas</h3>
                  <p className="text-foreground/80 mb-4">1225-1274 CE • Italy</p>
                  <p className="mb-4">"There is nothing higher than the truth."</p>
                  <Link href="/authors/aquinas" className="text-accent hover:underline">Explore Aquinas →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Boethius</h3>
                  <p className="text-foreground/80 mb-4">480-524 CE • Rome</p>
                  <p className="mb-4">"True happiness is the highest good, and it is achieved through virtue."</p>
                  <Link href="/authors/boethius" className="text-accent hover:underline">Explore Boethius →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Anselm of Canterbury</h3>
                  <p className="text-foreground/80 mb-4">1033-1109 CE • Italy/England</p>
                  <p className="mb-4">"I do not seek to understand in order that I may believe, but I believe in order that I may understand."</p>
                  <Link href="/authors/anselm" className="text-accent hover:underline">Explore Anselm →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Islamic Golden Age</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Al-Farabi</h3>
                  <p className="text-foreground/80 mb-4">872-950 CE • Central Asia</p>
                  <p className="mb-4">"The virtuous city is one in which every citizen performs the function for which he is fitted by nature."</p>
                  <Link href="/authors/al-farabi" className="text-accent hover:underline">Explore Al-Farabi →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Averroes (Ibn Rushd)</h3>
                  <p className="text-foreground/80 mb-4">1126-1198 CE • Spain</p>
                  <p className="mb-4">"All things are alike in genus, different in species."</p>
                  <Link href="/authors/averroes" className="text-accent hover:underline">Explore Averroes →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Jewish Philosophy</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Maimonides</h3>
                  <p className="text-foreground/80 mb-4">1138-1204 CE • Spain/Egypt</p>
                  <p className="mb-4">"Teach thy tongue to say 'I do not know' and thous shalt progress."</p>
                  <Link href="/authors/maimonides" className="text-accent hover:underline">Explore Maimonides →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Medieval Worldview</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Interactive Map</span>
              </div>
              <p className="text-foreground/80">
                Explore the interconnected philosophical traditions of the medieval world through our interactive map showing centers of learning.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Did You Know?</h3>
              <p className="text-foreground/80 mb-4">
                Medieval universities were among the first institutions dedicated to systematic study and preservation of knowledge.
              </p>
              <p className="text-foreground/80">
                Islamic scholars translated and preserved Greek philosophical texts, which were later reintroduced to Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}