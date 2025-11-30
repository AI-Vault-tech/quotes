import { NextResponse } from 'next/server';
import { authors, quotes } from '@/data/quotes';
// @ts-ignore
import largeQuotes from '@/data/largeQuotes.json';

// Combine both datasets
// @ts-ignore
const allQuotes = [...quotes, ...largeQuotes];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const featured = searchParams.get('featured');
  const school = searchParams.get('school');
  const era = searchParams.get('era');
  const limit = searchParams.get('limit');
  
  let filteredAuthors = [...authors];
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredAuthors = filteredAuthors.filter(author => 
      author.name.toLowerCase().includes(lowerQuery) ||
      author.bioShort.toLowerCase().includes(lowerQuery) ||
      author.schools.some(s => s.toLowerCase().includes(lowerQuery))
    );
  }
  
  if (featured === 'true') {
    filteredAuthors = filteredAuthors.filter(author => author.featured);
  }
  
  if (school) {
    filteredAuthors = filteredAuthors.filter(author => author.schools.includes(school));
  }
  
  if (era) {
    filteredAuthors = filteredAuthors.filter(author => author.era === era);
  }
  
  if (limit) {
    const limitNum = parseInt(limit, 10);
    if (!isNaN(limitNum) && limitNum > 0) {
      filteredAuthors = filteredAuthors.slice(0, limitNum);
    }
  }
  
  // Add quote count to each author based on the combined dataset
  const authorsWithCounts = filteredAuthors.map(author => {
    const quoteCount = allQuotes.filter((q: any) => q.authorId === author.id).length;
    return {
      ...author,
      quoteCount
    };
  });
  
  return NextResponse.json({
    authors: authorsWithCounts,
    total: authorsWithCounts.length
  });
}