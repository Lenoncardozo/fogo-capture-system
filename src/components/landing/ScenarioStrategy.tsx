import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const pillars = [
  {
    num: '01',
    title: 'Google',
    subtitle: 'Intenção direta',
    desc: 'Capturar quem já procura onde comer. Aparecer no momento exato da decisão.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    num: '02',
    title: 'Instagram',
    subtitle: 'Descoberta e desejo',
    desc: 'Criar atração visual e converter seguidores em visitas reais.',
    color: 'from-ember/20 to-ember/5',
  },
  {
    num: '03',
    title: 'Conteúdo Visual',
    subtitle: 'Desejo',
    desc: 'Fotografia, vídeo e drone que transformam pratos em atração.',
    color: 'from-warm-gold/20 to-warm-gold/5',
  },
  {
    num: '04',
    title: 'Prova Social',
    subtitle: 'Confiança',
    desc: 'Avaliações e presença que eliminam dúvida e geram credibilidade.',
    color: 'from-primary/15 to-primary/5',
  },
  {
    num: '05',
    title: 'Conversão',
    subtitle: 'Ação',
    desc: 'Redução de fricção entre descoberta e visita. Tudo a um toque.',
    color: 'from-ember/15 to-ember/5',
  },
];

const ScenarioStrategy = () => {
  return (
    <>
      {/* Section 4: Strategic Reading — Editorial layout, no card grid */}
      <section className="py-24 md:py-36 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
                Leitura estratégica
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
                Quem domina a comunicação,{' '}
                <span className="text-gradient-fire">domina o fluxo.</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-secondary-foreground/80 leading-relaxed text-base md:text-lg mb-8">
                Canasvieiras concentra demanda de turistas brasileiros e hispanofalantes. 
                Argentinos, uruguaios, chilenos — todos decidem onde comer com base em 
                conforto, confiança e visibilidade digital. 
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="font-body text-secondary-foreground/80 leading-relaxed text-base md:text-lg">
                A concorrência local já opera com site e cardápio em espanhol. 
                Quem se posicionar melhor nesse fluxo, captura mais receita — não eventualmente, 
                mas sistematicamente.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              custom={2}
              className="space-y-4"
            >
              {[
                { label: 'Turistas brasileiros', insight: 'Pesquisam no Google, decidem pelo Instagram. Querem prova visual antes de escolher.' },
                { label: 'Turistas hispanofalantes', insight: 'Quem fala a língua deles primeiro, captura a atenção. Vantagem competitiva direta.' },
                { label: 'Canasvieiras como polo', insight: 'Concentração de demanda e decisão rápida. Presença digital define quem enche e quem espera.' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  custom={i + 3}
                  className="border-l-2 border-primary/30 pl-5 py-2"
                >
                  <p className="font-display text-base font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.insight}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Core Strategy System — Visual diagram flow */}
      <section id="estrategia" className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Sistema central
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              O sistema de aquisição
              <br />
              <span className="text-gradient-fire">sob demanda.</span>
            </motion.h2>
          </motion.div>

          {/* Vertical flow diagram — not a row of cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto relative"
          >
            {/* Vertical connector */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-0">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  custom={i + 2}
                  className="relative flex items-start gap-6 md:gap-8 py-6 md:py-8 group"
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${p.color} border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500`}>
                      <span className="font-display text-sm md:text-base font-bold text-primary">{p.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 md:pt-3">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="font-display text-xl md:text-2xl font-bold">{p.title}</h3>
                      <span className="font-body text-xs tracking-wider text-primary/70 uppercase">{p.subtitle}</span>
                    </div>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={7}
            className="text-center font-body text-sm text-muted-foreground mt-12 max-w-xl mx-auto italic"
          >
            Cada pilar alimenta o próximo. Juntos, formam um ciclo contínuo de aquisição — 
            não apenas na temporada.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ScenarioStrategy;
