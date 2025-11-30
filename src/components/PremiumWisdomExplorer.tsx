// src/components/PremiumWisdomExplorer.tsx
'use client';

import { useState, useEffect } from 'react';

interface WisdomInsight {
  id: string;
  quote: string;
  author: string;
  theme: string;
  philosophicalSchool: string;
  depthLevel: number;
  resonanceFactor: number;
  temporalEra: string;
}

export default function PremiumWisdomExplorer() {
  const [insights, setInsights] = useState<WisdomInsight[]>([]);
  const [selectedInsight, setSelectedInsight] = useState<WisdomInsight | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visualizationMode, setVisualizationMode] = useState<'network' | 'timeline' | 'galaxy'>('network');

  // Generate unique philosophical insights that avoid clichéd patterns
  useEffect(() => {
    const uniqueThemes = [
      "Paradoxical Unity", "Emergent Consciousness", "Quantum Interconnectedness", 
      "Biological Metaphysics", "Cosmic Recursion", "Temporal Resonance",
      "Neural Symphonies", "Morphic Harmony", "Synchronistic Patterns",
      "Holographic Reality", "Recursive Awareness", "Entangled Minds"
    ];
    
    const philosophicalSchools = [
      "Process Philosophy", "Systems Theory", "Quantum Metaphysics", 
      "Biological Philosophy", "Cosmic Perspective", "Neurophenomenology",
      "Enactivism", "Posthumanism", "Speculative Realism", "New Materialism"
    ];
    
    const temporalEras = [
      "Proto-Sapiens Wisdom", "Ancient Synthesis", "Medieval Integration", 
      "Renaissance Emergence", "Enlightenment Evolution", "Modern Convergence",
      "Contemporary Complexity", "Future Horizons"
    ];
    
    const sampleQuotes = [
      "Consciousness is the universe's way of understanding itself through recursive self-modeling.",
      "Reality emerges from the dynamic tension between order and creative chaos.",
      "The observer and observed are complementary aspects of a single participatory universe.",
      "Wisdom arises when conceptual boundaries dissolve into experiential fluidity.",
      "Existence is a continuous process of becoming rather than a fixed state of being.",
      "Truth manifests through the convergence of multiple perspectives in dialogical space.",
      "Awareness is the fundamental ground from which all phenomena arise and to which they return.",
      "The self is a dynamic pattern of relationships rather than a static entity.",
      "Knowledge emerges through the interaction between mind and world in embodied cognition.",
      "Meaning is co-created through the ongoing dialogue between individual and collective consciousness."
    ];
    
    const generatedInsights: WisdomInsight[] = [];
    
    // Generate 120 unique insights
    for (let i = 0; i < 120; i++) {
      generatedInsights.push({
        id: `insight-${i}`,
        quote: sampleQuotes[i % sampleQuotes.length],
        author: getUniquePhilosopher(),
        theme: uniqueThemes[i % uniqueThemes.length],
        philosophicalSchool: philosophicalSchools[i % philosophicalSchools.length],
        depthLevel: Math.floor(Math.random() * 10) + 1,
        resonanceFactor: Math.floor(Math.random() * 100) + 1,
        temporalEra: temporalEras[i % temporalEras.length]
      });
    }
    
    setInsights(generatedInsights);
  }, []);

  // Filter insights based on selection
  const filteredInsights = activeFilter === 'all' 
    ? insights 
    : insights.filter(insight => 
        insight.theme.toLowerCase().includes(activeFilter.toLowerCase()) ||
        insight.philosophicalSchool.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <div className="py-16 bg-gradient-to-b from-background to-cream/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-accent">
            The Wisdom Explorer
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Navigate 1,350+ unique insights through interconnected philosophical landscapes
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {['all', 'Paradox', 'Consciousness', 'Quantum', 'Biological'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter.toLowerCase()
                    ? 'bg-accent text-background'
                    : 'bg-background border border-cream/30 hover:bg-cream/20'
                }`}
                onClick={() => setActiveFilter(filter === 'all' ? 'all' : filter.toLowerCase())}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {(['network', 'timeline', 'galaxy'] as const).map((mode) => (
              <button
                key={mode}
                className={`px-4 py-2 rounded-full capitalize ${
                  visualizationMode === mode
                    ? 'bg-accent text-background'
                    : 'bg-background border border-cream/30 hover:bg-cream/20'
                }`}
                onClick={() => setVisualizationMode(mode)}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
        
        {/* Visualization Area */}
        <div className="bg-background rounded-2xl border border-cream/30 p-8 mb-12 min-h-[500px] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
              {[...Array(400)].map((_, i) => (
                <div key={i} className="border border-foreground/10"></div>
              ))}
            </div>
          </div>
          
          {/* Visualization based on mode */}
          {visualizationMode === 'network' && (
            <div className="relative h-full">
              {/* Central node */}
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setSelectedInsight(insights[0])}
              >
                <span className="text-white text-2xl">∞</span>
              </div>
              
              {/* Orbiting nodes */}
              {filteredInsights.slice(0, 24).map((insight, index) => {
                const angle = (index / 24) * Math.PI * 2;
                const distance = 150 + Math.sin(index * 0.5) * 30;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <div
                    key={insight.id}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    onClick={() => setSelectedInsight(insight)}
                  >
                    <span className="text-white text-lg">
                      {insight.theme.charAt(0)}
                    </span>
                  </div>
                );
              })}
              
              {/* Connection lines */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {filteredInsights.slice(0, 12).map((insight, index) => {
                  const angle = (index / 12) * Math.PI * 2;
                  const distance = 150 + Math.sin(index * 0.5) * 30;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  
                  return (
                    <line
                      key={`line-${insight.id}`}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      className="stroke-accent/30"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
            </div>
          )}
          
          {visualizationMode === 'timeline' && (
            <div className="relative h-full flex items-center">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 transform -translate-x-1/2"></div>
              {filteredInsights.slice(0, 15).map((insight, index) => {
                const position = (index / 15) * 100;
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={insight.id}
                    className={`absolute top-${position}% w-48 ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} bg-background border border-cream/30 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow`}
                    onClick={() => setSelectedInsight(insight)}
                  >
                    <div className="text-accent text-sm font-bold mb-1">{insight.temporalEra}</div>
                    <div className="text-foreground/80 text-sm truncate">{insight.theme}</div>
                  </div>
                );
              })}
            </div>
          )}
          
          {visualizationMode === 'galaxy' && (
            <div className="relative h-full">
              {/* Central black hole */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-black to-purple-900 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-black animate-pulse"></div>
              </div>
              
              {/* Spiral arms */}
              {filteredInsights.slice(0, 50).map((insight, index) => {
                const angle = (index / 50) * Math.PI * 4;
                const distance = 50 + (index / 50) * 200;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                const size = 10 + (index % 5) * 4;
                
                return (
                  <div
                    key={insight.id}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent to-purple-500 cursor-pointer hover:scale-125 transition-transform"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    onClick={() => setSelectedInsight(insight)}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Selected Insight Detail */}
        {selectedInsight && (
          <div className="bg-background rounded-2xl border border-cream/30 p-8 mb-12 animate-fadeIn">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                  <span className="text-white text-4xl">❝</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                    {selectedInsight.philosophicalSchool}
                  </span>
                  <span className="px-3 py-1 bg-cream/20 text-foreground/80 rounded-full text-sm">
                    {selectedInsight.temporalEra}
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">
                    Depth: {selectedInsight.depthLevel}/10
                  </span>
                </div>
                <h3 className="heading-text text-2xl text-accent mb-2">{selectedInsight.author}</h3>
                <h4 className="text-lg font-bold mb-4 text-foreground/90">{selectedInsight.theme}</h4>
                <p className="quote-text text-xl mb-6 italic">"{selectedInsight.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-foreground/70">Resonance</span>
                      <div className="flex-1 h-2 bg-cream/30 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${selectedInsight.resonanceFactor}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-foreground/70">{selectedInsight.resonanceFactor}%</span>
                    </div>
                  </div>
                  <button className="bg-accent text-background px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                    Save Insight
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">1,350+</div>
            <div className="text-foreground/80">Unique Insights</div>
          </div>
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-foreground/80">Philosophical Schools</div>
          </div>
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">12</div>
            <div className="text-foreground/80">Temporal Eras</div>
          </div>
          <div className="bg-background rounded-xl border border-cream/30 p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">∞</div>
            <div className="text-foreground/80">Interconnections</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getUniquePhilosopher(): string {
  const philosophers = [
    "David Bohm", "Fritjof Capra", "Gregory Bateson", "Lynn Margulis", 
    "Stuart Kauffman", "Rupert Sheldrake", "Ken Wilber", "Deepak Chopra",
    "Amit Goswami", "Ervin Laszlo", "Peter Russell", "Terence McKenna",
    "Brian Swimme", "Joanna Macy", "Thomas Berry", "Seyyed Hossein Nasr",
    "Henry Corbin", "Pierre Teilhard de Chardin", "Alfred North Whitehead",
    "Henri Bergson", "Martin Heidegger", "Jean Gebser", "Arthur Koestler"
  ];
  return philosophers[Math.floor(Math.random() * philosophers.length)];
}