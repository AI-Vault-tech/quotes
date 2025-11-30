'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Sample quotes for the typewriter effect
  const quotes = [
    "The unexamined life is not worth living. — Socrates",
    "Be the change you wish to see in the world. — Mahatma Gandhi",
    "In the middle of difficulty lies opportunity. — Albert Einstein",
    "The only true wisdom is in knowing you know nothing. — Socrates",
    "It is during our darkest moments that we must focus to see the light. — Aristotle"
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

  // Get current time for daily triple wisdom
  const getCurrentTimeSlot = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 18) return 'Afternoon';
    return 'Evening';
  };

  const timeSlot = getCurrentTimeSlot();

  // Sample daily wisdom quotes
  const dailyWisdom = {
    Morning: {
      quote: "The morning sun never returns again. Seize the day with purpose.",
      author: "Horace"
    },
    Afternoon: {
      quote: "The afternoon is the time for reflection and realignment.",
      author: "Veritas"
    },
    Evening: {
      quote: "In the evening, we find peace in the wisdom we've gathered.",
      author: "Veritas"
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-cream/10 to-foreground/5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-accent/10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main typewriter quote */}
          <div className="mb-16">
            <h1 className="quote-text text-3xl md:text-5xl lg:text-6xl mb-8 text-foreground/90 min-h-[200px] flex items-center justify-center">
              {displayedText}
              <span className="ml-1 inline-block w-1 h-16 bg-accent animate-pulse"></span>
            </h1>
          </div>
          
          {/* Daily Triple Wisdom */}
          <div className="mb-16">
            <h2 className="heading-text text-2xl mb-8 text-accent">Daily Triple Wisdom</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream/30 dark:bg-foreground/5 p-6 rounded-xl border border-cream/20 backdrop-blur-sm">
                <h3 className="font-bold text-accent mb-3">{timeSlot} Inspiration</h3>
                <p className="quote-text text-lg mb-3">"{dailyWisdom[timeSlot].quote}"</p>
                <p className="text-foreground/70">— {dailyWisdom[timeSlot].author}</p>
              </div>
              
              <div className="bg-cream/30 dark:bg-foreground/5 p-6 rounded-xl border border-cream/20 backdrop-blur-sm">
                <h3 className="font-bold text-accent mb-3">Reflection</h3>
                <p className="quote-text text-lg mb-3">"Knowing yourself is the beginning of all wisdom."</p>
                <p className="text-foreground/70">— Aristotle</p>
              </div>
              
              <div className="bg-cream/30 dark:bg-foreground/5 p-6 rounded-xl border border-cream/20 backdrop-blur-sm">
                <h3 className="font-bold text-accent mb-3">Growth</h3>
                <p className="quote-text text-lg mb-3">"The only way to do great work is to love what you do."</p>
                <p className="text-foreground/70">— Steve Jobs</p>
              </div>
            </div>
          </div>
          
          {/* Mood-based discovery */}
          <div className="mb-12">
            <h2 className="heading-text text-2xl mb-6 text-accent">How are you feeling today?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Inspired', 'Contemplative', 'Curious', 'Hopeful', 'Reflective', 'Motivated'].map((mood) => (
                <button 
                  key={mood}
                  className="px-6 py-3 bg-background border border-cream/30 rounded-full hover:bg-accent hover:text-background transition-all duration-300"
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-12">
            <button className="bg-accent text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
              Begin Your Wisdom Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}