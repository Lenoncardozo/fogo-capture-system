import { useEffect } from 'react';
import NavigationEs from '@/components/landing-es/NavigationEs';
import HeroSectionEs from '@/components/landing-es/HeroSectionEs';
import ContextAndStrategyEs from '@/components/landing-es/ContextAndStrategyEs';
import DeliveryEs from '@/components/landing-es/DeliveryEs';
import AcquisitionContentEs from '@/components/landing-es/AcquisitionContentEs';
import OperationsMetricsEs from '@/components/landing-es/OperationsMetricsEs';
import ClosingEs from '@/components/landing-es/ClosingEs';

const IndexEs = () => {
  useEffect(() => {
    const prevLang = document.documentElement.lang;
    const prevTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription?.getAttribute('content');

    document.documentElement.lang = 'es';
    document.title = 'Propuesta Estratégica de Marketing | Fogo Canasvieiras';
    metaDescription?.setAttribute(
      'content',
      'Propuesta estratégica de marketing para Fogo en Canasvieiras, enfocada en captación turística, base propia, contenido y conversión.'
    );

    return () => {
      document.documentElement.lang = prevLang || 'pt-BR';
      document.title = prevTitle;
      if (metaDescription && prevDescription) {
        metaDescription.setAttribute('content', prevDescription);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationEs />
      <HeroSectionEs />
      <ContextAndStrategyEs />
      <DeliveryEs />
      <AcquisitionContentEs />
      <OperationsMetricsEs />
      <ClosingEs />
    </div>
  );
};

export default IndexEs;
