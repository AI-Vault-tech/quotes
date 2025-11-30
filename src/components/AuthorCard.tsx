import Link from 'next/link';

interface AuthorCardProps {
  id: string;
  name: string;
  era: string;
  bioShort: string;
  schools: string[];
  quoteCount?: number;
  featured?: boolean;
}

export default function AuthorCard({ 
  id, 
  name, 
  era, 
  bioShort, 
  schools, 
  quoteCount = 0,
  featured = false
}: AuthorCardProps) {
  return (
    <div className={`bg-cream/10 p-6 rounded-xl border border-cream/20 hover:border-accent transition-all ${featured ? 'ring-2 ring-accent/30' : ''}`}>
      {featured && (
        <div className="flex justify-end mb-2">
          <span className="px-2 py-1 bg-accent text-background text-xs rounded-full">Featured</span>
        </div>
      )}
      
      <h3 className="font-bold text-xl mb-2">
        <Link href={`/authors/${id}`} className="hover:text-accent">
          {name}
        </Link>
      </h3>
      
      <p className="text-foreground/70 text-sm mb-3">{era}</p>
      
      <p className="text-foreground/80 mb-4">{bioShort}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {schools.map((school, index) => (
          <span key={index} className="px-2 py-1 bg-cream/30 rounded-full text-xs">
            {school}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground/70">{quoteCount} quotes</span>
        <Link href={`/authors/${id}`} className="text-accent hover:underline text-sm">
          View Profile
        </Link>
      </div>
    </div>
  );
}