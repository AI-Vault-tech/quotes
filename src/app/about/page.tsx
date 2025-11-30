import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-text text-4xl md:text-5xl text-center mb-6 text-accent">About Veritas</h1>
          <p className="text-xl text-center text-foreground/80 mb-12">
            Where Wisdom Finds Its Voice
          </p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <p className="text-2xl mb-8">
              Veritas is not just another quote website, but a sanctuary for wisdom, 
              a digital library of human thought, and an interactive experience that 
              makes timeless wisdom accessible, beautiful, and personally transformative.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">Our Mission</h2>
            <p className="mb-6">
              We believe that wisdom is humanity's greatest treasure, accumulated over 
              5,000 years of human history. Our mission is to curate the most profound 
              thoughts across civilizations and make them accessible to everyone, everywhere.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                <h3 className="font-bold text-lg mb-3">Academic Rigor</h3>
                <p>
                  Every quote is verified with primary sources. We ensure accuracy and 
                  provide historical context for each piece of wisdom.
                </p>
              </div>
              
              <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                <h3 className="font-bold text-lg mb-3">Personal Transformation</h3>
                <p>
                  We go beyond simple collections to create meaningful learning journeys 
                  that connect wisdom to your personal growth.
                </p>
              </div>
              
              <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                <h3 className="font-bold text-lg mb-3">Beautiful Design</h3>
                <p>
                  Our interface is crafted to reflect the beauty of wisdom itself, 
                  creating an immersive experience that honors the profundity of human thought.
                </p>
              </div>
              
              <div className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                <h3 className="font-bold text-lg mb-3">Living Library</h3>
                <p>
                  Veritas is a growing collection that evolves with new insights, 
                  contemporary voices, and community contributions.
                </p>
              </div>
            </div>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">Our Core Values</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Truth:</strong> Commitment to accuracy and authenticity in all content</li>
              <li><strong>Inclusivity:</strong> Representation of diverse voices across cultures and eras</li>
              <li><strong>Accessibility:</strong> Making profound wisdom understandable to all</li>
              <li><strong>Beauty:</strong> Creating visually stunning experiences that honor wisdom</li>
              <li><strong>Transformation:</strong> Fostering personal growth through engagement with ideas</li>
            </ul>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">Our Team</h2>
            <p className="mb-6">
              Veritas is built by a passionate team of philosophers, educators, designers, and developers 
              who share a deep appreciation for human wisdom and a commitment to making it accessible 
              to people around the world.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">Partnerships</h2>
            <p className="mb-6">
              We collaborate with universities, libraries, museums, and cultural institutions to ensure 
              the highest quality content and to preserve and share humanity's intellectual heritage.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">Sustainability</h2>
            <p className="mb-6">
              Veritas is committed to sustainable practices in our digital operations and supports 
              initiatives that promote environmental consciousness and social responsibility.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">Join Our Community</h2>
            <p className="mb-6">
              Veritas thrives because of our community of wisdom seekers. Whether you're 
              a student, educator, philosopher, or simply someone curious about life's 
              big questions, we invite you to join us in exploring the depths of human wisdom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/terms" className="bg-cream/10 p-6 rounded-xl border border-cream/20 text-center hover:bg-cream/20 transition-all">
              <h3 className="font-bold text-lg mb-2 text-accent">Terms of Service</h3>
              <p className="text-sm">Our user agreement and service policies</p>
            </Link>
            
            <Link href="/privacy" className="bg-cream/10 p-6 rounded-xl border border-cream/20 text-center hover:bg-cream/20 transition-all">
              <h3 className="font-bold text-lg mb-2 text-accent">Privacy Policy</h3>
              <p className="text-sm">How we protect your personal information</p>
            </Link>
            
            <Link href="/contact" className="bg-cream/10 p-6 rounded-xl border border-cream/20 text-center hover:bg-cream/20 transition-all">
              <h3 className="font-bold text-lg mb-2 text-accent">Contact Us</h3>
              <p className="text-sm">Get in touch with our team</p>
            </Link>
          </div>
          
          <div className="text-center">
            <Link href="/" className="inline-block bg-accent text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
              Begin Your Wisdom Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}