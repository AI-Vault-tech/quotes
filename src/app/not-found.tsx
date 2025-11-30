import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="heading-text text-6xl md:text-8xl mb-6 text-accent">404</h1>
          <h2 className="heading-text text-3xl md:text-4xl mb-6">Wisdom Not Found</h2>
          <p className="text-xl text-foreground/80 mb-8">
            The path you seek does not exist in our library of wisdom. 
            Even in the unknown, there is opportunity for discovery.
          </p>
          
          <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
            <p className="quote-text text-2xl mb-4">
              "The only true wisdom is in knowing you know nothing."
            </p>
            <p className="text-foreground/70">— Socrates</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/" 
              className="bg-accent text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Return to Wisdom Gateway
            </Link>
            <Link 
              href="/explore" 
              className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all text-center"
            >
              Explore Wisdom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}