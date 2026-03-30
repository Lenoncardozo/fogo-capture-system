import Navigation from '@/components/landing/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import ContextSection from '@/components/landing/ContextSection';
import ScenarioStrategy from '@/components/landing/ScenarioStrategy';
import DeliverySection from '@/components/landing/DeliverySection';
import TrafficSpanish from '@/components/landing/TrafficSpanish';
import ContentStructure from '@/components/landing/ContentStructure';
import MetricsGrowthClosing from '@/components/landing/MetricsGrowthClosing';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ContextSection />
      <ScenarioStrategy />
      <DeliverySection />
      <TrafficSpanish />
      <ContentStructure />
      <MetricsGrowthClosing />
    </div>
  );
};

export default Index;
