import Link from 'next/link';
import type { Metadata } from 'next';
import { BreadcrumbStructuredData, ArticleStructuredData } from '@/components/StructuredData';
import InteractiveQuoteFeatures from '@/components/InteractiveQuoteFeatures';

export const metadata: Metadata = {
  title: "You have power over your mind - Marcus Aurelius | Veritas",
  description: "Explore the profound wisdom of Marcus Aurelius on inner strength and mental resilience. Understand the Stoic principle of controlling your mind rather than external events. Apply this ancient wisdom to your modern life today!",
  keywords: [
    "Marcus Aurelius", "Stoic philosophy", "inner strength", "mental resilience", 
    "control your mind", "external events", "Stoicism", "Meditations"
  ],
  openGraph: {
    title: "You have power over your mind - Marcus Aurelius | Veritas",
    description: "Explore the profound wisdom of Marcus Aurelius on inner strength and mental resilience from his Meditations.",
    url: "https://veritas.example.com/quotes/marcus-aurelius-you-have-power-over-your-mind", // Update with your actual domain
    siteName: "Veritas",
    images: [
      {
        url: "/og-quote-marcus-aurelius.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "You have power over your mind - Marcus Aurelius"
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "You have power over your mind - Marcus Aurelius | Veritas",
    description: "Explore the profound wisdom of Marcus Aurelius on inner strength and mental resilience.",
    images: ["/twitter-quote-marcus-aurelius.png"], // You'll need to add this image
  },
};

export default function QuotePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://veritas.example.com/" },
    { name: "Quotes", url: "https://veritas.example.com/quotes" },
    { name: "Marcus Aurelius - You have power over your mind", url: "https://veritas.example.com/quotes/marcus-aurelius-you-have-power-over-your-mind" }
  ];
  
  const articleData = {
    headline: "You have power over your mind - Marcus Aurelius",
    description: "Explore the profound wisdom of Marcus Aurelius on inner strength and mental resilience. Understand the Stoic principle of controlling your mind rather than external events.",
    author: "Marcus Aurelius",
    datePublished: "2025-11-30", // Update with actual publication date
    image: "/og-quote-marcus-aurelius.png" // Update with actual image
  };
  
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <BreadcrumbStructuredData breadcrumbs={breadcrumbs} />
        <ArticleStructuredData article={articleData} />
        <div className="mb-8">
          <Link href="/" className="text-accent hover:underline">&larr; Back to Home</Link>
        </div>
        
        {/* Hero Section with Background */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 to-foreground"></div>
          <div className="relative z-10 p-12 text-center">
            <h1 className="quote-text text-3xl md:text-4xl lg:text-5xl text-background mb-8 max-w-4xl mx-auto">
              "You have power over your mind—not outside events. Realize this, and you will find strength."
            </h1>
            <div className="text-background/90 text-xl">
              <p>— Marcus Aurelius</p>
              <p className="text-lg">Meditations, Book 4</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Context & Meaning */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Context & Meaning</h2>
              
              <div className="prose max-w-none text-foreground/80 mb-6">
                <p className="mb-4">
                  This quote from Marcus Aurelius's "Meditations" encapsulates a fundamental principle of Stoic philosophy: 
                  the distinction between what is within our control and what is not. Written during his military campaigns, 
                  likely while facing the stresses of leadership and warfare, this reflection reveals the practical application 
                  of Stoic principles to real-world challenges.
                </p>
                
                <h3 className="font-bold text-lg mb-3">Historical Background</h3>
                <p className="mb-4">
                  Marcus Aurelius wrote "Meditations" as a personal journal during his campaigns along the Danube River 
                  between 170-180 CE. These writings were never intended for publication but served as private reminders 
                  of Stoic principles to guide his actions as emperor and general.
                </p>
                
                <h3 className="font-bold text-lg mb-3">Philosophical Context</h3>
                <p className="mb-4">
                  This concept reflects the Stoic principle of the "dichotomy of control," which teaches that our emotions 
                  and reactions are within our control, while external events are not. This idea would later influence 
                  modern psychotherapy, particularly Cognitive Behavioral Therapy (CBT).
                </p>
                
                <h3 className="font-bold text-lg mb-3">Modern Interpretation</h3>
                <p>
                  In today's context, this wisdom encourages resilience in the face of uncertainty. By focusing on our 
                  responses rather than uncontrollable circumstances, we can maintain mental clarity and emotional stability 
                  even during challenging times.
                </p>
              </div>
            </div>
            
            {/* Deeper Exploration */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Deeper Exploration</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold mb-3">Philosophical School</h3>
                  <p className="text-accent">Stoicism</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold mb-3">Key Concepts</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Inner Control</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Resilience</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Acceptance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-cream/30">
                <h3 className="font-bold mb-3">Related Ideas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Amor Fati</span>
                  <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Virtue Ethics</span>
                  <span className="px-3 py-1 bg-cream/30 rounded-full text-sm">Emotional Regulation</span>
                </div>
              </div>
            </div>
            
            {/* Source Material */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">Source Material</h2>
              
              <div className="bg-background p-6 rounded-lg border border-cream/30 mb-6">
                <h3 className="font-bold mb-3">Original Work</h3>
                <p className="text-foreground/80 mb-2">Meditations by Marcus Aurelius</p>
                <p className="text-sm text-foreground/70">Book 4, Section 42 (Translation varies by edition)</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-cream/30 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Full Text Access</h3>
                  <button className="text-accent hover:underline">Read Complete Book</button>
                </div>
                <p className="text-foreground/80">
                  "Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, 
                  insolence, disloyalty, ill-will, and selfishness—all of them due to the offenders' ignorance 
                  of what is good or evil."
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-cream/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">Translation Notes</h3>
                  <button className="text-accent hover:underline">
                    Show Variations
                  </button>
                </div>
                <p className="text-sm text-foreground/70">
                  Multiple translations available. Click above to view variations.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Interactive Features - Client Component */}
            <InteractiveQuoteFeatures />
            
            {/* Discussion */}
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Community Discussion</h3>
              
              <div className="space-y-4 mb-4">
                <div className="bg-background p-4 rounded-lg border border-cream/30">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/10 mr-2"></div>
                    <div>
                      <p className="font-medium">Alexandra R.</p>
                      <p className="text-xs text-foreground/70">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    This quote got me through my divorce. Realizing I couldn't control the situation 
                    but could control my response gave me incredible peace.
                  </p>
                </div>
                
                <div className="bg-background p-4 rounded-lg border border-cream/30">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/10 mr-2"></div>
                    <div>
                      <p className="font-medium">Marcus T.</p>
                      <p className="text-xs text-foreground/70">1 day ago</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    As a manager, this reminds me to focus on my team's growth rather than 
                    quarterly numbers I can't directly influence.
                  </p>
                </div>
              </div>
              
              <button className="w-full py-2 bg-cream/30 rounded-lg text-sm hover:bg-cream/40 transition-colors">
                Join the Discussion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}