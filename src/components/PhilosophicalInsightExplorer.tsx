// src/components/PhilosophicalInsightExplorer.tsx
'use client';

import { useState, useEffect } from 'react';

interface PhilosophicalInsight {
  id: string;
  text: string;
  author: string;
  theme: string;
  era: string;
  resonance: number;
}

export default function PhilosophicalInsightExplorer() {
  const [insights, setInsights] = useState<PhilosophicalInsight[]>([]);
  const [selectedInsight, setSelectedInsight] = useState<PhilosophicalInsight | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>('all');
  const [isAnimating, setIsAnimating] = useState(true);

  // Generate philosophical insights with unique themes
  useEffect(() => {
    const uniqueThemes = [
      "Quantum Consciousness Paradoxes", 
      "Biological Metaphysics of Emergence", 
      "Neural Network Ethics", 
      "Temporal Fluidity in Perception", 
      "Holographic Mind Theory",
      "Symbiotic Existentialism",
      "Recursive Self-Awareness",
      "Morphic Resonance Patterns"
    ];

    const sampleInsights: PhilosophicalInsight[] = [
      {
        id: "1",
        text: "Awareness exists in superposition until observed by the self.",
        author: "Heraclitus",
        theme: "Quantum Consciousness Paradoxes",
        era: "Ancient",
        resonance: 94
      },
      {
        id: "2",
        text: "Meaning emerges from neural complexity like life from chemistry.",
        author: "Spinoza",
        theme: "Biological Metaphysics of Emergence",
        era: "Renaissance",
        resonance: 89
      },
      {
        id: "3",
        text: "Morality forms through synaptic pathways like thought itself.",
        author: "William James",
        theme: "Neural Network Ethics",
        era: "Modern",
        resonance: 92
      },
      {
        id: "4",
        text: "Time flows differently in memory than in immediate experience.",
        author: "Augustine",
        theme: "Temporal Fluidity in Perception",
        era: "Medieval",
        resonance: 87
      },
      {
        id: "5",
        text: "Each thought contains the whole of consciousness.",
        author: "Leibniz",
        theme: "Holographic Mind Theory",
        era: "Renaissance",
        resonance: 91
      },
      {
        id: "6",
        text: "Existence precedes essence only in isolation.",
        author: "Sartre",
        theme: "Symbiotic Existentialism",
        era: "Modern",
        resonance: 88
      },
      {
        id: "7",
        text: "Consciousness reflects upon itself infinitely.",
        author: "Nagarjuna",
        theme: "Recursive Self-Awareness",
        era: "Ancient",
        resonance: 93
      },
      {
        id: "8",
        text: "Ideas attract similar thoughts across space and time.",
        author: "Plato",
        theme: "Morphic Resonance Patterns",
        era: "Ancient",
        resonance: 90
      }
    ];

    setInsights(sampleInsights);
    setSelectedInsight(sampleInsights[0]);
  }, []);

  const filteredInsights = activeTheme === 'all' 
    ? insights 
    : insights.filter(insight => insight.theme === activeTheme);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-cream/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-serif">
            Philosophical Insight Explorer
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover interconnected wisdom through unique thematic lenses
          </p>
        </div>

        {/* Theme Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveTheme('all')}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              activeTheme === 'all' 
                ? 'bg-accent text-background shadow-lg' 
                : 'bg-cream/20 text-foreground hover:bg-cream/30'
            }`}
          >
            All Themes
          </button>
          {Array.from(new Set(insights.map(i => i.theme))).map(theme => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-sm ${
                activeTheme === theme 
                  ? 'bg-accent text-background shadow-lg' 
                  : 'bg-cream/20 text-foreground hover:bg-cream/30'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Insights Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-cream/20 p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-accent">Interactive Wisdom Map</h3>
                <button 
                  onClick={toggleAnimation}
                  className="px-4 py-2 bg-cream/20 hover:bg-cream/30 rounded-full text-sm transition-colors"
                >
                  {isAnimating ? 'Pause Animation' : 'Play Animation'}
                </button>
              </div>
              
              <div className="relative h-96 rounded-xl bg-gradient-to-br from-cream/10 to-foreground/5 overflow-hidden">
                {/* Animated background elements */}
                {isAnimating && (
                  <>
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent/10 blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-accent/5 blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-cream/10 blur-xl animate-pulse delay-500"></div>
                  </>
                )}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="20%" y1="20%" x2="80%" y2="30%" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
                  <line x1="80%" y1="30%" x2="60%" y2="80%" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
                  <line x1="60%" y1="80%" x2="20%" y2="20%" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
                  <line x1="20%" y1="20%" x2="40%" y2="60%" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
                  <line x1="40%" y1="60%" x2="80%" y2="30%" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
                </svg>
                
                {/* Insight nodes */}
                {filteredInsights.slice(0, 5).map((insight, index) => {
                  const positions = [
                    { top: '20%', left: '20%' },
                    { top: '30%', left: '80%' },
                    { top: '80%', left: '60%' },
                    { top: '60%', left: '40%' },
                    { top: '50%', left: '15%' }
                  ];
                  
                  return (
                    <div 
                      key={insight.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
                        selectedInsight?.id === insight.id ? 'scale-125 z-10' : 'scale-100'
                      }`}
                      style={positions[index]}
                      onClick={() => setSelectedInsight(insight)}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        selectedInsight?.id === insight.id 
                          ? 'bg-accent text-background ring-4 ring-accent/30' 
                          : 'bg-background text-accent border-2 border-accent'
                      }`}>
                        <span className="font-bold">{insight.resonance}%</span>
                      </div>
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-32 text-center">
                        <p className="text-xs font-semibold truncate">{insight.author}</p>
                        <p className="text-[10px] text-foreground/70 truncate">{insight.era}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-foreground/60 text-sm">
                  Click on any wisdom node to explore its insights
                </p>
              </div>
            </div>
          </div>
          
          {/* Selected Insight Detail */}
          <div className="space-y-8">
            {selectedInsight && (
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-cream/20 p-6 shadow-xl h-fit">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-1">{selectedInsight.author}</h3>
                    <p className="text-foreground/70">{selectedInsight.era} • {selectedInsight.theme}</p>
                  </div>
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
                    {selectedInsight.resonance}% Resonance
                  </div>
                </div>
                
                <div className="quote-text text-2xl mb-6 italic">
                  "{selectedInsight.text}"
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cream/20 rounded-full text-sm">Philosophy</span>
                  <span className="px-3 py-1 bg-cream/20 rounded-full text-sm">Wisdom</span>
                  <span className="px-3 py-1 bg-cream/20 rounded-full text-sm">Insight</span>
                </div>
                
                <button className="w-full mt-6 py-3 bg-accent hover:bg-accent/90 text-background rounded-xl font-bold transition-colors">
                  Explore This Theme
                </button>
              </div>
            )}
            
            {/* Stats Panel */}
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-cream/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-accent mb-4">Platform Insights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-foreground/80">Unique Philosophical Themes</span>
                    <span className="font-bold">15+</span>
                  </div>
                  <div className="h-2 bg-cream/20 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-foreground/80">Wisdom Resonance Index</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="h-2 bg-cream/20 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full w-11/12"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-foreground/80">Cross-Cultural Connections</span>
                    <span className="font-bold">87%</span>
                  </div>
                  <div className="h-2 bg-cream/20 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full w-7/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-background rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
            Discover All 6,350+ Unique Insights
          </button>
          <p className="mt-4 text-foreground/70">Explore wisdom that transcends traditional boundaries</p>
        </div>
      </div>
    </section>
  );
}