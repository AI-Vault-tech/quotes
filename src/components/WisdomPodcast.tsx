'use client';

import { useState, useRef } from 'react';

interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  type: 'daily' | 'interview' | 'series';
  host: string;
  guest?: string;
  plays: number;
}

export default function WisdomPodcast() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const episodes: Episode[] = [
    {
      id: 'ep1',
      title: 'The Power of Inner Control',
      description: 'Exploring Marcus Aurelius\'s teachings on mastering our responses to external events.',
      duration: '3:15',
      date: '2023-07-15',
      type: 'daily',
      host: 'Veritas Team',
      plays: 12400
    },
    {
      id: 'ep2',
      title: 'Stoic Resilience in Modern Times',
      description: 'How ancient Stoic principles can help us navigate contemporary challenges.',
      duration: '22:40',
      date: '2023-07-10',
      type: 'series',
      host: 'Veritas Team',
      guest: 'Dr. Sarah Johnson, Professor of Philosophy',
      plays: 8900
    },
    {
      id: 'ep3',
      title: 'Marcus Aurelius: The Philosopher Emperor',
      description: 'An intimate conversation with historian Dr. Michael Chen about the life and legacy of Marcus Aurelius.',
      duration: '45:22',
      date: '2023-07-05',
      type: 'interview',
      host: 'Veritas Team',
      guest: 'Dr. Michael Chen, Ancient History Scholar',
      plays: 15600
    },
    {
      id: 'ep4',
      title: 'Finding Strength in Adversity',
      description: 'Daily wisdom on transforming challenges into opportunities for growth.',
      duration: '3:05',
      date: '2023-07-01',
      type: 'daily',
      host: 'Veritas Team',
      plays: 11200
    }
  ];
  
  const handlePlay = (episodeId: string) => {
    if (currentEpisode === episodeId && isPlaying) {
      // Pause if same episode
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentEpisode === episodeId && !isPlaying) {
      // Play if same episode paused
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      // Switch to new episode
      setCurrentEpisode(episodeId);
      setIsPlaying(true);
      // In a real app, we would set the audio source here
      // For demo, we'll just simulate
      setTimeout(() => {
        setIsPlaying(false);
        setCurrentEpisode(null);
      }, 3000);
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'daily': return 'bg-blue-100 text-blue-800';
      case 'interview': return 'bg-purple-100 text-purple-800';
      case 'series': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'daily': return 'Daily Wisdom';
      case 'interview': return 'Interview';
      case 'series': return 'Series';
      default: return type;
    }
  };
  
  return (
    <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="heading-text text-2xl text-accent">Wisdom Podcast</h2>
          <p className="text-foreground/80">Daily 3-minute audio readings and deep philosophical discussions</p>
        </div>
        <button className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
          Subscribe
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        {episodes.map((episode) => (
          <div 
            key={episode.id} 
            className="bg-background p-5 rounded-lg border border-cream/30 hover:border-accent transition-all"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold">{episode.title}</h3>
                <p className="text-sm text-foreground/70">{episode.description}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(episode.type)}`}>
                {getTypeLabel(episode.type)}
              </span>
            </div>
            
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center text-sm text-foreground/70 mb-2 sm:mb-0">
                <span className="mr-4">{episode.date}</span>
                <span>{episode.duration}</span>
                {episode.guest && (
                  <span className="ml-4">Guest: {episode.guest}</span>
                )}
              </div>
              
              <div className="flex items-center">
                <span className="text-sm text-foreground/70 mr-4">{episode.plays.toLocaleString()} plays</span>
                <button 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-background hover:bg-opacity-90 transition-all"
                  onClick={() => handlePlay(episode.id)}
                >
                  {currentEpisode === episode.id && isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-foreground text-background p-6 rounded-lg">
        <h3 className="font-bold mb-3">Featured Series</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-foreground/90 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Stoic Foundations</h4>
            <p className="text-sm text-cream/80 mb-3">A 10-part series exploring the core principles of Stoic philosophy</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-cream/70">Episodes: 10</span>
              <button className="text-xs text-cream/90 hover:underline">Explore</button>
            </div>
          </div>
          
          <div className="bg-foreground/90 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Eastern Wisdom</h4>
            <p className="text-sm text-cream/80 mb-3">Discovering the profound insights of Taoism, Buddhism, and Confucianism</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-cream/70">Episodes: 8</span>
              <button className="text-xs text-cream/90 hover:underline">Explore</button>
            </div>
          </div>
          
          <div className="bg-foreground/90 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Modern Applications</h4>
            <p className="text-sm text-cream/80 mb-3">How ancient wisdom applies to contemporary challenges</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-cream/70">Episodes: 12</span>
              <button className="text-xs text-cream/90 hover:underline">Explore</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden audio element for demo */}
      <audio ref={audioRef} className="hidden" />
    </div>
  );
}