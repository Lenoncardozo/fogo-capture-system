import { motion } from 'framer-motion';
import heroImg from '@/assets/hero-fogo.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Atmosfera premium gastronômica"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Proposta exclusiva
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
        >
          <span className="text-foreground">Proposta</span>
          <br />
          <span className="text-gradient-fire">Estratégica</span>
          <br />
          <span className="text-foreground">de Marketing</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glow-line w-24 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Um sistema de aquisição pensado para aumentar o faturamento do Fogo com fluxo constante de clientes, 
          especialmente nos momentos de decisão rápida em Canasvieiras.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
