import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08 },
  }),
};

const operationalSystem = [
  {
    num: '01',
    title: 'Captação',
    desc: 'Google, Maps e mídia para interceptar demanda no momento da busca e da descoberta.',
  },
  {
    num: '02',
    title: 'Conversão',
    desc: 'Instagram, landing enxuta, CTA claro e menos atrito entre interesse, prova e reserva.',
  },
  {
    num: '03',
    title: 'Conteúdo',
    desc: 'Imagem real, atmosfera, pratos, bastidores e leitura bilíngue para aumentar confiança.',
  },
  {
    num: '04',
    title: 'Otimização',
    desc: 'Medição contínua para ajustar campanha, criativo, mensagem e captação ao longo do ciclo.',
  },
];

const trackingSignals = [
  {
    label: 'Intenção local',
    value: 'Busca ativa',
    sub: 'Google e Maps capturam quem já quer decidir.',
  },
  {
    label: 'Janela de escolha',
    value: 'Curta',
    sub: 'O turista compara rápido e abandona fácil.',
  },
  {
    label: 'Leitura bilíngue',
    value: 'Necessária',
    sub: 'PT e ES reduzem esforço e aumentam clareza.',
  },
  {
    label: 'Base própria',
    value: 'Prioritária',
    sub: 'Site enxuto concentra prova, rota e reserva.',
  },
];

const channelStack = [
  { label: 'Google e Maps', width: '84%', color: 'bg-primary' },
  { label: 'Instagram', width: '70%', color: 'bg-warm-gold' },
  { label: 'Conteúdo e prova', width: '62%', color: 'bg-ember' },
  { label: 'Retargeting', width: '38%', color: 'bg-primary/60' },
];

const roadmap = [
  {
    phase: 'Mês 1',
    title: 'Fundação',
    items: ['Instagram reestruturado', 'Landing/site enxuto no ar', 'Google e Maps ativos'],
  },
  {
    phase: 'Mês 2–3',
    title: 'Aceleração',
    items: ['Meta Ads com criativo visual', 'Campanhas PT e ES', 'Otimização por sinais reais'],
  },
  {
    phase: 'Mês 4–6',
    title: 'Consolidação',
    items: ['Retargeting e prova social', 'Produção contínua', 'Operação mais previsível'],
  },
];

const OperationsMetricsV4 = () => {
  return (
    <>
      <section id="estrutura" className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Estrutura completa
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-6">
              Um sistema operacional <span className="text-gradient-fire">de aquisição.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
              Menos lista de serviços. Mais infraestrutura comercial organizada para captar, converter e ajustar.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-0 divide-y divide-border/50"
          >
            {operationalSystem.map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                custom={i + 3}
                className="flex items-start gap-6 py-6"
              >
                <span className="font-display text-2xl md:text-3xl font-bold text-primary/35 flex-shrink-0 w-12 pt-1">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-display text-lg md:text-xl font-bold mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="metricas" className="scroll-mt-24 py-20 md:py-24 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Inteligência e métricas
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-6">
              O que precisa ser <span className="text-gradient-fire">monitorado desde o início.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-card border border-border rounded-2xl p-6 md:p-10 mb-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-8">
              {trackingSignals.map((item, i) => (
                <motion.div key={item.label} variants={fadeUp} custom={i + 3} className="text-center md:text-left">
                  <p className="font-body text-[10px] tracking-wider uppercase text-muted-foreground mb-2">{item.label}</p>
                  <p className="font-display text-lg md:text-xl font-bold text-foreground">{item.value}</p>
                  <p className="font-body text-[10px] text-muted-foreground mt-1 leading-relaxed">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="font-body text-[10px] tracking-wider uppercase text-muted-foreground mb-4">
                Frentes de captação a ativar e medir
              </p>
              <div className="space-y-3">
                {channelStack.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-4">
                    <span className="font-body text-[11px] text-muted-foreground w-36 flex-shrink-0">{bar.label}</span>
                    <div className="flex-1 bg-secondary/40 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${bar.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: bar.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={7}
            className="text-center font-body text-sm text-muted-foreground max-w-2xl mx-auto italic"
          >
            A leitura começa com intenção, clique, visita ao perfil, pedido de rota e contato de reserva.
            O que performa fica. O que não aproxima mesa ocupada sai.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Roadmap
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-6">
              Da proposta ao <span className="text-gradient-fire">resultado.</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
                className="rounded-2xl border border-border/60 bg-secondary/18 p-6"
              >
                <p className="font-body text-[10px] tracking-[0.22em] uppercase text-primary mb-3">{phase.phase}</p>
                <h3 className="font-display text-2xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OperationsMetricsV4;
