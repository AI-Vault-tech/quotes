// src/components/ThematicWisdomJourney.tsx
'use client';

import { useState } from 'react';

interface WisdomPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  quotes: number;
  philosophers: string[];
}

export default function ThematicWisdomJourney() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  
  const wisdomPaths: WisdomPath[] = [
    {
      id: "resilience",
      title: "The Resilience Path",
      description: "Discover how great minds overcame adversity and found strength in struggle",
      icon: "💪",
      color: "from-red-500 to-orange-500",
      quotes: 127,
      philosophers: ["Nietzsche", "Socrates", "Epictetus", "Marcus Aurelius"]
    },
    {
      id: "purpose",
      title: "The Purpose Quest",
      description: "Explore the eternal search for meaning and direction in life",
      icon: "🧭",
      color: "from-blue-500 to-indigo-500",
      quotes: 98,
      philosophers: ["Camus", "Sartre", "Frankl", "Aristotle"]
    },
    {
      id: "wisdom",
      title: "The Wisdom Tradition",
      description: "Walk through centuries of accumulated human insight and understanding",
      icon: "📚",
      color: "from-purple-500 to-pink-500",
      quotes: 156,
      philosophers: ["Confucius", "Buddha", "Solomon", "Socrates"]
    },
    {
      id: "freedom",
      title: "The Freedom Frontier",
      description: "Examine the concept of liberty from ancient Greece to modern thought",
      icon: "🕊️",
      color: "from-green-500 to-teal-500",
      quotes: 89,
      philosophers: ["Mill", "Sartre", "Kant", "Locke"]
    },
    {
      id: "love",
      title: "The Love Expedition",
      description: "Journey through humanity's most profound emotion and its expressions",
      icon: "❤️",
      color: "from-rose-500 to-red-500",
      quotes: 112,
      philosophers: ["Plato", "Aristotle", "Hume", "Kierkegaard"]
    },
    {
      id: "truth",
      title: "The Truth Seeker",
      description: "Navigate the complex landscape of knowledge, reality, and certainty",
      icon: "🔍",
      color: "from-amber-500 to-yellow-500",
      quotes: 134,
      philosophers: ["Aristotle", "Kant", "Hume", "Descartes"]
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-background to-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-accent">
            Embark on a Thematic Wisdom Journey
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Follow curated paths through the landscape of human thought and discover interconnected wisdom
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wisdomPaths.map((path) => (
            <div 
              key={path.id}
              className={`bg-background rounded-2xl border border-cream/30 p-6 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedPath === path.id 
                  ? 'ring-2 ring-accent shadow-xl' 
                  : 'hover:border-accent/50'
              }`}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-2xl`}>
                  {path.icon}
                </div>
                <div>
                  <h3 className="heading-text text-xl text-accent mb-2">{path.title}</h3>
                  <p className="text-foreground/80 mb-4">{path.description}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/70">
                    <span>{path.quotes} quotes</span>
                    <span>•</span>
                    <span>{path.philosophers.length} philosophers</span>
                  </div>
                </div>
              </div>
              
              {selectedPath === path.id && (
                <div className="mt-6 pt-6 border-t border-cream/20 animate-fadeIn">
                  <h4 className="font-bold mb-3 text-foreground/90">Featured Philosophers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.philosophers.map((philosopher, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-cream/20 rounded-full text-sm"
                      >
                        {philosopher}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-accent text-background py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                    Begin This Journey
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-accent text-accent px-6 py-3 rounded-full font-medium hover:bg-accent hover:text-background transition-all">
            View All Wisdom Journeys
          </button>
        </div>
      </div>
    </div>
  );
}