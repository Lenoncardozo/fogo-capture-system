import NavigationV2 from '@/components/landing-v2/NavigationV2';
import HeroSection from '@/components/landing/HeroSection';
import ContextAndStrategyV2 from '@/components/landing-v2/ContextAndStrategyV2';
import DeliveryHybridV3 from '@/components/landing-v3/DeliveryHybridV3';
import AcquisitionContentV3 from '@/components/landing-v3/AcquisitionContentV3';
import OperationsMetricsV3 from '@/components/landing-v3/OperationsMetricsV3';
import ClosingV3 from '@/components/landing-v3/ClosingV3';

const IndexV3 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationV2 />
      <HeroSection />
      <ContextAndStrategyV2 />
      <DeliveryHybridV3 />
      <AcquisitionContentV3 />
      <OperationsMetricsV3 />
      <ClosingV3 />
    </div>
  );
};

export default IndexV3;
