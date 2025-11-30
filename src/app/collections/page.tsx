import CollectionCard from '@/components/CollectionCard';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Curated Collections</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Embark on structured journeys through wisdom traditions. Our curated collections offer 
            guided explorations of philosophical schools, historical movements, and thematic insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CollectionCard
            id="stoic-path"
            title="The Stoic Path"
            description="30-day meditation series"
            authors={["Marcus Aurelius", "Epictetus", "Seneca"]}
            modules={30}
            participants={2450}
            isPopular={true}
            variant="featured"
          />
          
          <CollectionCard
            id="feminist-wisdom"
            title="Feminist Wisdom Through Ages"
            description="Historical to contemporary voices"
            authors={["Mary Wollstonecraft", "Simone de Beauvoir", "bell hooks"]}
            modules={15}
            participants={850}
            isNew={true}
          />
          
          <CollectionCard
            id="eastern-western"
            title="Eastern Philosophy for Western Minds"
            description="Bridging Eastern and Western philosophical traditions"
            authors={["Buddhism", "Taoism", "Confucianism"]}
            modules={12}
            participants={1920}
          />
          
          <CollectionCard
            id="revolutionary-thoughts"
            title="Revolutionary Thoughts"
            description="Quotes that changed history"
            authors={["Political Philosophy", "Scientific Revolution", "Social Justice"]}
            modules={25}
            participants={1670}
          />
          
          <CollectionCard
            id="scientific-poetry"
            title="Scientific Poetry"
            description="Beautiful scientific insights that reveal the poetry in nature"
            authors={["Carl Sagan", "Richard Feynman", "Neil deGrasse Tyson"]}
            modules={18}
            participants={1340}
          />
          
          <CollectionCard
            id="unsung-voices"
            title="Unsung Voices"
            description="Recovery of lost wisdom from underrepresented thinkers"
            authors={["Indigenous Wisdom", "African Philosophy", "Lost Texts"]}
            modules={42}
            participants={980}
            variant="featured"
          />
        </div>
      </div>
    </div>
  );
}