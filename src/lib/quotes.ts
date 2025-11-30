import { quotes, authors, Quote, Author } from '@/data/quotes';

export function getAllQuotes(): Quote[] {
  return quotes;
}

export function getQuoteById(id: string): Quote | undefined {
  return quotes.find(quote => quote.id === id);
}

export function getQuotesByAuthor(authorId: string): Quote[] {
  return quotes.filter(quote => quote.authorId === authorId);
}

export function getQuotesByTag(tag: string): Quote[] {
  return quotes.filter(quote => quote.tags.includes(tag));
}

export function getQuotesByTheme(theme: string): Quote[] {
  return quotes.filter(quote => quote.themes.includes(theme));
}

export function getQuotesBySchool(school: string): Quote[] {
  return quotes.filter(quote => quote.schools.includes(school));
}

export function getAllAuthors(): Author[] {
  return authors;
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}

export function getFeaturedAuthors(): Author[] {
  return authors.filter(author => author.featured);
}

export function searchQuotes(query: string): Quote[] {
  const lowerQuery = query.toLowerCase();
  return quotes.filter(quote => 
    quote.text.toLowerCase().includes(lowerQuery) ||
    quote.author.toLowerCase().includes(lowerQuery) ||
    quote.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    quote.themes.some(theme => theme.toLowerCase().includes(lowerQuery))
  );
}

export function searchAuthors(query: string): Author[] {
  const lowerQuery = query.toLowerCase();
  return authors.filter(author => 
    author.name.toLowerCase().includes(lowerQuery) ||
    author.bioShort.toLowerCase().includes(lowerQuery) ||
    author.schools.some(school => school.toLowerCase().includes(lowerQuery))
  );
}

export function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export function getQuotesByEra(era: string): Quote[] {
  return quotes.filter(quote => {
    const author = authors.find(a => a.id === quote.authorId);
    return author?.era === era;
  });
}