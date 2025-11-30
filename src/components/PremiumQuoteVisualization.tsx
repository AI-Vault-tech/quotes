// src/components/PremiumQuoteVisualization.tsx
'use client';

import { useState, useEffect } from 'react';

interface QuoteDataPoint {
  id: string;
  text: string;
  author: string;
  era: string;
  theme: string;
  impact: number; // 1-10 scale
  depth: number; // 1-10 scale
  relevance: number; // 1-10 scale
}

export default function PremiumQuoteVisualization() {
  const [activeView, setActiveView] = useState<'timeline' | 'themes' | 'impact'>('timeline');
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  
  // Sample data for visualization
  const quoteData: QuoteDataPoint[] = [
    {
      id: "q1",
      text: "The unexamined life is not worth living.",
      author: "Socrates",
      era: "Ancient Greece",
      theme: "Self-reflection",
      impact: 9,
      depth: 8,
      relevance: 9
    },
    {
      id: "q2",
      text: "Man is condemned to be free.",
      author: "Jean-Paul Sartre",
      era: "Modern Era",
      theme: "Existentialism",
      impact: 8,
      depth: 9,
      relevance: 7
    },
    {
      id: "q3",
      text: "Happiness depends upon ourselves.",
      author: "Aristotle",
      era: "Ancient Greece",
      theme: "Ethics",
      impact: 7,
      depth: 7,
      relevance: 8
    },
    {
      id: "q4",
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      era: "Modern Era",
      theme: "Optimism",
      impact: 8,
      depth: 6,
      relevance: 9
    },
    {
      id: "q5",
      text: "Peace comes from within.",
      author: "Buddha",
      era: "Ancient Asia",
      theme: "Inner Peace",
      impact: 9,
      depth: 8,
      relevance: 9
    },
    {
      id: "q6",
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      author: "Albert Camus",
      era: "Modern Era",
      theme: "Freedom",
      impact: 7,
      depth: 9,
      relevance: 8
    },
    {
      id: "q7",
      text: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
      author: "Aristotle",
      era: "Ancient Greece",
      theme: "Critical Thinking",
      impact: 8,
      depth: 7,
      relevance: 8
    },
    {
      id: "q8",
      text: "That which does not kill us makes us stronger.",
      author: "Friedrich Nietzsche",
      era: "Modern Era",
      theme: "Resilience",
      impact: 9,
      depth: 7,
      relevance: 9
    }
  ];

  // Get unique eras and themes
  const eras = Array.from(new Set(quoteData.map(q => q.era)));
  const themes = Array.from(new Set(quoteData.map(q => q.theme)));

  // Filter data based on selection
  const filteredData = selectedEra 
    ? quoteData.filter(q => q.era === selectedEra)
    : quoteData;

  return (
    <div className="py-16 bg-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-accent">
            The Wisdom Visualization
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Explore the multidimensional landscape of human wisdom through interactive data visualization
          </p>
        </div>
        
        {/* Visualization Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {['timeline', 'themes', 'impact'].map((view) => (
              <button
                key={view}
                className={`px-4 py-2 rounded-full capitalize ${
                  activeView === view
                    ? 'bg-accent text-background'
                    : 'bg-background border border-cream/30 hover:bg-cream/20'
                }`}
                onClick={() => setActiveView(view as any)}
              >
                {view}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full ${
                selectedEra === null
                  ? 'bg-accent text-background'
                  : 'bg-background border border-cream/30 hover:bg-cream/20'
              }`}
              onClick={() => setSelectedEra(null)}
            >
              All Eras
            </button>
            {eras.map((era) => (
              <button
                key={era}
                className={`px-4 py-2 rounded-full ${
                  selectedEra === era
                    ? 'bg-accent text-background'
                    : 'bg-background border border-cream/30 hover:bg-cream/20'
                }`}
                onClick={() => setSelectedEra(era)}
              >
                {era}
              </button>
            ))}
          </div>
        </div>
        
        {/* Visualization Area */}
        <div className="bg-background rounded-2xl border border-cream/30 p-8 mb-12">
          <div className="h-96 relative">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-4 opacity-10">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="border border-foreground/20 rounded"></div>
              ))}
            </div>
            
            {/* Data points */}
            {filteredData.map((quote, index) => {
              // Position calculation based on view
              let xPos, yPos;
              switch (activeView) {
                case 'timeline':
                  xPos = (eras.indexOf(quote.era) / (eras.length - 1)) * 100;
                  yPos = 100 - (quote.impact * 10);
                  break;
                case 'themes':
                  xPos = (themes.indexOf(quote.theme) / (themes.length - 1)) * 100;
                  yPos = 100 - (quote.depth * 10);
                  break;
                case 'impact':
                  xPos = quote.impact * 10;
                  yPos = 100 - (quote.relevance * 10);
                  break;
                default:
                  xPos = 50;
                  yPos = 50;
              }
              
              return (
                <div
                  key={quote.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${xPos}%`,
                    top: `${yPos}%`
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 transition-transform">
                    {quote.author.charAt(0)}
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-background border border-cream/30 rounded-xl p-4 shadow-lg z-10">
                    <p className="quote-text text-lg mb-2">"{quote.text}"</p>
                    <p className="text-foreground/70 text-sm mb-1">— {quote.author}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-cream/20 rounded text-xs">{quote.era}</span>
                      <span className="px-2 py-1 bg-cream/20 rounded text-xs">{quote.theme}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 text-foreground/70 text-sm">
              <span>Low</span>
              <span className="heading-text text-accent">Impact</span>
              <span>High</span>
            </div>
            <div className="absolute top-0 bottom-0 left-0 flex flex-col justify-between py-4 pl-2 text-foreground/70 text-sm">
              <span>High</span>
              <span className="heading-text text-accent transform -rotate-90 origin-center">Depth</span>
              <span>Low</span>
            </div>
          </div>
        </div>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{filteredData.length}</div>
            <div className="text-foreground/80">Quotes Visualized</div>
          </div>
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {Math.round(filteredData.reduce((acc, q) => acc + q.impact, 0) / filteredData.length)}
            </div>
            <div className="text-foreground/80">Avg Impact</div>
          </div>
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {Math.round(filteredData.reduce((acc, q) => acc + q.depth, 0) / filteredData.length)}
            </div>
            <div className="text-foreground/80">Avg Depth</div>
          </div>
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">
              {Math.round(filteredData.reduce((acc, q) => acc + q.relevance, 0) / filteredData.length)}
            </div>
            <div className="text-foreground/80">Avg Relevance</div>
          </div>
        </div>
      </div>
    </div>
  );
}