import { motion } from 'framer-motion';
import aerialImg from '@/assets/canasvieiras-aerial.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const ContextSection = () => {
  return (
    <>
      {/* Section 2: Project Context */}
      <section id="contexto" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
                Contexto do projeto
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
                Fogo, Canasvieiras.
                <br />
                <span className="text-primary">Oportunidade latente.</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-5 font-body text-secondary-foreground/80 leading-relaxed">
                <p>
                  Canasvieiras é um dos polos turísticos mais intensos de Florianópolis. Milhares de turistas — 
                  brasileiros e estrangeiros — passam pela região a cada temporada, todos com uma coisa em comum: 
                  precisam comer, e decidem rápido.
                </p>
                <p>
                  O Fogo está posicionado nesse fluxo. Mas sem um sistema previsível de aquisição, depende de acaso, 
                  passagem e indicação espontânea. Não existe website. Não existe estrutura digital para capturar 
                  demanda no momento em que ela acontece.
                </p>
                <p className="text-primary/90 font-medium">
                  O potencial de crescimento é real — e imediato. Basta construir o sistema certo.
                </p>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="relative rounded-xl overflow-hidden image-placeholder"
            >
              <img
                src={aerialImg}
                alt="Vista aérea de Canasvieiras"
                className="w-full h-80 lg:h-[480px] object-cover"
                loading="lazy"
                width={1920}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Real Objective */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4 text-center">
              Objetivo real
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold text-center mb-20 max-w-3xl mx-auto leading-tight">
              O ponto não é <span className="text-muted-foreground italic">postar mais</span>.
              <br />
              O ponto é <span className="text-gradient-fire">faturar mais</span>.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="bg-secondary/40 border border-border rounded-xl p-8"
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                ✕ &nbsp;Isso NÃO é o objetivo
              </p>
              <ul className="space-y-4 font-body text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50 mt-1">—</span>
                  Postar no Instagram por postar
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50 mt-1">—</span>
                  Rodar anúncios isolados sem direção
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50 mt-1">—</span>
                  Perseguir métricas de vaidade
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground/50 mt-1">—</span>
                  Marketing genérico e desconectado
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="bg-card border border-primary/20 rounded-xl p-8 shadow-fire"
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-6">
                ◆ &nbsp;Isso É o objetivo
              </p>
              <ul className="space-y-4 font-body text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  Gerar fluxo contínuo de clientes
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  Capturar demanda no momento de decisão
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  Aumentar faturamento de forma previsível
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  Construir presença que converte
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextSection;
