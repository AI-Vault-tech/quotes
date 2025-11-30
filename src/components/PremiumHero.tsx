// src/components/PremiumHero.tsx
'use client';

import { useState, useEffect } from 'react';

export default function PremiumHero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  // Premium quotes for the typewriter effect
  const quotes = [
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. — Einstein",
    "The mind is furnished with ideas by experience alone. — Locke",
    "Man is condemned to be free. — Sartre",
    "The unexamined life is not worth living. — Socrates",
    "That which does not kill us makes us stronger. — Nietzsche"
  ];

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    
    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < currentQuote.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentQuote.substring(0, displayedText.length + 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else if (displayedText.length === currentQuote.length) {
        // Finished typing, pause before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentQuote.substring(0, displayedText.length - 1));
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next quote
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    }
  }, [displayedText, isDeleting, currentQuoteIndex, quotes, typingSpeed]);

  // Generate floating particles for premium effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get current time for daily triple wisdom
  const getCurrentTimeSlot = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 18) return 'Afternoon';
    return 'Evening';
  };

  const timeSlot = getCurrentTimeSlot();

  // Premium daily wisdom quotes
  const dailyWisdom = {
    Morning: {
      quote: "Each morning we are born again. What we do today is what matters most.",
      author: "Buddha",
      theme: "Renewal"
    },
    Afternoon: {
      quote: "The afternoon is the time for reflection and realignment with your purpose.",
      author: "Veritas",
      theme: "Clarity"
    },
    Evening: {
      quote: "In the evening, we find peace in the wisdom we've gathered throughout the day.",
      author: "Veritas",
      theme: "Integration"
    }
  };

  // Premium mood options
  const moodOptions = [
    { name: 'Inspired', icon: '✨', color: 'from-yellow-400 to-orange-500' },
    { name: 'Contemplative', icon: '🧘', color: 'from-blue-400 to-indigo-500' },
    { name: 'Curious', icon: '🔍', color: 'from-green-400 to-teal-500' },
    { name: 'Hopeful', icon: '🌟', color: 'from-pink-400 to-rose-500' },
    { name: 'Reflective', icon: '💭', color: 'from-purple-400 to-violet-500' },
    { name: 'Motivated', icon: '💪', color: 'from-red-400 to-orange-500' }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-cream/5 to-accent/5"></div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent/20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Geometric decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-accent/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 border-2 border-accent/30 rounded-full animate-ping opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium backdrop-blur-sm border border-accent/20">
            🌟 Premium Wisdom Experience
          </div>
          
          {/* Main typewriter quote with enhanced styling */}
          <div className="mb-16">
            <h1 className="quote-text text-4xl md:text-6xl lg:text-7xl mb-8 text-foreground/90 min-h-[250px] flex items-center justify-center font-serif leading-tight">
              {displayedText}
              <span className="ml-2 inline-block w-2 h-20 bg-accent animate-pulse"></span>
            </h1>
          </div>
          
          {/* Enhanced Daily Triple Wisdom */}
          <div className="mb-16">
            <h2 className="heading-text text-3xl mb-10 text-accent font-serif">Daily Triple Wisdom</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background/70 backdrop-blur-sm p-8 rounded-2xl border border-cream/30 shadow-xl transform transition-all hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🌅</span>
                </div>
                <h3 className="font-bold text-accent mb-4 text-xl">{timeSlot} Inspiration</h3>
                <p className="quote-text text-xl mb-4 italic">"{dailyWisdom[timeSlot].quote}"</p>
                <p className="text-foreground/70 font-medium">— {dailyWisdom[timeSlot].author}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-cream/20 rounded-full text-sm">{dailyWisdom[timeSlot].theme}</span>
                </div>
              </div>
              
              <div className="bg-background/70 backdrop-blur-sm p-8 rounded-2xl border border-cream/30 shadow-xl transform transition-all hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="font-bold text-accent mb-4 text-xl">Reflection</h3>
                <p className="quote-text text-xl mb-4 italic">"The greatest weapon against stress is our ability to choose one thought over another."</p>
                <p className="text-foreground/70 font-medium">— William James</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-cream/20 rounded-full text-sm">Mindfulness</span>
                </div>
              </div>
              
              <div className="bg-background/70 backdrop-blur-sm p-8 rounded-2xl border border-cream/30 shadow-xl transform transition-all hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-bold text-accent mb-4 text-xl">Growth</h3>
                <p className="quote-text text-xl mb-4 italic">"What we achieve inwardly will change outer reality."</p>
                <p className="text-foreground/70 font-medium">— Plutarch</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-cream/20 rounded-full text-sm">Transformation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Mood-based discovery */}
          <div className="mb-16">
            <h2 className="heading-text text-3xl mb-10 text-accent font-serif">How are you feeling today?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {moodOptions.map((mood) => (
                <button 
                  key={mood.name}
                  className={`group relative px-8 py-4 bg-background border-2 border-cream/30 rounded-full hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl backdrop-blur-sm`}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${mood.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative flex items-center gap-3">
                    <span className="text-2xl">{mood.icon}</span>
                    <span className="font-medium text-lg">{mood.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Enhanced Call to action */}
          <div className="mt-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-accent to-amber-700 text-background rounded-full text-xl font-bold hover:from-accent/90 hover:to-amber-800 transition-all transform hover:scale-105 shadow-2xl hover:shadow-accent/30">
              <span className="relative z-10">Begin Your Premium Wisdom Journey</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </button>
            <p className="mt-6 text-foreground/70">Join 50,000+ seekers in exploring 6,350+ unique insights</p>
          </div>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}