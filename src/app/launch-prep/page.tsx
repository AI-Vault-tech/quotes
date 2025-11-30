import PerformanceOptimization from '@/components/PerformanceOptimization';
import TestingApproach from '@/components/TestingApproach';
import LaunchChecklist from '@/components/LaunchChecklist';

export default function LaunchPreparationPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="heading-text text-4xl md:text-5xl mb-6 text-accent">Launch Preparation</h1>
          <p className="text-xl max-w-3xl mx-auto text-foreground/80">
            Final steps to ensure Veritas is ready for the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <PerformanceOptimization />
          <TestingApproach />
        </div>
        
        <div className="mb-12">
          <LaunchChecklist />
        </div>
        
        <div className="bg-gradient-to-r from-foreground to-foreground/90 text-background p-8 rounded-xl">
          <h2 className="heading-text text-2xl mb-4">Launch Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-foreground/90 p-5 rounded-lg">
              <h3 className="font-bold text-2xl mb-2">10,000+</h3>
              <p>Daily Active Users</p>
            </div>
            <div className="bg-foreground/90 p-5 rounded-lg">
              <h3 className="font-bold text-2xl mb-2">5+</h3>
              <p>Minutes Average Session</p>
            </div>
            <div className="bg-foreground/90 p-5 rounded-lg">
              <h3 className="font-bold text-2xl mb-2">4.8+</h3>
              <p>Star Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}