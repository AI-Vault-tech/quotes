'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PersonalSanctuaryPage() {
  const [activeTab, setActiveTab] = useState('collection');
  
  // Sample data for demonstration
  const savedQuotes = [
    {
      id: 1,
      text: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
      source: "Apology",
      tags: ["Humility", "Knowledge"],
      savedDate: "2023-05-15"
    },
    {
      id: 2,
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      source: "Personal Correspondence",
      tags: ["Resilience", "Opportunity"],
      savedDate: "2023-06-22"
    },
    {
      id: 3,
      text: "Be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
      source: "Letter to Students",
      tags: ["Action", "Change"],
      savedDate: "2023-07-10"
    }
  ];
  
  const journalEntries = [
    {
      id: 1,
      date: "2023-07-15",
      mood: "Reflective",
      prompt: "What does wisdom mean to you?",
      entry: "Today I realized that wisdom isn't about having all the answers, but about asking the right questions..."
    },
    {
      id: 2,
      date: "2023-07-10",
      mood: "Inspired",
      prompt: "Describe a moment when you felt truly wise.",
      entry: "When I helped my friend through a difficult time without trying to fix everything, just listening..."
    }
  ];
  
  const activeCollections = [
    {
      id: 1,
      title: "The Stoic Path",
      progress: 15,
      daysCompleted: 15,
      totalDays: 30,
      lastAccessed: "2023-07-15"
    },
    {
      id: 2,
      title: "Feminist Wisdom Through Ages",
      progress: 60,
      daysCompleted: 9,
      totalDays: 15,
      lastAccessed: "2023-07-12"
    }
  ];
  
  const dailyReminders = [
    {
      id: 1,
      time: "07:00 AM",
      quote: "The morning sun never returns again. Seize the day with purpose.",
      author: "Horace"
    },
    {
      id: 2,
      time: "09:00 PM",
      quote: "We can only learn to love by loving.",
      author: "Iris Murdoch"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">My Personal Sanctuary</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Your private space for reflection, growth, and wisdom cultivation. 
            Track your journey, revisit meaningful insights, and deepen your understanding.
          </p>
        </div>
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap border-b border-cream/20 mb-8">
          {[
            { id: 'collection', label: 'My Wisdom Collection' },
            { id: 'journal', label: 'Wisdom Journal' },
            { id: 'learning', label: 'Learning Paths' },
            { id: 'practice', label: 'Daily Practice' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 font-medium relative ${
                activeTab === tab.id 
                  ? 'text-accent' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div>
          {/* My Wisdom Collection */}
          {activeTab === 'collection' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="heading-text text-2xl text-accent">Saved Quotes</h2>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-cream/30 rounded-full text-sm">All Tags</button>
                  <button className="px-4 py-2 bg-cream/30 rounded-full text-sm">Sort by Date</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedQuotes.map((quote) => (
                  <div key={quote.id} className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="quote-text text-lg mb-2">"{quote.text}"</h3>
                        <p className="text-foreground/70">— {quote.author}, {quote.source}</p>
                      </div>
                      <button className="text-foreground/50 hover:text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {quote.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>Saved: {quote.savedDate}</span>
                      <button className="text-accent hover:underline">Add Note</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Wisdom Journal */}
          {activeTab === 'journal' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="heading-text text-2xl text-accent">Journal Entries</h2>
                <button className="bg-accent text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
                  New Entry
                </button>
              </div>
              
              <div className="space-y-6">
                {journalEntries.map((entry) => (
                  <div key={entry.id} className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{entry.prompt}</h3>
                        <div className="flex items-center gap-4 text-sm text-foreground/70">
                          <span>{entry.date}</span>
                          <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">{entry.mood}</span>
                        </div>
                      </div>
                      <button className="text-foreground/50 hover:text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{entry.entry}</p>
                    
                    <div className="flex gap-3">
                      <button className="text-sm text-accent hover:underline">Edit</button>
                      <button className="text-sm text-accent hover:underline">Share</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Learning Paths */}
          {activeTab === 'learning' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="heading-text text-2xl text-accent">Active Collections</h2>
                <Link href="/collections" className="text-accent hover:underline">Browse Collections</Link>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeCollections.map((collection) => (
                  <div key={collection.id} className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="heading-text text-xl">{collection.title}</h3>
                      <span className="text-sm text-foreground/70">Day {collection.daysCompleted}/{collection.totalDays}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{collection.progress}%</span>
                      </div>
                      <div className="w-full bg-cream/30 rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full" 
                          style={{ width: `${collection.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Last accessed: {collection.lastAccessed}</span>
                      <button className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Daily Practice */}
          {activeTab === 'practice' && (
            <div>
              <h2 className="heading-text text-2xl text-accent mb-8">Daily Practice</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Scheduled Reminders */}
                <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                  <h3 className="font-bold text-lg mb-4">Scheduled Reminders</h3>
                  
                  <div className="space-y-4">
                    {dailyReminders.map((reminder) => (
                      <div key={reminder.id} className="flex items-start p-4 bg-background rounded-lg border border-cream/30">
                        <div className="mr-4">
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="quote-text mb-1">"{reminder.quote}"</p>
                          <p className="text-sm text-foreground/70 mb-2">— {reminder.author}</p>
                          <p className="text-sm font-medium">{reminder.time}</p>
                        </div>
                        <button className="text-foreground/50 hover:text-accent">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 py-3 border border-dashed border-cream/30 rounded-lg text-foreground/70 hover:border-accent hover:text-accent transition-colors">
                    + Add New Reminder
                  </button>
                </div>
                
                {/* Meditation Timer */}
                <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                  <h3 className="font-bold text-lg mb-4">Meditation Timer</h3>
                  
                  <div className="text-center py-8">
                    <div className="text-5xl font-bold mb-6">10:00</div>
                    
                    <div className="flex justify-center gap-4 mb-6">
                      {[5, 10, 15, 20].map((minutes) => (
                        <button 
                          key={minutes}
                          className="px-4 py-2 bg-cream/30 rounded-full text-sm hover:bg-accent hover:text-background transition-colors"
                        >
                          {minutes} min
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4">
                      <button className="bg-accent text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                        Start
                      </button>
                      <button className="px-6 py-3 bg-cream/30 rounded-full font-medium hover:bg-cream/40 transition-colors">
                        Pause
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-cream/20">
                    <h4 className="font-bold mb-3">Today's Wisdom Reading</h4>
                    <div className="bg-background p-4 rounded-lg border border-cream/30">
                      <p className="quote-text mb-2">"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."</p>
                      <p className="text-sm text-foreground/70">— Marcus Aurelius</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}