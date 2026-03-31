import NavigationV2 from '@/components/landing-v2/NavigationV2';
import HeroSectionV2 from '@/components/landing-v2/HeroSectionV2';
import ContextAndStrategyV2 from '@/components/landing-v2/ContextAndStrategyV2';
import DemonstrationV2 from '@/components/landing-v2/DemonstrationV2';
import AcquisitionSystemV2 from '@/components/landing-v2/AcquisitionSystemV2';
import ClosingV2 from '@/components/landing-v2/ClosingV2';

const IndexV2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationV2 />
      <HeroSectionV2 />
      <ContextAndStrategyV2 />
      <DemonstrationV2 />
      <AcquisitionSystemV2 />
      <ClosingV2 />
    </div>
  );
};

export default IndexV2;
