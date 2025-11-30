import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-text text-4xl md:text-5xl text-center mb-6 text-accent">Terms of Service</h1>
          <p className="text-xl text-center text-foreground/80 mb-12">
            Last Updated: November 30, 2025
          </p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <p className="text-lg mb-8">
              Welcome to Veritas. These Terms of Service ("Terms") govern your access to and use of our website and services. 
              By accessing or using Veritas, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using Veritas ("the Service"), you agree to comply with and be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access the Service.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">2. Description of Service</h2>
            <p className="mb-4">
              Veritas provides a digital sanctuary for accessing 5,000 years of human philosophical thought, wisdom, and quotes. 
              Our service includes curated content, thematic collections, author spotlights, and interactive features designed 
              to make timeless wisdom accessible and personally transformative.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">3. Intellectual Property</h2>
            <p className="mb-4">
              The content, organization, and presentation of Veritas, including but not limited to text, graphics, logos, 
              button icons, images, audio clips, digital downloads, data compilations, and software, are the property of 
              Veritas or its content suppliers and protected by international copyright, trademark, and other intellectual 
              property laws.
            </p>
            <p className="mb-4">
              Original content created by Veritas is licensed under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 
              International License, unless otherwise specified.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">4. User Responsibilities</h2>
            <p className="mb-4">
              When using Veritas, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the service for any unlawful purpose</li>
              <li>Interfere with or disrupt the service or servers</li>
            </ul>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">5. User Content</h2>
            <p className="mb-4">
              If you create an account and contribute content to Veritas, you retain ownership of your content but grant us 
              a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute 
              your content in connection with our service.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">6. Disclaimer of Warranties</h2>
            <p className="mb-4">
              Veritas is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, 
              including but not limited to implied warranties of merchantability, fitness for a particular purpose, 
              non-infringement, or course of performance.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">7. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Veritas, its directors, employees, partners, agents, suppliers, or affiliates, be liable 
              for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of 
              or inability to access or use the service.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">9. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">
              Email: legal@veritas.example.com<br />
              Address: Veritas Legal Department, 123 Wisdom Way, Knowledge City, KC 12345
            </p>
          </div>
          
          <div className="text-center">
            <Link href="/" className="inline-block bg-accent text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}