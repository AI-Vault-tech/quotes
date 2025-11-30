// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'ur', 'ar', 'zh', 'fr', 'es', 'de'];

// Default language
const DEFAULT_LANGUAGE = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname starts with a language code
  const pathnameParts = pathname.split('/');
  const maybeLanguage = pathnameParts[1];
  
  let language = DEFAULT_LANGUAGE;
  
  // If the first part is a supported language, use it
  if (SUPPORTED_LANGUAGES.includes(maybeLanguage)) {
    language = maybeLanguage;
  } else {
    // If no language is specified, try to detect from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    
    if (acceptLanguage) {
      const languages = acceptLanguage.split(',').map(lang => {
        const [languageCode] = lang.trim().split(';');
        return languageCode.split('-')[0]; // Get base language code (e.g., 'en' from 'en-US')
      });
      
      // Find the first supported language
      language = languages.find(lang => SUPPORTED_LANGUAGES.includes(lang)) || DEFAULT_LANGUAGE;
    }
  }
  
  // Add the language to the request headers
  const response = NextResponse.next();
  response.headers.set('x-language', language);
  
  return response;
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};