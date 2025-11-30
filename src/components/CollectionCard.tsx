import Link from 'next/link';

interface CollectionCardProps {
  id: string;
  title: string;
  description: string;
  authors?: string[];
  modules?: number;
  participants?: number;
  isNew?: boolean;
  isPopular?: boolean;
  variant?: 'default' | 'featured';
}

export default function CollectionCard({ 
  id, 
  title, 
  description, 
  authors = [], 
  modules = 0, 
  participants = 0,
  isNew = false,
  isPopular = false,
  variant = 'default'
}: CollectionCardProps) {
  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-br from-foreground to-foreground/90 text-background rounded-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="heading-text text-2xl mb-2">{title}</h2>
              <p className="text-cream/80">{description}</p>
            </div>
            {(isNew || isPopular) && (
              <span className="bg-accent text-foreground px-3 py-1 rounded-full text-sm">
                {isNew ? 'New' : 'Popular'}
              </span>
            )}
          </div>
          
          {authors.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {authors.map((author, index) => (
                <span key={index} className="px-3 py-1 bg-accent/20 rounded-full text-sm">
                  {author}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-cream/80">{modules > 0 ? `${modules} Modules` : ''}</p>
              <p className="text-cream/80">{participants.toLocaleString()} participants</p>
            </div>
            <Link href={`/collections/${id}`} className="bg-accent text-foreground px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
              Begin Journey
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="heading-text text-2xl mb-2">{title}</h2>
          <p className="text-foreground/70">{description}</p>
        </div>
        {(isNew || isPopular) && (
          <span className="bg-accent text-foreground px-3 py-1 rounded-full text-sm">
            {isNew ? 'New' : 'Popular'}
          </span>
        )}
      </div>
      
      {authors.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {authors.map((author, index) => (
            <span key={index} className="px-3 py-1 bg-cream/30 rounded-full text-sm">
              {author}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-foreground/70">{modules > 0 ? `${modules} Modules` : ''}</p>
          <p className="text-foreground/70">{participants.toLocaleString()} participants</p>
        </div>
        <Link href={`/collections/${id}`} className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Explore Collection
        </Link>
      </div>
    </div>
  );
}