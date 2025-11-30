import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';
import { getFeaturedAuthors, getAllAuthors } from '@/lib/quotes';

// In a real app, this would come from our data
const featuredAuthors = [
  {
    id: "socrates",
    name: "Socrates",
    era: "Ancient Greece",
    bioShort: "Greek philosopher from Athens, widely credited as the founder of Western philosophy.",
    schools: ["Ancient Greek"],
    quoteCount: 42,
    featured: true
  },
  {
    id: "marcus-aurelius",
    name: "Marcus Aurelius",
    era: "Roman Empire",
    bioShort: "Roman emperor from 161 to 180 and a Stoic philosopher.",
    schools: ["Stoicism"],
    quoteCount: 38,
    featured: true
  },
  {
    id: "albert-einstein",
    name: "Albert Einstein",
    era: "Modern Era",
    bioShort: "German-born theoretical physicist who developed the theory of relativity.",
    schools: ["Modern Science"],
    quoteCount: 25,
    featured: true
  }
];

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Authors Library</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Explore the lives and thoughts of history's greatest minds. From ancient philosophers to contemporary thinkers, 
            discover the wisdom that shaped our world.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-12">
          <h2 className="heading-text text-2xl mb-6 text-accent">Interactive Timeline</h2>
          <div className="relative h-32">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-accent/30"></div>
            <div className="absolute top-1/2 left-0 w-1/5 h-1 bg-accent"></div>
            
            {/* Timeline markers */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-2"></div>
              <span className="text-sm">Ancient</span>
            </div>
            
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-2"></div>
              <span className="text-sm">Medieval</span>
            </div>
            
            <div className="absolute top-0 left-2/4 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-2"></div>
              <span className="text-sm">Renaissance</span>
            </div>
            
            <div className="absolute top-0 left-3/4 transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-2"></div>
              <span className="text-sm">Modern</span>
            </div>
            
            <div className="absolute top-0 left-full transform -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-2"></div>
              <span className="text-sm">Contemporary</span>
            </div>
          </div>
        </div>

        {/* Featured Authors */}
        <div className="mb-12">
          <h2 className="heading-text text-2xl mb-6 text-accent">Featured Authors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAuthors.map((author) => (
              <AuthorCard
                key={author.id}
                id={author.id}
                name={author.name}
                era={author.era}
                bioShort={author.bioShort}
                schools={author.schools}
                quoteCount={author.quoteCount}
                featured={author.featured}
              />
            ))}
          </div>
        </div>

        {/* Author Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-background p-6 rounded-xl border border-cream/20">
            <h3 className="font-bold text-xl mb-4 text-accent">Philosophers</h3>
            <p className="text-foreground/80 mb-4">600+ profiles</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Socrates</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Plato</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Aristotle</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Kant</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Nietzsche</span>
            </div>
            <Link href="/authors/category/philosophers" className="text-accent hover:underline">Explore all Philosophers →</Link>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-cream/20">
            <h3 className="font-bold text-xl mb-4 text-accent">Poets & Writers</h3>
            <p className="text-foreground/80 mb-4">400+ profiles</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Shakespeare</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Emily Dickinson</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Rumi</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Maya Angelou</span>
            </div>
            <Link href="/authors/category/poets" className="text-accent hover:underline">Explore all Poets →</Link>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-cream/20">
            <h3 className="font-bold text-xl mb-4 text-accent">Leaders & Activists</h3>
            <p className="text-foreground/80 mb-4">300+ profiles</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Gandhi</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Martin Luther King Jr.</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Nelson Mandela</span>
            </div>
            <Link href="/authors/category/leaders" className="text-accent hover:underline">Explore all Leaders →</Link>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-cream/20">
            <h3 className="font-bold text-xl mb-4 text-accent">Scientists & Innovators</h3>
            <p className="text-foreground/80 mb-4">200+ profiles</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Albert Einstein</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Marie Curie</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Leonardo da Vinci</span>
            </div>
            <Link href="/authors/category/scientists" className="text-accent hover:underline">Explore all Scientists →</Link>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-cream/20">
            <h3 className="font-bold text-xl mb-4 text-accent">Artists & Creatives</h3>
            <p className="text-foreground/80 mb-4">200+ profiles</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Vincent van Gogh</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Frida Kahlo</span>
            </div>
            <Link href="/authors/category/artists" className="text-accent hover:underline">Explore all Artists →</Link>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-cream/20">
            <h3 className="font-bold text-xl mb-4 text-accent">Spiritual Teachers</h3>
            <p className="text-foreground/80 mb-4">150+ profiles</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Buddha</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Jesus</span>
              <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Rumi</span>
            </div>
            <Link href="/authors/category/spiritual" className="text-accent hover:underline">Explore all Spiritual Teachers →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}