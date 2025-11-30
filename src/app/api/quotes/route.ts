import { NextResponse } from 'next/server';
import { quotes, authors } from '@/data/quotes';
// @ts-ignore
import largeQuotesData from '@/data/largeQuotes.json';

// Define the structure for large quotes
interface LargeQuote {
  id: string;
  text: string;
  author: string;
  authorId?: string;
  tags?: string[];
  themes?: string[];
  schools?: string[];
  createdAt?: string;
  updatedAt?: string;
  addedAt?: string;
  [key: string]: any; // Allow additional properties
}

// Normalize large quotes to match the Quote interface
const largeQuotes = (largeQuotesData as LargeQuote[]).map((quote) => ({
  ...quote,
  authorId: quote.authorId || quote.author?.toLowerCase().replace(/[^a-z0-9]/g, '-'),
  tags: quote.tags || [],
  themes: quote.themes || [],
  schools: quote.schools || [],
  createdAt: quote.createdAt || quote.addedAt || new Date().toISOString(),
  updatedAt: quote.updatedAt || quote.addedAt || new Date().toISOString()
}));

const allQuotes = [...quotes, ...largeQuotes];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const author = searchParams.get('author');
  const tag = searchParams.get('tag');
  const theme = searchParams.get('theme');
  const school = searchParams.get('school');
  const language = searchParams.get('language');
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset') || '0';
  
  let filteredQuotes = [...allQuotes];
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredQuotes = filteredQuotes.filter(quote => 
      quote.text.toLowerCase().includes(lowerQuery) ||
      quote.author.toLowerCase().includes(lowerQuery) ||
      // @ts-ignore
      quote.tags.some((t: string) => t.toLowerCase().includes(lowerQuery)) ||
      // @ts-ignore
      quote.themes.some((t: string) => t.toLowerCase().includes(lowerQuery))
    );
  }
  
  if (author) {
    filteredQuotes = filteredQuotes.filter(quote => quote.authorId === author);
  }
  
  if (tag) {
    // @ts-ignore
    filteredQuotes = filteredQuotes.filter(quote => quote.tags.includes(tag));
  }
  
  if (theme) {
    // @ts-ignore
    filteredQuotes = filteredQuotes.filter(quote => quote.themes.includes(theme));
  }
  
  if (school) {
    // @ts-ignore
    filteredQuotes = filteredQuotes.filter(quote => quote.schools.includes(school));
  }
  
  if (language) {
    // @ts-ignore
    filteredQuotes = filteredQuotes.filter(quote => quote.language === language);
  }
  
  const totalQuotes = filteredQuotes.length;
  
  // Apply pagination
  const limitNum = limit ? parseInt(limit, 10) : 50;
  const offsetNum = parseInt(offset, 10);
  
  // Set a reasonable maximum limit to prevent performance issues
  const maxLimit = 1000; // Increased from 300 to 1000
  const effectiveLimit = Math.min(limitNum, maxLimit);
  
  if (!isNaN(effectiveLimit) && effectiveLimit > 0) {
    filteredQuotes = filteredQuotes.slice(offsetNum, offsetNum + effectiveLimit);
  }
  
  // Add author details to each quote
  const quotesWithAuthors = filteredQuotes.map(quote => {
    const authorDetails = authors.find(a => a.id === quote.authorId);
    return {
      ...quote,
      authorDetails
    };
  });
  
  return NextResponse.json({
    quotes: quotesWithAuthors,
    total: totalQuotes,
    limit: effectiveLimit,
    offset: offsetNum
  });
}