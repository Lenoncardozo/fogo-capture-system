import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImg from '@/assets/hero-fogo.jpg';

const EmberParticles = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: (i * 7.3) % 100,
    delay: (i % 5) * 0.45,
    duration: 4.5 + (i % 4) * 0.8,
    size: 2 + (i % 3),
    drift: -14 + (i % 6) * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: '-5%',
            width: particle.size,
            height: particle.size,
            background: 'radial-gradient(circle, hsl(var(--primary)), hsl(var(--ember)))',
          }}
          animate={{
            y: [0, -720],
            x: [0, particle.drift],
            opacity: [0, 0.7, 0.45, 0],
            scale: [0.6, 1, 0.35],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

const HeroSectionEs = () => {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 110]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="scroll-mt-24 relative min-h-[92svh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={heroImg}
          alt="Atmósfera gastronómica premium de Fogo"
          className="w-full h-[115%] object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      </motion.div>

      <EmberParticles />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm tracking-[0.28em] uppercase text-primary mb-6"
          >
            Fogo · Canasvieiras
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-5xl md:text-7xl lg:text-[4.7rem] font-bold tracking-tight leading-[0.92] mb-4"
          >
            <span className="text-foreground">Propuesta</span>
            <br />
            <span className="text-gradient-fire">Estratégica</span>
            <br />
            <span className="text-foreground">de Marketing</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-[44rem] mt-0"
          >
            <div className="glow-line w-24 mb-4" />
            <p className="font-body text-lg md:text-xl text-foreground/96 leading-relaxed mb-4 max-w-2xl drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]">
              Sistema, base propia y dirección comercial para captar la demanda turística de
              Canasvieiras en el momento en que ocurre.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-0"
          >
            Gabriel Lopes · A Última Ideia
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSectionEs;
