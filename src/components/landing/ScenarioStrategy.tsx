import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const pillars = [
  {
    num: '01',
    title: 'Google',
    subtitle: 'Intenção direta',
    desc: 'Capturar quem já está procurando onde comer. Presença no momento exato da decisão.',
  },
  {
    num: '02',
    title: 'Instagram',
    subtitle: 'Descoberta e decisão',
    desc: 'Criar desejo visual e converter seguidores em visitas reais ao restaurante.',
  },
  {
    num: '03',
    title: 'Conteúdo Visual',
    subtitle: 'Desejo',
    desc: 'Fotografia, vídeo e drone que transformam pratos e ambiente em atração irresistível.',
  },
  {
    num: '04',
    title: 'Prova Social',
    subtitle: 'Confiança',
    desc: 'Depoimentos, avaliações e presença digital que eliminam dúvida e geram credibilidade.',
  },
  {
    num: '05',
    title: 'Conversão',
    subtitle: 'Ação',
    desc: 'Redução de fricção entre descoberta e visita. CTA, reserva, direção — tudo a um toque.',
  },
];

const ScenarioStrategy = () => {
  return (
    <>
      {/* Section 4: Strategic Reading */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Leitura estratégica
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              Quem domina a comunicação,<br />
              <span className="text-gradient-fire">domina o fluxo.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: '🇧🇷',
                title: 'Turistas brasileiros',
                text: 'Pesquisam no Google, decidem pelo Instagram. Querem prova visual e social antes de escolher.',
              },
              {
                icon: '🇦🇷',
                title: 'Turistas hispanohablantes',
                text: 'Argentinos, uruguaios, chilenos. Quem fala a língua deles primeiro, captura a atenção primeiro.',
              },
              {
                icon: '📍',
                title: 'Canasvieiras como polo',
                text: 'Concentração de demanda, decisão rápida, concorrência por atenção. Presença digital é vantagem direta.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i + 2}
                className="bg-card/50 border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
              >
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Core Strategy System */}
      <section id="estrategia" className="py-32 relative overflow-hidden">
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
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              O sistema de aquisição<br />
              <span className="text-gradient-fire">sob demanda.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
              Cinco pilares integrados que transformam presença digital em fluxo constante de clientes para o Fogo.
            </motion.p>
          </motion.div>

          {/* Pillar flow */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  custom={i + 3}
                  className="relative group"
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-fire h-full">
                    <p className="font-body text-xs text-primary/60 tracking-widest mb-3">{p.num}</p>
                    <h3 className="font-display text-lg font-bold mb-1">{p.title}</h3>
                    <p className="font-body text-xs text-primary tracking-wide mb-3">{p.subtitle}</p>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  {/* Glow dot */}
                  <div className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors animate-glow-pulse" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={8}
            className="text-center font-body text-sm text-muted-foreground mt-16 max-w-xl mx-auto"
          >
            Cada pilar alimenta o próximo. Juntos, formam um ciclo de aquisição que funciona 
            continuamente — não apenas quando há uma promoção ou temporada.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ScenarioStrategy;
