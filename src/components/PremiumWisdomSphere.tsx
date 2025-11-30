// src/components/PremiumWisdomSphere.tsx
'use client';

import { useState, useEffect } from 'react';

interface WisdomNode {
  id: string;
  quote: string;
  author: string;
  theme: string;
  connection: string;
  position: { x: number; y: number; z: number };
  size: number;
}

export default function PremiumWisdomSphere() {
  const [nodes, setNodes] = useState<WisdomNode[]>([]);
  const [hoveredNode, setHoveredNode] = useState<WisdomNode | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Generate wisdom nodes with unique philosophical concepts
  useEffect(() => {
    const themes = [
      "Existentialism", "Stoicism", "Buddhism", "Humanism", "Rationalism",
      "Empiricism", "Idealism", "Nihilism", "Absurdism", "Pragmatism"
    ];
    
    const connections = [
      "Paradox", "Unity", "Duality", "Transcendence", "Impermanence",
      "Freedom", "Responsibility", "Authenticity", "Meaning", "Purpose"
    ];
    
    const wisdomNodes: WisdomNode[] = [
      {
        id: "node-1",
        quote: "The unexamined life is not worth living.",
        author: "Socrates",
        theme: themes[0],
        connection: connections[0],
        position: { x: 0, y: 0, z: 0 },
        size: 1.5
      },
      {
        id: "node-2",
        quote: "Man is condemned to be free.",
        author: "Jean-Paul Sartre",
        theme: themes[0],
        connection: connections[2],
        position: { x: 100, y: 50, z: 30 },
        size: 1.2
      },
      {
        id: "node-3",
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle",
        theme: themes[1],
        connection: connections[3],
        position: { x: -80, y: -40, z: 60 },
        size: 1.3
      },
      {
        id: "node-4",
        quote: "Everything we hear is an opinion, not a fact.",
        author: "Marcus Aurelius",
        theme: themes[1],
        connection: connections[4],
        position: { x: 60, y: -70, z: -20 },
        size: 1.1
      },
      {
        id: "node-5",
        quote: "Peace comes from within.",
        author: "Buddha",
        theme: themes[2],
        connection: connections[5],
        position: { x: -50, y: 80, z: -40 },
        size: 1.4
      },
      {
        id: "node-6",
        quote: "Man is the measure of all things.",
        author: "Protagoras",
        theme: themes[3],
        connection: connections[6],
        position: { x: 30, y: 90, z: 70 },
        size: 1.0
      },
      {
        id: "node-7",
        quote: "God is dead.",
        author: "Friedrich Nietzsche",
        theme: themes[4],
        connection: connections[7],
        position: { x: -90, y: -80, z: 10 },
        size: 1.2
      },
      {
        id: "node-8",
        quote: "The courage to be is the courage to accept oneself.",
        author: "Paul Tillich",
        theme: themes[5],
        connection: connections[8],
        position: { x: 70, y: 20, z: -80 },
        size: 1.3
      }
    ];
    
    setNodes(wisdomNodes);
  }, []);

  // Handle mouse movement for rotation effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setRotation({
        x: (e.clientY / window.innerHeight) * 360,
        y: (e.clientX / window.innerWidth) * 360
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-cream/5 to-accent/5">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-accent/5 blur-2xl animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-text text-4xl md:text-5xl mb-6 text-accent">
            The Wisdom Constellation
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Explore interconnected philosophical concepts in our interactive 3D wisdom sphere
          </p>
        </div>
        
        {/* Wisdom Sphere Container */}
        <div className="relative h-[500px] w-full max-w-4xl mx-auto">
          {/* Central glowing orb */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 rounded-full bg-accent/20 blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-accent/30 blur-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent animate-pulse"></div>
          </div>
          
          {/* Wisdom Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                hoveredNode?.id === node.id 
                  ? 'z-20 scale-125' 
                  : 'z-10 hover:scale-110'
              }`}
              style={{
                left: `calc(50% + ${node.position.x}px)`,
                top: `calc(50% + ${node.position.y}px)`,
                transform: `translate(-50%, -50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
              }}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className={`rounded-full bg-background border-2 border-accent/30 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                hoveredNode?.id === node.id 
                  ? 'shadow-2xl border-accent shadow-accent/30' 
                  : 'shadow-lg'
              }`}
              style={{
                width: `${node.size * 60}px`,
                height: `${node.size * 60}px`
              }}>
                <div className="text-center p-2">
                  <div className="text-accent text-xs font-bold mb-1">{node.theme}</div>
                  <div className="text-foreground/80 text-xs">{node.connection}</div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Connecting lines */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {nodes.map((node, index) => {
              if (index === 0) return null;
              const prevNode = nodes[index - 1];
              return (
                <line
                  key={`line-${node.id}`}
                  x1={`calc(50% + ${prevNode.position.x}px)`}
                  y1={`calc(50% + ${prevNode.position.y}px)`}
                  x2={`calc(50% + ${node.position.x}px)`}
                  y2={`calc(50% + ${node.position.y}px)`}
                  className="stroke-accent/30 stroke-1"
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  }}
                />
              );
            })}
          </svg>
        </div>
        
        {/* Hover Card for Detailed Info */}
        {hoveredNode && (
          <div className="mt-12 max-w-2xl mx-auto bg-background/80 backdrop-blur-sm border border-cream/30 rounded-2xl p-8 shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-2xl">❝</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="heading-text text-2xl text-accent mb-2">{hoveredNode.theme}</h3>
                <p className="quote-text text-xl mb-4">"{hoveredNode.quote}"</p>
                <p className="text-foreground/70 mb-2">— {hoveredNode.author}</p>
                <div className="inline-block px-3 py-1 bg-cream/20 rounded-full text-sm">
                  Connection: {hoveredNode.connection}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-accent to-accent/80 text-background px-8 py-4 rounded-full text-lg font-medium hover:from-accent/90 hover:to-accent/70 transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/30">
            Explore the Full Wisdom Universe
          </button>
        </div>
      </div>
    </div>
  );
}