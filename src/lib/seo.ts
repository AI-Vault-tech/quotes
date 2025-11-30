// src/lib/seo.ts
import { Metadata } from 'next';

// Base URL for the site - update with your actual domain
const BASE_URL = 'https://veritas.example.com';

// Supported languages
const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', pathPrefix: '' },
  { code: 'ur', name: 'Urdu', pathPrefix: '/ur' },
  { code: 'ar', name: 'Arabic', pathPrefix: '/ar' },
  { code: 'zh', name: 'Chinese', pathPrefix: '/zh' },
  { code: 'fr', name: 'French', pathPrefix: '/fr' },
  { code: 'es', name: 'Spanish', pathPrefix: '/es' },
  { code: 'de', name: 'German', pathPrefix: '/de' },
];

/**
 * Generate canonical URL for a page
 * @param path - The path for the page (e.g., '/explore/themes/love')
 * @param language - The language code (optional)
 * @returns The full canonical URL
 */
export function generateCanonicalUrl(path: string = '', language?: string): string {
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Get language prefix
  const languagePrefix = language && language !== 'en' ? `/${language}` : '';
  
  // Remove trailing slash for root path
  if (normalizedPath === '/') {
    return `${BASE_URL}${languagePrefix}` || BASE_URL;
  }
  
  // Remove trailing slash for other paths
  return `${BASE_URL}${languagePrefix}${normalizedPath.replace(/\/$/, '')}`;
}

/**
 * Generate metadata with canonical URL
 * @param metadata - The base metadata object
 * @param path - The path for the page
 * @returns Metadata object with canonical URL
 */
export function generateMetadataWithCanonical(
  metadata: Omit<Metadata, 'alternates'>,
  path: string = ''
): Metadata {
  return {
    ...metadata,
    alternates: {
      canonical: generateCanonicalUrl(path)
    }
  };
}

/**
 * Generate hreflang tags for internationalization
 * @param path - The path for the page
 * @param currentLanguage - The current language code
 * @returns Object with hreflang information
 */
export function generateHreflang(path: string = '', currentLanguage: string = 'en'): Record<string, string> {
  const hreflangs: Record<string, string> = {};
  
  // Add x-default for English
  hreflangs['x-default'] = generateCanonicalUrl(path, 'en');
  
  // Add all supported languages
  SUPPORTED_LANGUAGES.forEach(({ code, pathPrefix }) => {
    const languagePath = code === 'en' ? path : `/${code}${path}`;
    hreflangs[code] = generateCanonicalUrl(path, code);
  });

  return hreflangs;
}

/**
 * Generate metadata with hreflang tags
 * @param metadata - The base metadata object
 * @param path - The path for the page
 * @param currentLanguage - The current language code
 * @returns Metadata object with hreflang tags
 */
export function generateMetadataWithHreflang(
  metadata: Omit<Metadata, 'alternates'>,
  path: string = '',
  currentLanguage: string = 'en'
): Metadata {
  return {
    ...metadata,
    alternates: {
      canonical: generateCanonicalUrl(path, currentLanguage),
      languages: generateHreflang(path, currentLanguage)
    }
  };
}