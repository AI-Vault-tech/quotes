import Link from 'next/link';
import DynamicQuoteSection from '@/components/DynamicQuoteSection';

export default function BuddhismPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Buddhism</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover the path to enlightenment and liberation from suffering. 
            Explore the profound wisdom of Buddhist teachings on mindfulness, compassion, and the nature of reality.
          </p>
        </div>

        {/* Introduction to Buddhism */}
        <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-12">
          <h2 className="heading-text text-2xl mb-4 text-accent">Understanding Buddhism</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-foreground/80 mb-4">
                Buddhism, founded by Siddhartha Gautama (the Buddha) in the 5th century BCE, is a spiritual tradition 
                focused on personal spiritual development and the attainment of a deep insight into the true nature of life.
              </p>
              <p className="text-foreground/80 mb-4">
                Central to Buddhist philosophy is the understanding that life is marked by suffering (dukkha), which arises 
                from attachment and craving. The path to liberation involves cultivating wisdom, ethical conduct, and mental discipline.
              </p>
            </div>
            <div>
              <p className="text-foreground/80 mb-4">
                Through practices such as meditation, mindful awareness, and compassion, Buddhists seek to develop 
                insight into the impermanent nature of existence and ultimately achieve enlightenment (nirvana) — 
                a state of complete freedom from suffering and the cycle of rebirth.
              </p>
              <p className="text-foreground/80">
                Buddhist teachings emphasize the interconnectedness of all beings and the cultivation of loving-kindness 
                (metta) toward all living creatures as a path to inner peace and harmony.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Core Buddhist Teachings */}
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">Core Teachings</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="heading-text text-xl mb-3 text-foreground">The Four Noble Truths</h3>
                  <p className="text-foreground/80 mb-4">
                    The foundation of Buddhist philosophy, these truths diagnose the problem of suffering and prescribe its cure:
                  </p>
                  <ol className="list-decimal pl-5 text-foreground/80 space-y-2">
                    <li>The truth of suffering (Dukkha) - Life inherently contains suffering</li>
                    <li>The truth of the cause of suffering (Samudaya) - Suffering arises from attachment and craving</li>
                    <li>The truth of the end of suffering (Nirodha) - Suffering can be overcome</li>
                    <li>The truth of the path to the end of suffering (Magga) - The Eightfold Path leads to liberation</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="heading-text text-xl mb-3 text-foreground">The Noble Eightfold Path</h3>
                  <p className="text-foreground/80 mb-4">
                    The practical guide to ethical and mental development with the goal of freeing individuals from attachments and delusions:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background p-4 rounded-lg border border-cream/30">
                      <h4 className="font-bold mb-2">Wisdom</h4>
                      <ul className="text-sm text-foreground/80 space-y-1">
                        <li>Right Understanding</li>
                        <li>Right Intention</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-cream/30">
                      <h4 className="font-bold mb-2">Ethical Conduct</h4>
                      <ul className="text-sm text-foreground/80 space-y-1">
                        <li>Right Speech</li>
                        <li>Right Action</li>
                        <li>Right Livelihood</li>
                      </ul>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-cream/30">
                      <h4 className="font-bold mb-2">Mental Discipline</h4>
                      <ul className="text-sm text-foreground/80 space-y-1">
                        <li>Right Effort</li>
                        <li>Right Mindfulness</li>
                        <li>Right Concentration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Buddhist Quotes by Theme */}
            <DynamicQuoteSection 
              title="Foundational Teachings" 
              filterType="school" 
              filterValue="buddhism" 
              limit={100}
            />
            
            <DynamicQuoteSection 
              title="Impermanence and Change" 
              filterType="theme" 
              filterValue="impermanence" 
              limit={100}
            />
            
            <DynamicQuoteSection 
              title="Compassion and Loving-Kindness" 
              filterType="theme" 
              filterValue="compassion" 
              limit={100}
            />
            
            <DynamicQuoteSection 
              title="Wisdom and Understanding" 
              filterType="theme" 
              filterValue="wisdom" 
              limit={100}
            />
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Buddhist Concepts</h3>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-cream/30">
                  <h4 className="font-bold mb-2">Dharma Wheel</h4>
                  <p className="text-sm text-foreground/80">
                    The Dharmachakra represents the Buddha's teaching of the path to enlightenment and liberation from suffering.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-cream/30">
                  <h4 className="font-bold mb-2">Impermanence (Anicca)</h4>
                  <p className="text-sm text-foreground/80">
                    The understanding that all conditioned phenomena are inconstant, unsteady, and impermanent.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-cream/30">
                  <h4 className="font-bold mb-2">Non-Self (Anatta)</h4>
                  <p className="text-sm text-foreground/80">
                    The doctrine that there is no unchanging, permanent self, soul or essence in living beings.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-cream/30">
                  <h4 className="font-bold mb-2">Karma</h4>
                  <p className="text-sm text-foreground/80">
                    The law of cause and effect where intentional actions influence future experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How does the concept of impermanence affect how you view your life?</li>
                <li>What attachments cause you the most suffering?</li>
                <li>How can mindfulness help you live more fully in the present moment?</li>
                <li>What does compassion mean to you in your daily interactions?</li>
                <li>How can you cultivate loving-kindness toward yourself and others?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}