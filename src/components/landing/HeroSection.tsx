import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroImg from '@/assets/hero-fogo.jpg';

const EmberParticles = () => {
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 5,
      size: 2 + Math.random() * 3,
      drift: -20 + Math.random() * 40,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(var(--primary)), hsl(var(--ember)))`,
          }}
          animate={{
            y: [0, -800],
            x: [0, p.drift],
            opacity: [0, 0.8, 0.6, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={heroImg}
          alt="Atmosfera premium gastronômica"
          className="w-full h-[120%] object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      </motion.div>

      <EmberParticles />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          Proposta exclusiva
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          <span className="text-foreground">Proposta</span>
          <br />
          <span className="text-gradient-fire">Estratégica</span>
          <br />
          <span className="text-foreground">de Marketing</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glow-line w-24 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-secondary-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Mais clientes, mais faturamento. Um sistema de aquisição
          constante para o Fogo em Canasvieiras.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#fechamento"
            className="bg-gradient-fire text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-fire text-sm tracking-wide"
          >
            Avançar com o projeto
          </a>
          <a
            href="#demonstracao"
            className="border border-primary/30 text-primary font-body px-8 py-4 rounded-lg hover:bg-primary/5 transition-all text-sm tracking-wide"
          >
            Ver demonstração prática
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground"
        >
          Gabriel &nbsp;·&nbsp; A Última Ideia
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
