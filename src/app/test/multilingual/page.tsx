// src/app/test/multilingual/page.tsx
'use client';

import { useState, useEffect } from 'react';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function MultilingualTestPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // Supported languages for testing
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'Urdu' },
    { code: 'ar', name: 'Arabic' },
    { code: 'zh', name: 'Chinese' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Multilingual Test</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Test the multilingual functionality of the VERITAS platform
          </p>
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <label htmlFor="language-select" className="block text-lg font-medium mb-2">
            Select Language:
          </label>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full md:w-64 px-4 py-2 bg-background border border-cream/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Test Sections */}
        <div className="space-y-8">
          <DynamicQuoteSection 
            title={`Quotes in ${languages.find(l => l.code === selectedLanguage)?.name || 'Selected Language'}`}
            filterType="language"
            filterValue={selectedLanguage}
            limit={10}
            language={selectedLanguage}
          />
          
          <DynamicQuoteSection 
            title="Wisdom Quotes"
            filterType="theme"
            filterValue="wisdom"
            limit={10}
            language={selectedLanguage}
          />
          
          <DynamicQuoteSection 
            title="Love Quotes"
            filterType="theme"
            filterValue="love"
            limit={10}
            language={selectedLanguage}
          />
        </div>
      </div>
    </div>
  );
}