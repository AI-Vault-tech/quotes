'use client';

import Link from 'next/link';

export default function UniqueThematicCollections() {
  const collections = [
    {
      title: "Stoic Resilience",
      description: "Master your emotions and find peace in uncertainty with timeless Stoic wisdom.",
      quoteCount: 1247,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      title: "Existential Insights",
      description: "Confront life's fundamental questions about meaning, freedom, and authenticity.",
      quoteCount: 982,
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Eastern Philosophy",
      description: "Discover profound wisdom from Buddhist, Taoist, and Hindu traditions.",
      quoteCount: 1534,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      title: "Modern Mindfulness",
      description: "Bridge ancient wisdom with contemporary practices for mental well-being.",
      quoteCount: 765,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-text text-3xl md:text-4xl text-gray-900 mb-4 dark:text-gray-50">
            Curated Wisdom Collections
          </h2>
          <p className="body-text text-xl text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
            Explore our thoughtfully organized collections that connect philosophical insights across time and cultures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link 
              key={index}
              href={`/collections/${collection.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`block bg-gradient-to-br ${collection.color} border ${collection.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 dark:border-gray-700`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="heading-text text-xl text-gray-900 dark:text-gray-50">{collection.title}</h3>
                <div className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  {collection.quoteCount} quotes
                </div>
              </div>
              <p className="body-text text-gray-700 mb-4 dark:text-gray-300">
                {collection.description}
              </p>
              <div className="flex items-center text-amber-700 font-medium dark:text-amber-500">
                <span>Explore Collection</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/thematic-collections"
            className="inline-flex items-center px-6 py-3 bg-amber-900 text-white rounded-full font-medium hover:bg-amber-800 transition-colors dark:bg-amber-700 dark:hover:bg-amber-600"
          >
            View All Collections
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}