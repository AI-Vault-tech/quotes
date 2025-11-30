import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-text text-4xl md:text-5xl text-center mb-6 text-accent">Privacy Policy</h1>
          <p className="text-xl text-center text-foreground/80 mb-12">
            Last Updated: November 30, 2025
          </p>
          
          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <p className="text-lg mb-8">
              At Veritas, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our service.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">1. Information We Collect</h2>
            <h3 className="font-bold text-lg mb-2">Information You Provide</h3>
            <p className="mb-4">
              We may collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Account registration information (name, email address)</li>
              <li>User preferences and settings</li>
              <li>Content you create or share</li>
              <li>Feedback and correspondence</li>
            </ul>
            
            <h3 className="font-bold text-lg mb-2">Automatically Collected Information</h3>
            <p className="mb-4">
              When you access or use our service, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Log information (IP address, browser type, access times)</li>
              <li>Device information (device type, operating system)</li>
              <li>Usage data (pages viewed, features used)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our service</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our service</li>
              <li>Respond to your requests and inquiries</li>
              <li>Monitor and analyze usage trends</li>
              <li>Protect the security and integrity of our service</li>
            </ul>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
              <li>With service providers who assist us in operating our service</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">5. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to provide our service and fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to erase your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">7. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns. 
              You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">8. Children's Privacy</h2>
            <p className="mb-4">
              Our service is not intended for individuals under the age of 13. We do not knowingly collect personal information 
              from children under 13. If we become aware that we have collected personal information from a child under 13, 
              we will take steps to delete such information.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">9. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and maintained on computers located outside of your state, province, 
              country or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">10. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="heading-text text-2xl mb-4 text-accent">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@veritas.example.com<br />
              Address: Veritas Privacy Department, 123 Wisdom Way, Knowledge City, KC 12345
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