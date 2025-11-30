import WisdomMatch from '@/components/WisdomMatch';
import ContextExplorer from '@/components/ContextExplorer';
import QuoteAnatomy from '@/components/QuoteAnatomy';
import WisdomPodcast from '@/components/WisdomPodcast';

export default function PremiumFeaturesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Premium Features</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Unlock deeper insights with our advanced tools designed to enhance your wisdom journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <WisdomMatch />
          <ContextExplorer />
        </div>
        
        <div className="mb-12">
          <QuoteAnatomy />
        </div>
        
        <div>
          <WisdomPodcast />
        </div>
      </div>
    </div>
  );
}