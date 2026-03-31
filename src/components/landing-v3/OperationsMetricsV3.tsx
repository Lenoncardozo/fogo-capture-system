import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const operationalSystem = [
  { num: '01', title: 'Estratégia', desc: 'Planejamento e posicionamento de marca' },
  { num: '02', title: 'Tráfego pago', desc: 'Google Ads + Meta Ads com segmentação local' },
  { num: '03', title: 'Conteúdo', desc: 'Foto, vídeo, drone e produção editorial' },
  { num: '04', title: 'Redes sociais', desc: 'Gestão de perfis com lógica de conversão' },
  { num: '05', title: 'Landing pages e website', desc: 'Presença digital completa e profissional' },
  { num: '06', title: 'Copy e comunicação', desc: 'Persuasão direcionada, em PT e ES' },
  { num: '07', title: 'Análise e otimização', desc: 'Dados, métricas e melhoria contínua' },
];

const roadmap = [
  {
    phase: 'Mês 1',
    title: 'Fundação',
    items: ['Reestruturação Instagram', 'Website e landing page', 'Google Ads ativo', 'Primeiros conteúdos editoriais'],
  },
  {
    phase: 'Mês 2–3',
    title: 'Aceleração',
    items: ['Meta Ads com criativos de vídeo', 'Campanhas em espanhol', 'Otimização por dados', 'Produção contínua de conteúdo'],
  },
  {
    phase: 'Mês 4–6',
    title: 'Consolidação',
    items: ['Retargeting avançado', 'Prova social e avaliações', 'Presença como referência regional', 'Sistema operando em ciclo contínuo'],
  },
];

const OperationsMetricsV3 = () => {
  return (
    <>
      <section id="estrutura" className="py-24 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Estrutura completa
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Um sistema operacional <span className="text-gradient-fire">de aquisição.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
              Tudo integrado. Cada peça alimenta a outra. Estratégia, execução e otimização em ciclo contínuo.
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
                className="flex items-start gap-6 py-6 group hover:bg-secondary/10 transition-colors px-4 -mx-4 rounded-lg"
              >
                <span className="font-display text-2xl md:text-3xl font-bold text-primary/30 group-hover:text-primary/60 transition-colors flex-shrink-0 w-12 pt-1">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-display text-lg md:text-xl font-bold mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="metricas" className="py-24 md:py-36 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Inteligência e métricas
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Decisões baseadas <span className="text-gradient-fire">em dados reais.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-card border border-border rounded-2xl p-6 md:p-10 mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              {[
                { label: 'Buscas/mês', value: '"restaurante canasvieiras"', sub: 'Volume estimado de intenção local' },
                { label: 'Decisão', value: '< 30 min', sub: 'Tempo médio de escolha do turista' },
                { label: 'Concorrência', value: 'Ativa', sub: 'Competidores já com presença digital bilíngue' },
                { label: 'Oportunidade', value: 'Alta', sub: 'Fogo sem website, sem ads, sem captura ativa' },
              ].map((item, i) => (
                <motion.div key={item.label} variants={fadeUp} custom={i + 3} className="text-center md:text-left">
                  <p className="font-body text-[10px] tracking-wider uppercase text-muted-foreground mb-2">{item.label}</p>
                  <p className="font-display text-lg md:text-xl font-bold text-foreground">{item.value}</p>
                  <p className="font-body text-[10px] text-muted-foreground mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="font-body text-[10px] tracking-wider uppercase text-muted-foreground mb-4">
                Potencial de captura mensal — simulação
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Busca Google (PT)', width: '85%', color: 'bg-primary' },
                  { label: 'Busca Google (ES)', width: '55%', color: 'bg-ember' },
                  { label: 'Descoberta Instagram', width: '70%', color: 'bg-warm-gold' },
                  { label: 'Retargeting', width: '40%', color: 'bg-primary/60' },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-4">
                    <span className="font-body text-[11px] text-muted-foreground w-36 flex-shrink-0">{bar.label}</span>
                    <div className="flex-1 bg-secondary/40 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${bar.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: bar.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
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
            Não prometemos números inventados. Prometemos um sistema de medição e otimização que transforma
            dados em decisões — e decisões em faturamento.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Roadmap
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Da proposta ao <span className="text-gradient-fire">resultado.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.phase}
                variants={fadeUp}
                custom={i + 2}
                className="relative flex items-start gap-6 md:gap-8 py-8"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                    <span className="font-body text-[10px] md:text-xs font-bold text-primary tracking-wider">{phase.phase}</span>
                  </div>
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OperationsMetricsV3;
