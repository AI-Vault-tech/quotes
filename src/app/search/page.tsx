'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Quote {
  id: string;
  text: string;
  author: string;
  authorId: string;
  source?: string;
  tags: string[];
  themes: string[];
}

interface Author {
  id: string;
  name: string;
  bioShort: string;
  quoteCount: number;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('quotes');
  
  useEffect(() => {
    const search = async () => {
      if (query.trim() === '') {
        setQuotes([]);
        setAuthors([]);
        return;
      }
      
      setLoading(true);
      
      try {
        // Search quotes
        const quotesResponse = await fetch(`/api/quotes?q=${encodeURIComponent(query)}&limit=10`);
        const quotesData = await quotesResponse.json();
        setQuotes(quotesData.quotes);
        
        // Search authors
        const authorsResponse = await fetch(`/api/authors?q=${encodeURIComponent(query)}&limit=10`);
        const authorsData = await authorsResponse.json();
        setAuthors(authorsData.authors);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    const debounceTimer = setTimeout(search, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="heading-text text-4xl md:text-5xl text-center mb-6 text-accent">Search Wisdom</h1>
          <p className="text-xl text-center text-foreground/80 mb-8">
            Find quotes, authors, and wisdom across 5,000 years of human thought
          </p>
          
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for wisdom, authors, themes, or ideas..."
              className="w-full px-6 py-4 rounded-full border border-cream/30 focus:outline-none focus:ring-2 focus:ring-accent bg-background text-lg"
            />
            <button className="absolute right-3 top-3 bg-accent text-background px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
              Search
            </button>
          </div>
        </div>
        
        {query && (
          <div>
            {/* Tabs */}
            <div className="flex border-b border-cream/20 mb-8 max-w-3xl mx-auto">
              <button
                className={`px-6 py-3 font-medium relative ${
                  activeTab === 'quotes' 
                    ? 'text-accent' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('quotes')}
              >
                Quotes ({quotes.length})
                {activeTab === 'quotes' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                )}
              </button>
              <button
                className={`px-6 py-3 font-medium relative ${
                  activeTab === 'authors' 
                    ? 'text-accent' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                onClick={() => setActiveTab('authors')}
              >
                Authors ({authors.length})
                {activeTab === 'authors' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                )}
              </button>
            </div>
            
            {/* Loading state */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                <p className="mt-4 text-foreground/70">Searching the depths of wisdom...</p>
              </div>
            )}
            
            {/* Results */}
            {!loading && (
              <div className="max-w-3xl mx-auto">
                {activeTab === 'quotes' && (
                  <div>
                    {quotes.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-foreground/70">No quotes found for "{query}". Try another search term.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {quotes.map((quote) => (
                          <div key={quote.id} className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                            <p className="quote-text text-xl mb-4">"{quote.text}"</p>
                            <div className="flex justify-between items-center">
                              <p className="text-foreground/70">
                                — <Link href={`/authors/${quote.authorId}`} className="text-accent hover:underline">{quote.author}</Link>
                                {quote.source && <span>, {quote.source}</span>}
                              </p>
                              <Link href={`/quotes/${quote.id}`} className="text-accent hover:underline text-sm">
                                View Details
                              </Link>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mt-4">
                              {quote.tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'authors' && (
                  <div>
                    {authors.length === 0 ? (
                      <div className="text-center py-12">
                        <p className="text-foreground/70">No authors found for "{query}". Try another search term.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {authors.map((author) => (
                          <div key={author.id} className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                            <h3 className="font-bold text-xl mb-2">
                              <Link href={`/authors/${author.id}`} className="hover:text-accent">
                                {author.name}
                              </Link>
                            </h3>
                            <p className="text-foreground/80 mb-4">{author.bioShort}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-foreground/70">{author.quoteCount} quotes</span>
                              <Link href={`/authors/${author.id}`} className="text-accent hover:underline text-sm">
                                View Profile
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        {!query && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center py-12">
              <div className="inline-block mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Search the Wisdom Library</h2>
              <p className="text-foreground/70">
                Enter a word, phrase, author name, or theme to discover timeless wisdom
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}