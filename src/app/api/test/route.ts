import { NextResponse } from 'next/server';

export async function GET() {
  // Test the quotes API
  const response = await fetch('http://localhost:3000/api/quotes?limit=5');
  const data = await response.json();
  
  return NextResponse.json({
    message: 'API Test',
    totalQuotes: data.total,
    sampleQuotes: data.quotes.length,
    firstQuote: data.quotes[0]?.text
  });
}