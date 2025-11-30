import Link from 'next/link';

export default function SentinelsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/explore" className="text-accent hover:underline">&larr; Back to Explore</Link>
        </div>
        
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">For Sentinels</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Discover wisdom that resonates with responsible protectors, detail-oriented organizers, and reliable guardians. 
            Explore philosophical insights that complement your practical nature and commitment to stability and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ISTJ - The Logistician</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Reliable Responsibility</h3>
                  <p className="text-foreground/80 mb-4">Duty and commitment</p>
                  <p className="mb-4">"The best preparation for tomorrow is doing your best today."</p>
                  <Link href="/wisdom/istj-reliability" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Fact-Based Decision Making</h3>
                  <p className="text-foreground/80 mb-4">Objective analysis</p>
                  <p className="mb-4">"Facts are stubborn things."</p>
                  <Link href="/wisdom/istj-facts" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ISFJ - The Protector</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Compassionate Service</h3>
                  <p className="text-foreground/80 mb-4">Caring for others</p>
                  <p className="mb-4">"No one has ever become poor by giving."</p>
                  <Link href="/wisdom/isfj-service" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Loyal Dedication</h3>
                  <p className="text-foreground/80 mb-4">Faithful commitment</p>
                  <p className="mb-4">"Loyalty and devotion lead to bravery. Bravery leads to the rainbow."</p>
                  <Link href="/wisdom/isfj-loyalty" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 mb-8">
              <h2 className="heading-text text-2xl mb-6 text-accent">ESTJ - The Executive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Efficient Organization</h3>
                  <p className="text-foreground/80 mb-4">Systematic management</p>
                  <p className="mb-4">"Organization is what you do before you do something, so that when you do it, it is not all mixed up."</p>
                  <Link href="/wisdom/estj-organization" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Decisive Leadership</h3>
                  <p className="text-foreground/80 mb-4">Clear direction</p>
                  <p className="mb-4">"In any moment of decision, the best thing you can do is the right thing."</p>
                  <Link href="/wisdom/estj-decision" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-cream/10 p-8 rounded-xl border border-cream/20">
              <h2 className="heading-text text-2xl mb-6 text-accent">ESFJ - The Consul</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Harmonious Coordination</h3>
                  <p className="text-foreground/80 mb-4">Social harmony</p>
                  <p className="mb-4">"Alone we can do so little; together we can do so much."</p>
                  <Link href="/wisdom/esfj-harmony" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
                
                <div className="bg-background p-6 rounded-lg border border-cream/30">
                  <h3 className="font-bold text-lg mb-2">Supportive Care</h3>
                  <p className="text-foreground/80 mb-4">Nurturing others</p>
                  <p className="mb-4">"We make a living by what we get, but we make a life by what we give."</p>
                  <Link href="/wisdom/esfj-care" className="text-accent hover:underline">Explore Wisdom →</Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20 mb-8">
              <h3 className="heading-text text-xl mb-4 text-accent">Sentinel Wisdom</h3>
              <div className="aspect-video bg-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/50">Stability Principles</span>
              </div>
              <p className="text-foreground/80">
                Explore how different stability principles and traditional wisdom connect with sentinel personality types.
              </p>
            </div>
            
            <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
              <h3 className="heading-text text-xl mb-4 text-accent">Reflection Questions</h3>
              <ul className="text-foreground/80 list-disc pl-5 space-y-2">
                <li>How can philosophical wisdom enhance your ability to create stability and order?</li>
                <li>What traditional values are most important to you in your personal and professional life?</li>
                <li>How can you balance your commitment to others with self-care?</li>
                <li>What role does practical wisdom play in your decision-making process?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}