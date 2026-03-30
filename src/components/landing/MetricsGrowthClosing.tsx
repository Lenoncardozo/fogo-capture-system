import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const MetricsGrowthClosing = () => {
  return (
    <>
      {/* Section 11: Metrics & Intelligence */}
      <section className="py-32 relative">
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
              Decisões baseadas<br />
              <span className="text-gradient-fire">em dados reais.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { metric: 'Demanda local', desc: 'Volume de buscas ativas por restaurantes na região de Canasvieiras' },
              { metric: 'Decisão rápida', desc: 'Turistas decidem onde comer em minutos — presença no momento certo é tudo' },
              { metric: 'Fluxo e captura', desc: 'Cada ponto de contato digital é uma oportunidade de converter interesse em visita' },
              { metric: 'Conversão contínua', desc: 'Sistema que funciona todos os dias, não apenas em temporada ou promoção' },
            ].map((item, i) => (
              <motion.div
                key={item.metric}
                variants={fadeUp}
                custom={i + 2}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary animate-glow-pulse" />
                </div>
                <h4 className="font-display text-base font-bold mb-2">{item.metric}</h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={6}
            className="text-center"
          >
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto italic">
              Não prometemos números inventados. Prometemos um sistema de medição e otimização que transforma 
              dados em decisões — e decisões em faturamento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 12: Growth Vision */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Visão de crescimento
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-10">
              Transformar o Fogo em<br />
              <span className="text-gradient-fire">referência regional.</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="space-y-6 font-body text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              <p>
                O objetivo não é apenas mais clientes amanhã. É construir uma presença tão forte 
                que o Fogo se torne o lugar que todo turista em Canasvieiras procura — e que todo 
                morador recomenda.
              </p>
              <p>
                Presença constante em vez de improviso sazonal. Uma marca que gera desejo, não 
                apenas atende demanda. Um restaurante lembrado — não apenas visitado.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="glow-line w-32 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Section 13: Closing */}
      <section id="fechamento" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="glow-line w-20 mx-auto mb-12" />

            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-10">
              Não se trata de<br />
              <span className="text-muted-foreground italic">marketing por vaidade</span>.
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} className="font-body text-xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
              Trata-se de construir um sistema que traz mais gente, com mais frequência, 
              e transforma presença em faturamento.
            </motion.p>

            <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground mb-12 max-w-xl mx-auto">
              O Fogo tem o produto, a localização e o potencial. O que falta é o sistema. 
              Esta proposta é esse sistema.
            </motion.p>

            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="mailto:contato@aultimaideia.com"
                className="bg-gradient-fire text-primary-foreground font-body font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-fire text-sm tracking-wide"
              >
                Quero estruturar esse sistema
              </a>
              <a
                href="#hero"
                className="border border-border text-muted-foreground font-body px-8 py-4 rounded-lg hover:border-primary/30 hover:text-primary transition-all text-sm tracking-wide"
              >
                Voltar ao início
              </a>
            </motion.div>

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
                Agência focada em crescimento e posicionamento. Não vende posts — integra estratégia, 
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
