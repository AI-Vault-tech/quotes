'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PremiumFooter() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-yellow-800 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">V</span>
              </div>
              <span className="heading-text text-2xl text-gray-50">VERITAS</span>
            </div>
            <p className="body-text text-gray-400 mb-6">
              Curating timeless wisdom from history's greatest minds to inspire and enlighten the modern world.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <Link 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-gray-50 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    {social.charAt(0).toUpperCase()}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="heading-text text-lg text-gray-50 mb-6">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: 'All Quotes', path: '/quotes' },
                { name: 'Philosophers', path: '/authors' },
                { name: 'Collections', path: '/thematic-collections' },
                { name: 'Daily Wisdom', path: '/quotes-of-the-day' },
                { name: 'Popular Topics', path: '/explore' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className="body-text text-gray-400 hover:text-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="heading-text text-lg text-gray-50 mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Blog', path: '/blog' },
                { name: 'Research Papers', path: '/research' },
                { name: 'Reading Lists', path: '/reading-lists' },
                { name: 'Glossary', path: '/glossary' },
                { name: 'Teaching Materials', path: '/teaching' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className="body-text text-gray-400 hover:text-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="heading-text text-lg text-gray-50 mb-6">Philosophical Insights</h3>
            <p className="body-text text-gray-400 mb-4">
              Receive weekly wisdom delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="body-text text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} VERITAS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.path}
                  href={link.path} 
                  className="body-text text-gray-500 hover:text-gray-50 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}