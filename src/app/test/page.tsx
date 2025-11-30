'use client';

import { useState, useEffect } from 'react';

export default function TestPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/quotes?limit=1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Test Page</h1>
        <p>Loading...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Test Page</h1>
        <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
          <h2 className="text-2xl font-bold mb-4">API Test Results</h2>
          <p>Total Quotes in Database: <span className="font-bold text-accent">{data?.total?.toLocaleString()}</span></p>
          <p>Sample Quotes Retrieved: <span className="font-bold">{data?.quotes?.length}</span></p>
          {data?.quotes?.[0] && (
            <div className="mt-4 p-4 bg-background rounded-lg border border-cream/30">
              <p className="quote-text text-lg">"{data.quotes[0].text}"</p>
              <p className="text-foreground/70 mt-2">— {data.quotes[0].author}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}