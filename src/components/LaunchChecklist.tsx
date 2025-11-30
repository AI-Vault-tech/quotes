'use client';

import { useState } from 'react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

export default function LaunchChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 'content',
      title: 'Content Verification',
      description: 'All quotes verified with primary sources and properly attributed',
      completed: true,
      priority: 'high'
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      description: 'Page load times under 1s, images optimized, caching implemented',
      completed: true,
      priority: 'high'
    },
    {
      id: 'accessibility',
      title: 'Accessibility Compliance',
      description: 'WCAG 2.1 AA compliance, screen reader support, keyboard navigation',
      completed: false,
      priority: 'high'
    },
    {
      id: 'seo',
      title: 'SEO Implementation',
      description: 'Meta tags, structured data, sitemap, robots.txt',
      completed: false,
      priority: 'medium'
    },
    {
      id: 'analytics',
      title: 'Analytics Setup',
      description: 'Google Analytics, error tracking, user behavior monitoring',
      completed: false,
      priority: 'medium'
    },
    {
      id: 'security',
      title: 'Security Measures',
      description: 'HTTPS, CSP headers, input validation, rate limiting',
      completed: false,
      priority: 'high'
    },
    {
      id: 'testing',
      title: 'Cross-browser Testing',
      description: 'Chrome, Firefox, Safari, Edge compatibility',
      completed: false,
      priority: 'medium'
    },
    {
      id: 'mobile',
      title: 'Mobile Responsiveness',
      description: 'Responsive design tested on various devices and screen sizes',
      completed: true,
      priority: 'high'
    },
    {
      id: 'backup',
      title: 'Backup Strategy',
      description: 'Automated backups for database and content',
      completed: false,
      priority: 'medium'
    },
    {
      id: 'monitoring',
      title: 'Monitoring Setup',
      description: 'Uptime monitoring, error alerts, performance metrics',
      completed: false,
      priority: 'medium'
    }
  ]);
  
  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;
  
  return (
    <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
      <div className="flex justify-between items-center mb-6">
        <h3 className="heading-text text-xl text-accent">Launch Readiness Checklist</h3>
        <div className="bg-foreground text-background px-3 py-1 rounded-full text-sm">
          {completedCount}/{totalCount} Complete
        </div>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="bg-background p-4 rounded-lg border border-cream/30 flex items-start"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-5 h-5 rounded-full border mr-3 mt-0.5 flex-shrink-0 ${
                item.completed 
                  ? 'bg-accent border-accent' 
                  : 'border-foreground/30 hover:border-foreground/50'
              }`}
              aria-label={item.completed ? "Mark as incomplete" : "Mark as complete"}
            >
              {item.completed && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-background mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`font-bold ${item.completed ? 'line-through text-foreground/60' : ''}`}>
                  {item.title}
                </h4>
                <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(item.priority)}`}>
                  {item.priority}
                </span>
              </div>
              <p className={`text-sm ${item.completed ? 'text-foreground/50 line-through' : 'text-foreground/80'}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-cream/20">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-bold mb-2">Launch Status</h4>
            <div className="w-48 bg-cream/30 rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full" 
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-foreground/70 mt-1">
              {Math.round((completedCount / totalCount) * 100)}% Complete
            </p>
          </div>
          
          <button 
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              completedCount === totalCount
                ? 'bg-accent text-foreground hover:bg-opacity-90'
                : 'bg-foreground/30 text-foreground/50 cursor-not-allowed'
            }`}
            disabled={completedCount !== totalCount}
          >
            {completedCount === totalCount ? 'Launch Ready!' : 'Not Ready'}
          </button>
        </div>
      </div>
    </div>
  );
}