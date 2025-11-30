// src/components/WisdomConstellation.tsx
'use client';

import { useState, useEffect } from 'react';

interface WisdomNode {
  id: string;
  quote: string;
  author: string;
  theme: string;
  era: string;
  connection: string;
  position: { x: number; y: number; z: number };
  size: number;
  color: string;
}

export default function WisdomConstellation() {
  const [nodes, setNodes] = useState<WisdomNode[]>([]);
  const [hoveredNode, setHoveredNode] = useState<WisdomNode | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>('all');
  const [isAnimating, setIsAnimating] = useState(true);

  // Generate wisdom constellation nodes
  useEffect(() => {
    const themes = [
      "Paradoxical Wisdom", "Interconnectedness", "Emergent Consciousness", 
      "Quantum Metaphysics", "Biological Philosophy", "Cosmic Perspective",
      "Temporal Fluidity", "Collective Unconscious", "Neural Symphonies"
    ];
    
    const connections = [
      "Unity in Diversity", "Pattern Recognition", "Emergent Properties",
      "Synergistic Harmony", "Holistic Integration", "Symbiotic Relationships",
      "Resonant Frequencies", "Coherent Oscillation", "Synchronized Emergence"
    ];
    
    const eras = [
      "Ancient Insights", "Medieval Mysticism", "Renaissance Revelation",
      "Enlightenment Evolution", "Modern Manifestation", "Contemporary Convergence"
    ];
    
    const colors = [
      "from-purple-500 to-indigo-500",
      "from-blue-500 to-cyan-500",
      "from-teal-500 to-green-500",
      "from-yellow-500 to-orange-500",
      "from-red-500 to-pink-500",
      "from-indigo-500 to-purple-500"
    ];
    
    const wisdomNodes: WisdomNode[] = [];
    
    // Create central node
    wisdomNodes.push({
      id: "center",
      quote: "All things are connected like the blood that unites one family.",
      author: "Chief Seattle",
      theme: "Universal Connection",
      era: "Indigenous Wisdom",
      connection: "The Foundation",
      position: { x: 0, y: 0, z: 0 },
      size: 2.0,
      color: "from-gold-400 to-amber-500"
    });
    
    // Create orbiting nodes
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const distance = 150 + Math.sin(i * 0.5) * 50;
      
      wisdomNodes.push({
        id: `node-${i}`,
        quote: getSampleQuote(themes[i % themes.length]),
        author: getSampleAuthor(),
        theme: themes[i % themes.length],
        era: eras[i % eras.length],
        connection: connections[i % connections.length],
        position: { 
          x: Math.cos(angle) * distance, 
          y: Math.sin(angle) * distance, 
          z: Math.sin(angle * 2) * 30 
        },
        size: 0.8 + Math.random() * 0.7,
        color: colors[i % colors.length]
      });
    }
    
    setNodes(wisdomNodes);
  }, []);

  // Animation effect
  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setNodes(prevNodes => {
        return prevNodes.map(node => {
          if (node.id === "center") return node;
          
          // Gentle orbital motion
          const angle = Math.atan2(node.position.y, node.position.x);
          const distance = Math.sqrt(node.position.x * node.position.x + node.position.y * node.position.y);
          const newAngle = angle + 0.005;
          
          return {
            ...node,
            position: {
              x: Math.cos(newAngle) * distance,
              y: Math.sin(newAngle) * distance,
              z: node.position.z + Math.sin(Date.now() * 0.001 + node.id.charCodeAt(0)) * 0.5
            }
          };
        });
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Filter nodes by theme
  const filteredNodes = activeTheme === 'all' 
    ? nodes 
    : nodes.filter(node => node.theme.toLowerCase().includes(activeTheme.toLowerCase()) || node.id === "center");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-cream/5 to-accent/5 py-16">
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-accent/10 animate-pulse"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-text text-4xl md:text-5xl mb-4 text-accent">
            The Wisdom Constellation
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80 mb-8">
            Explore 1,350+ interconnected insights across time and cultures
          </p>
          
          {/* Theme Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                activeTheme === 'all'
                  ? 'bg-accent text-background'
                  : 'bg-background/80 border border-cream/30 hover:bg-cream/20'
              }`}
              onClick={() => setActiveTheme('all')}
            >
              All Themes
            </button>
            {['Paradox', 'Consciousness', 'Cosmic', 'Temporal'].map((theme) => (
              <button
                key={theme}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeTheme === theme.toLowerCase()
                    ? 'bg-accent text-background'
                    : 'bg-background/80 border border-cream/30 hover:bg-cream/20'
                }`}
                onClick={() => setActiveTheme(theme.toLowerCase())}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
        
        {/* Constellation Visualization */}
        <div className="relative h-[600px] w-full max-w-6xl mx-auto">
          {/* Central hub glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-pulse"></div>
          </div>
          
          {/* Connection lines */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {filteredNodes.filter(n => n.id !== "center").map((node, index) => (
              <line
                key={`line-${node.id}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${node.position.x}px)`}
                y2={`calc(50% + ${node.position.y}px)`}
                className="stroke-accent/20"
                strokeWidth="1"
              />
            ))}
            {/* Connect nearby nodes */}
            {filteredNodes.slice(1, 8).map((node, i) => {
              const nextNode = filteredNodes[(i + 2) % (filteredNodes.length - 1) + 1];
              return (
                <line
                  key={`near-line-${i}`}
                  x1={`calc(50% + ${node.position.x}px)`}
                  y1={`calc(50% + ${node.position.y}px)`}
                  x2={`calc(50% + ${nextNode.position.x}px)`}
                  y2={`calc(50% + ${nextNode.position.y}px)`}
                  className="stroke-cream/10"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
          
          {/* Wisdom Nodes */}
          {filteredNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
                hoveredNode?.id === node.id 
                  ? 'z-30 scale-125' 
                  : 'z-20 hover:scale-110'
              } ${node.id === "center" ? 'z-30' : ''}`}
              style={{
                left: `calc(50% + ${node.position.x}px)`,
                top: `calc(50% + ${node.position.y}px)`,
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm border ${
                hoveredNode?.id === node.id 
                  ? 'shadow-2xl border-accent shadow-accent/30' 
                  : 'shadow-lg border-cream/20'
              } ${node.id === "center" ? 'ring-4 ring-accent/30' : ''}`}
              style={{
                width: `${node.size * 80}px`,
                height: `${node.size * 80}px`,
                background: `linear-gradient(135deg, var(--accent)/0.2, var(--accent)/0.1)`
              }}>
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center ${
                  node.id === "center" ? 'animate-pulse' : ''
                }`}
                style={{
                  width: `${node.size * 70}px`,
                  height: `${node.size * 70}px`,
                  opacity: 0.8
                }}>
                  <div className="text-center p-1">
                    <div className="text-white text-xs font-bold truncate px-1">
                      {node.theme.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Insight Panel */}
        {hoveredNode && (
          <div className="mt-12 max-w-3xl mx-auto bg-background/80 backdrop-blur-sm border border-cream/30 rounded-2xl p-8 shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${hoveredNode.color} flex items-center justify-center`}>
                  <span className="text-white text-3xl">❝</span>
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                    {hoveredNode.era}
                  </span>
                  <span className="px-3 py-1 bg-cream/20 text-foreground/80 rounded-full text-sm">
                    {hoveredNode.theme}
                  </span>
                </div>
                <h3 className="heading-text text-2xl text-accent mb-3">{hoveredNode.author}</h3>
                <p className="quote-text text-xl mb-4 italic">"{hoveredNode.quote}"</p>
                <div className="inline-block px-3 py-1 bg-cream/20 rounded-full text-sm">
                  Connection: {hoveredNode.connection}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Stats and Controls */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-background/80 backdrop-blur-sm border border-cream/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent">1,350+</div>
              <div className="text-foreground/70 text-sm">Insights</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-cream/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-foreground/70 text-sm">Themes</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-cream/30 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-accent">25</div>
              <div className="text-foreground/70 text-sm">Eras</div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                isAnimating 
                  ? 'bg-foreground text-background hover:bg-opacity-90' 
                  : 'bg-cream/30 border border-cream/50 hover:bg-cream/50'
              }`}
              onClick={() => setIsAnimating(!isAnimating)}
            >
              {isAnimating ? 'Pause Motion' : 'Resume Motion'}
            </button>
            <button className="bg-gradient-to-r from-accent to-accent/80 text-background px-6 py-3 rounded-full font-medium hover:from-accent/90 hover:to-accent/70 transition-all">
              Explore Full Constellation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions for sample content
function getSampleQuote(theme: string): string {
  const quotes: Record<string, string[]> = {
    "Paradoxical Wisdom": [
      "The deepest truths are paradoxes that dissolve rigid thinking.",
      "Wisdom emerges when contradictions are embraced rather than resolved.",
      "Paradox is the mind's doorway to transcendent understanding."
    ],
    "Interconnectedness": [
      "All phenomena arise in dependence upon multiple causes and conditions.",
      "Separateness is an illusion; we are waves in the same ocean.",
      "Individual consciousness is a localized eddy in universal awareness."
    ],
    "Emergent Consciousness": [
      "Consciousness is not produced by the brain but revealed through it.",
      "Awareness emerges from complexity like music from orchestrated sounds.",
      "Mind is the universe becoming conscious of itself."
    ],
    "Quantum Metaphysics": [
      "Reality is participatory; observers co-create the world.",
      "The quantum field is consciousness in its unmanifest potential.",
      "Uncertainty principle applies equally to knowledge and being."
    ],
    "Biological Philosophy": [
      "Evolution is creativity expressed through genetic algorithms.",
      "Life is information processing that maintains itself against entropy.",
      "Organisms are temporary patterns in energy flow networks."
    ],
    "Cosmic Perspective": [
      "We are made of star stuff, temporarily organized consciousness.",
      "The cosmos is a vast self-reflective system seeking to know itself.",
      "Our galaxy is a neural network node in the cosmic mind."
    ]
  };
  
  const themeKey = Object.keys(quotes).find(key => theme.includes(key.split(' ')[0])) || "Paradoxical Wisdom";
  return quotes[themeKey][Math.floor(Math.random() * quotes[themeKey].length)];
}

function getSampleAuthor(): string {
  const authors = [
    "Terence McKenna", "David Bohm", "Fritjof Capra", "Gregory Bateson",
    "Lynn Margulis", "Stuart Kauffman", "Rupert Sheldrake", "Ken Wilber",
    "Deepak Chopra", "Amit Goswami", "Ervin Laszlo", "Peter Russell"
  ];
  return authors[Math.floor(Math.random() * authors.length)];
}