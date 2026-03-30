import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const MetricsGrowthClosing = () => {
  return (
    <>
      {/* Section 11: Metrics & Intelligence — Dashboard mockup */}
      <section className="py-24 md:py-36 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Inteligência e métricas
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Decisões baseadas{' '}
              <span className="text-gradient-fire">em dados reais.</span>
            </motion.h2>
          </motion.div>

          {/* Dashboard mockup */}
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

            {/* Visual bar chart mockup */}
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

      {/* Section 12: Investment / Roadmap — NEW */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Roadmap
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Da proposta ao{' '}
              <span className="text-gradient-fire">resultado.</span>
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            {[
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
            ].map((phase, i) => (
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

      {/* Section 13: Closing — Strong, with WhatsApp CTA */}
      <section id="fechamento" className="py-24 md:py-36 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="glow-line w-20 mx-auto mb-12" />

            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-10">
              Não se trata de{' '}
              <span className="text-muted-foreground italic font-normal">marketing por vaidade</span>.
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} className="font-body text-xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
              Trata-se de construir um sistema que traz mais gente, com mais frequência, 
              e transforma presença em faturamento.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground mb-12 max-w-xl mx-auto">
              O Fogo tem a localização e o potencial. Esta proposta é o sistema que falta.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="https://wa.me/5548999999999?text=Quero%20saber%20mais%20sobre%20a%20proposta%20do%20Fogo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-fire text-primary-foreground font-body font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-fire text-sm tracking-wide"
              >
                Avançar com o projeto
              </a>
              <a
                href="#hero"
                className="border border-border text-muted-foreground font-body px-8 py-4 rounded-lg hover:border-primary/30 hover:text-primary transition-all text-sm tracking-wide"
              >
                Voltar ao início
              </a>
            </motion.div>

            <motion.p variants={fadeUp} custom={4.5} className="font-body text-[11px] text-muted-foreground/50 mb-16">
              Proposta válida para este ciclo de planejamento
            </motion.p>

            {/* Signature */}
            <motion.div variants={fadeUp} custom={5} className="pt-12 border-t border-border/50 max-w-md mx-auto">
              <p className="font-display text-lg font-semibold text-foreground mb-1">Gabriel</p>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Especialista em marketing estratégico, campanhas de aquisição e produção editorial. 
                Experiência com negócios locais e publicações internacionais. 
                Visão estética aliada a visão de negócio.
              </p>
              <div className="glow-line w-12 mx-auto mb-6" />
              <p className="font-display text-lg font-semibold text-primary mb-1">A Última Ideia</p>
              <p className="font-body text-sm text-muted-foreground">
                Agência focada em crescimento e posicionamento. Integra estratégia, 
                tráfego, conteúdo e percepção. Foco em resultados e construção de presença.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="font-body text-xs text-muted-foreground/50 tracking-wider">
            © 2026 A Última Ideia · Proposta confidencial para Fogo, Canasvieiras
          </p>
        </div>
      </section>
    </>
  );
};

export default MetricsGrowthClosing;
