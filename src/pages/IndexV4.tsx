import NavigationV4 from '@/components/landing-v4/NavigationV4';
import HeroSectionV4 from '@/components/landing-v4/HeroSectionV4';
import ContextAndStrategyV4 from '@/components/landing-v4/ContextAndStrategyV4';
import DeliveryV4 from '@/components/landing-v4/DeliveryV4';
import AcquisitionContentV4 from '@/components/landing-v4/AcquisitionContentV4';
import OperationsMetricsV4 from '@/components/landing-v4/OperationsMetricsV4';
import ClosingV4 from '@/components/landing-v4/ClosingV4';

const IndexV4 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationV4 />
      <HeroSectionV4 />
      <ContextAndStrategyV4 />
      <DeliveryV4 />
      <AcquisitionContentV4 />
      <OperationsMetricsV4 />
      <ClosingV4 />
    </div>
  );
};

export default IndexV4;
