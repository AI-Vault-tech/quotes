'use client';

import { useState } from 'react';

interface ContextItem {
  id: string;
  title: string;
  type: 'historical' | 'philosophical' | 'related' | 'modern';
  description: string;
  date?: string;
  relevance: number;
}

export default function ContextExplorer() {
  const [activeTab, setActiveTab] = useState('all');
  
  const contextItems: ContextItem[] = [
    {
      id: 'hist-1',
      title: 'Roman Empire at its Height',
      type: 'historical',
      description: 'The political and social climate during Marcus Aurelius\'s reign as Roman Emperor.',
      date: '161-180 CE',
      relevance: 95
    },
    {
      id: 'hist-2',
      title: 'Antonine Plague',
      type: 'historical',
      description: 'A pandemic that devastated the Roman Empire during Marcus Aurelius\'s reign.',
      date: '165-180 CE',
      relevance: 88
    },
    {
      id: 'phil-1',
      title: 'Stoic Philosophy',
      type: 'philosophical',
      description: 'The school of Hellenistic philosophy that teaches virtue as the highest good.',
      relevance: 92
    },
    {
      id: 'phil-2',
      title: 'Dichotomy of Control',
      type: 'philosophical',
      description: 'The fundamental Stoic principle distinguishing between what we can and cannot control.',
      relevance: 98
    },
    {
      id: 'rel-1',
      title: 'Epictetus on Freedom',
      type: 'related',
      description: 'Similar teachings from another prominent Stoic philosopher on inner freedom.',
      relevance: 85
    },
    {
      id: 'mod-1',
      title: 'Cognitive Behavioral Therapy',
      type: 'modern',
      description: 'How modern psychology has incorporated Stoic principles for mental health.',
      relevance: 90
    }
  ];
  
  const filteredItems = activeTab === 'all' 
    ? contextItems 
    : contextItems.filter(item => item.type === activeTab);
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'historical': return 'bg-blue-100 text-blue-800';
      case 'philosophical': return 'bg-purple-100 text-purple-800';
      case 'related': return 'bg-green-100 text-green-800';
      case 'modern': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'historical': return 'Historical';
      case 'philosophical': return 'Philosophical';
      case 'related': return 'Related';
      case 'modern': return 'Modern';
      default: return type;
    }
  };
  
  return (
    <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
      <h2 className="heading-text text-2xl mb-6 text-accent">Context Explorer</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'historical', 'philosophical', 'related', 'modern'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === tab
                ? 'bg-accent text-foreground'
                : 'bg-cream/30 hover:bg-cream/40'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-background p-5 rounded-lg border border-cream/30 hover:border-accent transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold">{item.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(item.type)}`}>
                {getTypeLabel(item.type)}
              </span>
            </div>
            
            {item.date && (
              <p className="text-sm text-foreground/70 mb-2">{item.date}</p>
            )}
            
            <p className="text-foreground/80 mb-3">{item.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm text-foreground/70 mr-2">Relevance:</span>
                <div className="w-24 bg-cream/30 rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full" 
                    style={{ width: `${item.relevance}%` }}
                  ></div>
                </div>
                <span className="text-sm text-foreground/70 ml-2">{item.relevance}%</span>
              </div>
              
              <button className="text-accent text-sm hover:underline">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-cream/20">
        <h3 className="font-bold mb-3">Visual Context Network</h3>
        <div className="bg-cream/20 p-6 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-foreground/50">
            <div className="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p>Interactive visualization of related concepts</p>
            <p className="text-sm">(Premium Feature)</p>
          </div>
        </div>
      </div>
    </div>
  );
}