'use client';

import { useState, useEffect } from 'react';
import QuoteCard from '@/components/QuoteCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface Quote {
  id: string;
  text: string;
  author: string;
  authorId: string;
  tags: string[];
  themes: string[];
  schools: string[];
  language?: string;
}

interface DynamicQuoteSectionProps {
  title: string;
  filterType: 'theme' | 'school' | 'author' | 'era' | 'language';
  filterValue: string;
  limit?: number;
  language?: string;
}

export default function DynamicQuoteSection({ 
  title, 
  filterType, 
  filterValue,
  limit = 6,
  language
}: DynamicQuoteSectionProps) {
  const { language: contextLanguage } = useLanguage();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  
  // Use the language prop if provided, otherwise use context language
  const effectiveLanguage = language || contextLanguage || 'en';

  useEffect(() => {
    // Reset offset when filter changes
    setOffset(0);
    setQuotes([]);
    setInitialLoad(true);
  }, [filterType, filterValue]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Build the API URL with appropriate filter
        let apiUrl = `/api/quotes?limit=${limit}&offset=${offset}`;
        
        switch (filterType) {
          case 'theme':
            apiUrl += `&theme=${filterValue}`;
            break;
          case 'school':
            apiUrl += `&school=${filterValue}`;
            break;
          case 'author':
            apiUrl += `&author=${filterValue}`;
            break;
          case 'era':
            // For era, we'll need to filter by author era in the future
            // For now, we'll just fetch a larger set
            apiUrl += `&limit=${limit * 2}`;
            break;
          case 'language':
            apiUrl += `&language=${filterValue}`;
            break;
        }
        
        // Add language filter
        apiUrl += `&language=${effectiveLanguage}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (response.ok) {
          // If offset is 0, replace quotes, otherwise append
          if (offset === 0) {
            setQuotes(data.quotes);
          } else {
            setQuotes(prev => [...prev, ...data.quotes]);
          }
          setTotal(data.total);
          setHasMore(data.quotes.length === limit);
          setInitialLoad(false);
        } else {
          setError(data.error || 'Failed to fetch quotes');
        }
      } catch (err) {
        setError('An error occurred while fetching quotes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [filterType, filterValue, limit, offset, effectiveLanguage]);

  const loadMore = () => {
    setOffset(prev => prev + limit);
  };

  const showInitialLoader = loading && initialLoad;
  const showLoadMoreLoader = loading && !initialLoad;

  // Optimize rendering for better performance with large lists
  const renderQuotes = () => {
    // For initial load, show skeleton loaders
    if (showInitialLoader) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(Math.min(limit, 15))].map((_, index) => ( // Increased from 12 to 15
            <div key={index} className="bg-background p-6 rounded-lg border border-cream/30 animate-pulse">
              <div className="h-4 bg-cream/20 rounded mb-4"></div>
              <div className="h-3 bg-cream/20 rounded mb-2 w-3/4"></div>
              <div className="h-3 bg-cream/20 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      );
    }

    // For subsequent loads, show actual quotes
    if (quotes.length > 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              id={quote.id}
              text={quote.text}
              author={quote.author}
              authorId={quote.authorId}
              tags={quote.tags}
              language={quote.language}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="text-center py-8 text-foreground/70">
        No quotes found for this category.
      </div>
    );
  };

  if (error) {
    return (
      <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
        {title && <h2 className="heading-text text-2xl mb-6 text-accent">{title}</h2>}
        <div className="text-red-500 p-4 bg-red-100 rounded">
          Error loading quotes: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
      {title && <h2 className="heading-text text-2xl mb-6 text-accent">{title}</h2>}
      {renderQuotes()}
      {showLoadMoreLoader && (
        <div className="text-center mt-8">
          <div className="inline-block px-6 py-3 bg-accent text-background rounded-full">
            Loading more quotes...
          </div>
        </div>
      )}
      {hasMore && !showLoadMoreLoader && (
        <div className="text-center mt-8">
          <button 
            onClick={loadMore}
            className="px-6 py-3 bg-accent text-background rounded-full hover:bg-accent/80 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
      {!hasMore && total > quotes.length && (
        <div className="text-center mt-8 text-foreground/70">
          Showing all {total} quotes
        </div>
      )}
      {!hasMore && total <= quotes.length && (
        <div className="text-center mt-8 text-foreground/70">
          Showing all quotes ({quotes.length})
        </div>
      )}
    </div>
  );
}