export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="heading-text text-xl mb-4">VERITAS</h3>
            <p className="text-background/80">
              Where Wisdom Finds Its Voice. A digital sanctuary for 5,000 years of human thought.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="/explore" className="text-background/80 hover:text-accent transition-colors">By Era</a></li>
              <li><a href="/explore/themes" className="text-background/80 hover:text-accent transition-colors">By Theme</a></li>
              <li><a href="/explore/personality" className="text-background/80 hover:text-accent transition-colors">By Personality</a></li>
              <li><a href="/collections" className="text-background/80 hover:text-accent transition-colors">Collections</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/authors" className="text-background/80 hover:text-accent transition-colors">Author Library</a></li>
              <li><a href="/about" className="text-background/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-background/80 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/api" className="text-background/80 hover:text-accent transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-background/80 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-background/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-background/80 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>© {new Date().getFullYear()} Veritas. All rights reserved. Where wisdom finds its voice.</p>
        </div>
      </div>
    </footer>
  );
}