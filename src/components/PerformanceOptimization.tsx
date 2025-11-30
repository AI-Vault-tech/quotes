'use client';

import { useState, useEffect } from 'react';

export default function PerformanceOptimization() {
  const [performanceData, setPerformanceData] = useState({
    loadTime: 0,
    quotesVisible: 0,
    imageLoading: 'progressive',
    caching: 'intelligent',
    cdn: 'global'
  });
  
  useEffect(() => {
    // Simulate performance data
    const timer = setTimeout(() => {
      setPerformanceData({
        loadTime: 0.8,
        quotesVisible: 1000,
        imageLoading: 'progressive',
        caching: 'intelligent',
        cdn: 'global'
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
      <h3 className="heading-text text-xl mb-4 text-accent">Performance Optimization</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-background p-4 rounded-lg border border-cream/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-foreground/80">Page Load Time</span>
            <span className="font-bold">{performanceData.loadTime}s</span>
          </div>
          <div className="w-full bg-cream/30 rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full" 
              style={{ width: `${(1 - performanceData.loadTime / 2) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-background p-4 rounded-lg border border-cream/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-foreground/80">Quotes Visible</span>
            <span className="font-bold">&lt;1s</span>
          </div>
          <div className="w-full bg-cream/30 rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full" 
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
        
        <div className="bg-background p-4 rounded-lg border border-cream/30">
          <div className="flex justify-between items-center">
            <span className="text-foreground/80">Image Loading</span>
            <span className="font-bold capitalize">{performanceData.imageLoading}</span>
          </div>
        </div>
        
        <div className="bg-background p-4 rounded-lg border border-cream/30">
          <div className="flex justify-between items-center">
            <span className="text-foreground/80">Caching</span>
            <span className="font-bold capitalize">{performanceData.caching}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-cream/20">
        <h4 className="font-bold mb-2">Optimization Features</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Text-first loading strategy
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Progressive image loading
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Intelligent caching
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Global CDN distribution
          </li>
        </ul>
      </div>
    </div>
  );
}