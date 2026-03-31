import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import heroImg from '@/assets/hero-fogo.jpg';

const emberConfig = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 4,
  size: 2 + Math.random() * 3,
  drift: -24 + Math.random() * 48,
}));

const HeroSectionV2 = () => {
  const ref = useRef<HTMLElement>(null);
  const [particles] = useState(emberConfig);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={heroImg}
          alt="Ambiente do Fogo em Canasvieiras"
          className="w-full h-[115%] object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/45 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_36%),radial-gradient(circle_at_bottom_right,hsl(var(--ember)/0.18),transparent_32%)]" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: '-4%',
              width: p.size,
              height: p.size,
              background: 'radial-gradient(circle, hsl(var(--primary)), hsl(var(--ember)))',
            }}
            animate={{ y: [0, -760], x: [0, p.drift], opacity: [0, 0.7, 0.5, 0], scale: [0.5, 1, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 border border-primary/20 bg-background/35 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary shadow-fire" />
              <span className="font-body text-[11px] uppercase tracking-[0.24em] text-primary">
                Proposta comercial para o Fogo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[5.4rem] font-bold leading-[0.93] tracking-tight mb-8"
            >
              Mais clientes
              <br />
              com um
              <span className="text-gradient-fire"> sistema de aquisição</span>
              <br />
              para o Fogo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-body text-lg md:text-[1.35rem] text-secondary-foreground/85 leading-relaxed max-w-2xl mb-10"
            >
              O objetivo não é aumentar postagem. É estruturar Google, Instagram, conteúdo,
              prova social e base própria para capturar demanda no momento em que o turista decide onde comer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contexto"
                className="bg-gradient-fire text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-fire text-sm tracking-wide"
              >
                Ver a proposta
              </a>
              <a
                href="#demonstracao"
                className="border border-primary/30 text-primary font-body px-8 py-4 rounded-lg hover:bg-primary/5 transition-all text-sm tracking-wide"
              >
                Ver demonstração prática
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="lg:justify-self-end max-w-md w-full"
          >
            <div className="bg-background/55 backdrop-blur-xl border border-border/70 rounded-[1.75rem] p-6 md:p-7 shadow-warm">
              <p className="font-body text-[11px] uppercase tracking-[0.24em] text-primary mb-5">O que esta estrutura organiza</p>
              <div className="space-y-4">
                {[
                  'intenção de busca no Google e no Maps',
                  'descoberta e prova no Instagram',
                  'conversão em base própria com baixa fricção',
                  'leituras contínuas para ajustar mídia e conteúdo',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-primary mt-1">→</span>
                    <p className="font-body text-sm text-secondary-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSectionV2;
