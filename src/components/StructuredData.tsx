// src/components/StructuredData.tsx
import Script from 'next/script';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'CollectionPage' | 'ItemList' | 'Person' | 'SearchResultsPage' | 'HowTo' | 'Course' | 'Book' | 'Review' | 'AggregateRating' | 'SitelinksSearchBox';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <Script
      id={`structured-data-${type}-${Math.random().toString(36).substr(2, 9)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

// Predefined structured data for common pages

export function WebsiteStructuredData() {
  const data = {
    name: "Veritas - Where Wisdom Finds Its Voice",
    url: "https://veritas.example.com", // Update with your actual domain
    description: "Discover 11,000+ timeless quotes from history's greatest minds. Explore wisdom on love, success, courage, hope, and more.",
    publisher: {
      '@type': 'Organization',
      name: 'Veritas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://veritas.example.com/logo.png' // Update with your actual logo
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://veritas.example.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return <StructuredData type="WebSite" data={data} />;
}

export function OrganizationStructuredData() {
  const data = {
    '@type': 'Organization',
    name: "Veritas",
    url: "https://veritas.example.com", // Update with your actual domain
    logo: {
      '@type': 'ImageObject',
      url: 'https://veritas.example.com/logo.png', // Update with your actual logo
      width: 600,
      height: 60
    },
    sameAs: [
      "https://twitter.com/veritas_wisdom", // Update with your actual social media
      "https://facebook.com/veritas",
      "https://instagram.com/veritas",
      "https://linkedin.com/company/veritas",
      "https://youtube.com/veritas"
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-800-VERITAS',
        contactType: 'Customer Service',
        email: 'support@veritas.example.com'
      }
    ]
  };

  return <StructuredData type="Organization" data={data} />;
}

export function BreadcrumbStructuredData({ breadcrumbs }: { breadcrumbs: { name: string; url: string }[] }) {
  const data = {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url
    }))
  };

  return <StructuredData type="BreadcrumbList" data={data} />;
}

export function FAQStructuredData({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <StructuredData type="FAQPage" data={data} />;
}

export function ArticleStructuredData({ article }: { article: { headline: string; description: string; author: string; datePublished: string; image: string; publisher?: any } }) {
  const data = {
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    image: article.image,
    publisher: article.publisher || {
      '@type': 'Organization',
      name: 'Veritas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://veritas.example.com/logo.png'
      }
    }
  };

  return <StructuredData type="Article" data={data} />;
}

export function CollectionStructuredData({ collection }: { collection: { name: string; description: string; url: string; itemCount: number } }) {
  const data = {
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url: collection.url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: collection.itemCount,
      itemListElement: []
    }
  };

  return <StructuredData type="CollectionPage" data={data} />;
}

export function SitelinksSearchBoxStructuredData() {
  const data = {
    '@type': 'WebSite',
    url: 'https://veritas.example.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://veritas.example.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return <StructuredData type="SitelinksSearchBox" data={data} />;
}