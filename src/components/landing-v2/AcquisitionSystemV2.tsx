import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.08 },
  }),
};

const measurementRows = [
  {
    title: 'Visibilidade',
    bullets: ['impressões locais em busca', 'alcance qualificado PT + ES', 'cliques em Maps e site'],
  },
  {
    title: 'Consideração',
    bullets: ['tempo no mini site', 'visitas ao perfil', 'interação com destaques e cardápio'],
  },
  {
    title: 'Ação',
    bullets: ['clique para rota', 'clique para reserva / contato', 'entrada por campanha ou busca'],
  },
  {
    title: 'Retorno',
    bullets: ['criativos que puxam mais ação', 'canais que mais capturam demanda', 'ajustes de verba e mensagem'],
  },
];

const roadmap = [
  {
    phase: 'Fundação',
    time: 'primeiras semanas',
    items: ['Instagram reorganizado', 'landing ativa', 'Google + Maps preparados'],
  },
  {
    phase: 'Captação',
    time: 'mês 1 a 2',
    items: ['campanhas PT + ES', 'criativos reais do Fogo', 'primeiros aprendizados de mídia'],
  },
  {
    phase: 'Otimização',
    time: 'mês 2 em diante',
    items: ['ajustes por comportamento', 'retargeting e prova social', 'refino contínuo da conversão'],
  },
];

const AcquisitionSystemV2 = () => {
  return (
    <>
      <section id="metricas" className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
              Métricas e leitura
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
              O que importa não é inventar número.
              <br />
              <span className="text-gradient-fire">É medir o que muda decisão.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O ponto aqui não é prometer volume fechado sem base. É definir as leituras que mostram
              se o Fogo está aparecendo melhor, convertendo melhor e ajustando melhor a operação.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="bg-card border border-border/55 rounded-[2rem] p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-5">
              {measurementRows.map((row, index) => (
                <motion.div
                  key={row.title}
                  variants={fadeUp}
                  custom={index + 4}
                  className="rounded-[1.3rem] border border-border/55 bg-secondary/20 p-5"
                >
                  <p className="font-display text-2xl font-semibold mb-4">{row.title}</p>
                  <div className="space-y-3">
                    {row.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 items-start">
                        <span className="text-primary mt-1">→</span>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 border-t border-border/50 pt-6">
              <p className="font-body text-sm text-secondary-foreground/80 leading-relaxed max-w-3xl">
                O objetivo é entender quais buscas, criativos, idiomas e superfícies estão puxando mais ação
                para que verba, conteúdo e mensagem sejam ajustados com mais precisão ao longo da operação.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
              Roadmap enxuto
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Da fundação
              <span className="text-gradient-fire"> ao ciclo contínuo.</span>
            </motion.h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/45 via-primary/20 to-transparent" />
            {roadmap.map((step, index) => (
              <motion.div
                key={step.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 2}
                className="relative flex items-start gap-6 md:gap-8 py-8"
              >
                <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 rounded-full bg-secondary border border-primary/25 flex items-center justify-center flex-shrink-0">
                  <span className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-primary">{index + 1}</span>
                </div>
                <div className="pt-1 md:pt-2">
                  <div className="flex flex-wrap items-end gap-3 mb-3">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">{step.phase}</h3>
                    <span className="font-body text-[11px] uppercase tracking-[0.18em] text-primary/70">{step.time}</span>
                  </div>
                  <div className="space-y-2">
                    {step.items.map((item) => (
                      <div key={item} className="flex gap-3 items-start">
                        <span className="text-primary mt-1">→</span>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AcquisitionSystemV2;
