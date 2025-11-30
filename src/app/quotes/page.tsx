'use client';

import { useState, useEffect } from 'react';
import QuoteCard from '@/components/QuoteCard';
import Link from 'next/link';

interface Quote {
  id: string;
  text: string;
  author: string;
  authorId: string;
  tags: string[];
  themes: string[];
  schools: string[];
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(1000); // Increased from 300 to 1000
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchQuotes();
  }, [limit, offset]);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/quotes?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      
      if (response.ok) {
        setQuotes(data.quotes);
        setTotal(data.total);
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

  const handleNext = () => {
    if (offset + limit < total) {
      setOffset(offset + limit);
    }
  };

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset(Math.max(0, offset - limit));
    }
  };

  if (loading && quotes.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-accent hover:underline">&larr; Back to Home</Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">All Quotes</h1>
            <p className="text-xl max-w-3xl mx-auto text-foreground/80">
              Browse our extensive collection of philosophical wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(limit)].map((_, index) => (
              <div key={index} className="bg-cream/10 p-6 rounded-xl border border-cream/20 animate-pulse">
                <div className="h-4 bg-cream/20 rounded mb-4"></div>
                <div className="h-3 bg-cream/20 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-cream/20 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-accent hover:underline">&larr; Back to Home</Link>
          </div>
          
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-accent hover:underline">&larr; Back to Home</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">All Quotes</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Browse our extensive collection of philosophical wisdom
          </p>
          <p className="mt-4 text-foreground/70">
            Showing {offset + 1} - {Math.min(offset + limit, total)} of {total.toLocaleString()} quotes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              id={quote.id}
              text={quote.text}
              author={quote.author}
              authorId={quote.authorId}
              tags={quote.tags}
            />
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={handlePrevious}
            disabled={offset === 0}
            className={`px-6 py-3 rounded-full ${
              offset === 0 
                ? 'bg-foreground/10 text-foreground/50 cursor-not-allowed' 
                : 'bg-accent text-background hover:bg-accent/80'
            }`}
          >
            Previous
          </button>
          
          <span className="text-foreground/70">
            Page {Math.floor(offset / limit) + 1} of {Math.ceil(total / limit)}
          </span>
          
          <button
            onClick={handleNext}
            disabled={offset + limit >= total}
            className={`px-6 py-3 rounded-full ${
              offset + limit >= total
                ? 'bg-foreground/10 text-foreground/50 cursor-not-allowed' 
                : 'bg-accent text-background hover:bg-accent/80'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}