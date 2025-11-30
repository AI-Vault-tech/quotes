import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Veritas?",
      answer: "Veritas is a digital sanctuary for accessing 5,000 years of human philosophical thought, wisdom, and quotes. Our platform curates profound insights from philosophers, thinkers, and wisdom traditions across cultures and eras, making timeless wisdom accessible, beautiful, and personally transformative."
    },
    {
      question: "Is all content on Veritas free?",
      answer: "Yes, the majority of our content is completely free to access. We believe wisdom should be available to everyone regardless of their economic situation. We may offer premium features in the future to support our operations, but core content will always remain free."
    },
    {
      question: "How do you verify the accuracy of quotes?",
      answer: "We maintain rigorous academic standards. Every quote is verified against primary sources including original texts, scholarly translations, and reputable academic publications. Our editorial team includes philosophers and historians who ensure the authenticity and proper attribution of all content."
    },
    {
      question: "Can I contribute content to Veritas?",
      answer: "We welcome community contributions! If you have insights, translations, or commentary you'd like to share, please contact us through our submission portal. All contributions are reviewed by our editorial team to maintain our standards of quality and accuracy."
    },
    {
      question: "How often is new content added?",
      answer: "We add new quotes, collections, and features regularly. Our team continuously researches and curates content, with new additions typically published weekly. Major thematic collections and author spotlights are added monthly."
    },
    {
      question: "Do you have an app?",
      answer: "Currently, Veritas is accessible through any modern web browser on desktop and mobile devices. We're exploring native mobile applications for iOS and Android, with plans to release them in the coming year."
    },
    {
      question: "How can I save my favorite quotes?",
      answer: "Registered users can create a personal sanctuary to save, organize, and annotate their favorite quotes. Simply create an account and use the bookmarking features throughout the site to build your personalized collection of wisdom."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We take data privacy seriously and adhere to strict security protocols. Please review our Privacy Policy for detailed information about how we collect, use, and protect your personal information."
    },
    {
      question: "Can I use Veritas content for educational purposes?",
      answer: "Yes, our content is designed to support education and personal growth. For academic use, please cite Veritas as the source. For commercial educational use, please contact us for licensing information."
    },
    {
      question: "How can I support Veritas?",
      answer: "You can support us by sharing our platform with others, contributing content, providing feedback, or considering a donation to help sustain our operations. We're also grateful for partnerships with educational institutions and cultural organizations."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-text text-4xl md:text-5xl text-center mb-6 text-accent">Frequently Asked Questions</h1>
          <p className="text-xl text-center text-foreground/80 mb-12">
            Everything you need to know about Veritas
          </p>
          
          <div className="space-y-6 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-cream/10 p-6 rounded-xl border border-cream/20">
                <h3 className="heading-text text-xl mb-3 text-accent">{faq.question}</h3>
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-cream/10 p-8 rounded-xl border border-cream/20 text-center">
            <h2 className="heading-text text-2xl mb-4 text-accent">Still Have Questions?</h2>
            <p className="text-foreground/80 mb-6">
              If you can't find the answer you're looking for, please reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-block bg-accent text-background px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
                Contact Support
              </Link>
              <Link href="/about" className="inline-block bg-foreground/10 text-foreground px-6 py-3 rounded-full font-medium hover:bg-foreground/20 transition-all">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}