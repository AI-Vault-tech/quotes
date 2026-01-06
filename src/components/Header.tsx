'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Quotes of the Day', path: '/quotes-of-the-day' },
    { name: 'Top Quotes', path: '/top-quotes' },
    { name: 'Random Quotes', path: '/random-quotes' },
    { name: 'Philosopher Spotlight', path: '/philosopher-spotlight' },
    { name: 'Thematic Collections', path: '/thematic-collections' },
    { name: 'Authors', path: '/authors' },
    { name: 'Collections', path: '/collections' },
    { name: 'My Sanctuary', path: '/my-sanctuary' },
  ];

  return (
    <header className="bg-background border-b border-cream/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="heading-text text-2xl text-accent">VERITAS</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-medium transition-colors hover:text-accent ${
                  pathname === item.path ? 'text-accent' : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/search" className="text-foreground/80 hover:text-accent transition-colors hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-foreground/80 hover:text-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 font-medium transition-colors hover:text-accent ${
                  pathname === item.path ? 'text-accent' : 'text-foreground/80'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/search" 
              className="block py-2 text-foreground/80 hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Search
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}