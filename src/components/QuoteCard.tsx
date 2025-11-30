import Link from 'next/link';

interface QuoteCardProps {
  id: string;
  text: string;
  author: string;
  authorId: string;
  source?: string;
  tags?: string[];
  theme?: string;
  language?: string;
  onSave?: () => void;
  saved?: boolean;
}

export default function QuoteCard({ 
  id, 
  text, 
  author, 
  authorId, 
  source, 
  tags = [], 
  theme,
  language,
  onSave,
  saved = false
}: QuoteCardProps) {
  return (
    <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 hover:border-accent transition-all">
      <p className="quote-text text-xl mb-4">"{text}"</p>
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-foreground/70">
          — <Link href={`/authors/${authorId}`} className="text-accent hover:underline">{author}</Link>
          {source && <span>, {source}</span>}
          {language && <span className="ml-2 text-xs bg-cream/30 px-2 py-1 rounded">{language.toUpperCase()}</span>}
        </p>
        <button 
          onClick={onSave}
          className={`text-foreground/50 hover:text-accent ${saved ? 'text-accent' : ''}`}
          aria-label={saved ? "Remove from sanctuary" : "Save to sanctuary"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link 
              key={index} 
              href={`/explore/themes/${tag.toLowerCase()}`}
              className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs hover:bg-accent/20 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
      
      <div className="mt-4">
        <Link 
          href={`/quotes/${id}`} 
          className="text-accent text-sm hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}