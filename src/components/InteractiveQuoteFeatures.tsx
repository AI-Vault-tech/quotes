'use client';

import { useState } from 'react';

export default function InteractiveQuoteFeatures() {
  const [complexity, setComplexity] = useState('standard');
  const [showTranslation, setShowTranslation] = useState(false);
  const [saved, setSaved] = useState(false);
  
  return (
    <>
      {/* Interactive Elements */}
      <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
        <h3 className="heading-text text-xl mb-4 text-accent">Interactive Features</h3>
        
        <div className="space-y-4">
          <button 
            className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
              saved 
                ? 'bg-accent text-foreground' 
                : 'bg-background border border-cream/30 hover:border-accent'
            }`}
            onClick={() => setSaved(!saved)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {saved ? 'Saved to Sanctuary' : 'Save to My Sanctuary'}
          </button>
          
          <button className="w-full py-3 bg-background border border-cream/30 rounded-lg hover:border-accent flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share
          </button>
          
          <button className="w-full py-3 bg-background border border-cream/30 rounded-lg hover:border-accent flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
            Listen
          </button>
          
          <button className="w-full py-3 bg-background border border-cream/30 rounded-lg hover:border-accent flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l-1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            Explore Context
          </button>
          
          <button className="w-full py-3 bg-background border border-cream/30 rounded-lg hover:border-accent flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5a1 1 0 10-2 0v3.586l-1.293-1.293z" />
              <path d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
              <path fillRule="evenodd" d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm0 2h8v8H5V6z" clipRule="evenodd" />
            </svg>
            Related Quotes
          </button>
        </div>
      </div>
      
      {/* Advanced Features */}
      <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
        <h3 className="heading-text text-xl mb-4 text-accent">Advanced Features</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold mb-3">Text Complexity</h4>
            <div className="flex flex-wrap gap-2">
              {['Simple', 'Standard', 'Scholarly'].map((level) => (
                <button
                  key={level}
                  className={`px-3 py-1 rounded-full text-sm ${
                    complexity === level.toLowerCase()
                      ? 'bg-accent text-foreground'
                      : 'bg-cream/30 hover:bg-cream/40'
                  }`}
                  onClick={() => setComplexity(level.toLowerCase())}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Language</h4>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-accent text-foreground rounded-full text-sm">
                English
              </button>
              <button className="px-3 py-1 bg-cream/30 rounded-full text-sm hover:bg-cream/40">
                Greek
              </button>
              <button className="px-3 py-1 bg-cream/30 rounded-full text-sm hover:bg-cream/40">
                Latin
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Academic Commentary</h4>
            <p className="text-sm text-foreground/80 mb-3">
              Philosophers discuss this passage's significance in Stoic ethics.
            </p>
            <button className="text-accent text-sm hover:underline">
              View Commentary →
            </button>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Practical Applications</h4>
            <p className="text-sm text-foreground/80 mb-3">
              How to apply this wisdom in daily life situations.
            </p>
            <button className="text-accent text-sm hover:underline">
              See Applications →
            </button>
          </div>
        </div>
      </div>
      
      {/* Translation Toggle */}
      <div className="bg-background p-6 rounded-lg border border-cream/30">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Translation Notes</h3>
          <button 
            className="text-accent hover:underline"
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? 'Hide' : 'Show'} Variations
          </button>
        </div>
        
        {showTranslation && (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-foreground/70 mb-1">George Long (1862)</p>
              <p className="text-foreground/80">"You have power over your mind - not outside events. Realize this, and you will find strength."</p>
            </div>
            <div>
              <p className="text-sm text-foreground/70 mb-1">Gregory Hays (2002)</p>
              <p className="text-foreground/80">"Our actions may be impeded... but there can be no impeding our intentions or our dispositions."</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}