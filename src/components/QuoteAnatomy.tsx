'use client';

import { useState } from 'react';

interface AnalysisElement {
  id: string;
  title: string;
  type: 'rhetorical' | 'philosophical' | 'cultural';
  description: string;
  examples: string[];
}

export default function QuoteAnatomy() {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  
  const analysisElements: AnalysisElement[] = [
    {
      id: 'dichotomy',
      title: 'Dichotomy of Control',
      type: 'philosophical',
      description: 'The fundamental Stoic principle that distinguishes between what we can control (our responses) and what we cannot (external events).',
      examples: [
        '"You have power over your mind—not outside events."',
        '"Some things are up to us, others are not." - Epictetus'
      ]
    },
    {
      id: 'chiasmus',
      title: 'Chiasmus',
      type: 'rhetorical',
      description: 'A rhetorical device where two or more clauses are balanced against each other by the reversal of their structures.',
      examples: [
        '"You have power over your mind—not outside events." (mind/events, reversed)',
        '"Ask not what your country can do for you—ask what you can do for your country." - JFK'
      ]
    },
    {
      id: 'antithesis',
      title: 'Antithesis',
      type: 'rhetorical',
      description: 'The juxtaposition of contrasting ideas in balanced phrases, highlighting the opposition between internal and external control.',
      examples: [
        '"Not outside events, but your responses to them."',
        '"To be or not to be." - Shakespeare'
      ]
    },
    {
      id: 'imperative',
      title: 'Imperative Mood',
      type: 'rhetorical',
      description: 'The quote uses a commanding tone to direct the reader toward self-empowerment and action.',
      examples: [
        '"Realize this, and you will find strength."',
        '"Be the change you wish to see." - Gandhi'
      ]
    },
    {
      id: 'stoic-virtue',
      title: 'Stoic Virtue Ethics',
      type: 'philosophical',
      description: 'The concept that virtue (excellence of character) is the only true good and the path to eudaimonia (flourishing).',
      examples: [
        'Strength comes from inner virtue, not external circumstances.',
        '"The virtue of justice consists in moderation, as regulated by wisdom." - Aristotle'
      ]
    },
    {
      id: 'roman-context',
      title: 'Roman Practicality',
      type: 'cultural',
      description: 'Reflects the Roman emphasis on practical wisdom and duty over abstract theorizing, fitting for an emperor-sage.',
      examples: [
        'Written during military campaigns, emphasizing actionable philosophy.',
        '"Duty, honor, country." - MacArthur'
      ]
    }
  ];
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'rhetorical': return 'bg-blue-100 text-blue-800';
      case 'philosophical': return 'bg-purple-100 text-purple-800';
      case 'cultural': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'rhetorical': return 'Rhetorical Device';
      case 'philosophical': return 'Philosophical Concept';
      case 'cultural': return 'Cultural Context';
      default: return type;
    }
  };
  
  const activeElementData = activeElement 
    ? analysisElements.find(el => el.id === activeElement) 
    : null;
  
  return (
    <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
      <h2 className="heading-text text-2xl mb-6 text-accent">Quote Anatomy</h2>
      
      <div className="bg-background p-6 rounded-lg border border-cream/30 mb-6">
        <p className="quote-text text-xl mb-4 text-center">
          "You have power over your mind—not outside events. Realize this, and you will find strength."
        </p>
        <p className="text-foreground/70 text-center">— Marcus Aurelius, Meditations</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-4">Analysis Elements</h3>
          <div className="space-y-3">
            {analysisElements.map((element) => (
              <div 
                key={element.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  activeElement === element.id
                    ? 'border-accent bg-accent/5'
                    : 'border-cream/30 bg-background hover:border-foreground/20'
                }`}
                onClick={() => setActiveElement(
                  activeElement === element.id ? null : element.id
                )}
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">{element.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(element.type)}`}>
                    {getTypeLabel(element.type)}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 mt-2 line-clamp-2">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">
            {activeElementData ? activeElementData.title : 'Select an Element'}
          </h3>
          
          {activeElementData ? (
            <div className="bg-background p-5 rounded-lg border border-cream/30">
              <p className="text-foreground/80 mb-4">{activeElementData.description}</p>
              
              <h4 className="font-bold text-sm mb-2">Examples:</h4>
              <ul className="space-y-2">
                {activeElementData.examples.map((example, index) => (
                  <li key={index} className="text-sm text-foreground/80 pl-3 border-l-2 border-accent/30">
                    {example}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 pt-4 border-t border-cream/20">
                <button className="text-accent text-sm hover:underline">
                  Explore Related Concepts →
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-cream/20 p-8 rounded-lg h-full flex items-center justify-center">
              <p className="text-foreground/50 text-center">
                Select an analysis element to see detailed breakdown
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-cream/20">
        <h3 className="font-bold mb-3">Translation Variations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-background p-4 rounded-lg border border-cream/30">
            <h4 className="font-bold text-sm mb-2">George Long (1862)</h4>
            <p className="text-foreground/80 text-sm">
              "You have power over your mind - not outside events. Realize this, and you will find strength."
            </p>
          </div>
          <div className="bg-background p-4 rounded-lg border border-cream/30">
            <h4 className="font-bold text-sm mb-2">Gregory Hays (2002)</h4>
            <p className="text-foreground/80 text-sm">
              "Our actions may be impeded... but there can be no impeding our intentions or our dispositions."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}