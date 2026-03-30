import { motion } from 'framer-motion';
import canasvieirasImg from '@/assets/canasvieiras-drone.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, delay: i * 0.12 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const ContextSection = () => {
  return (
    <>
      {/* Section 2: Project Context — Full-bleed immersive */}
      <section id="contexto" className="relative">
        {/* Full-width image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="relative h-[50vh] md:h-[65vh] overflow-hidden image-placeholder"
        >
          <img
            src={canasvieirasImg}
            alt="Vista aérea de Canasvieiras, Florianópolis"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
              Contexto do projeto
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Fogo, Canasvieiras.
              <br />
              <span className="text-primary">Oportunidade latente.</span>
            </h2>
          </div>
        </motion.div>

        {/* Context content — editorial asymmetric */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-5 gap-12 lg:gap-20"
          >
            <motion.div variants={fadeUp} custom={0} className="lg:col-span-3 space-y-6 font-body text-secondary-foreground/80 leading-relaxed text-base md:text-lg">
              <p>
                Canasvieiras é um dos polos turísticos mais intensos de Florianópolis. 
                Durante a temporada, a região recebe centenas de milhares de visitantes — 
                brasileiros e estrangeiros — todos com uma coisa em comum: precisam comer, e decidem rápido.
              </p>
              <p>
                O Fogo está posicionado nesse fluxo. Mas sem um sistema previsível de aquisição, 
                depende de acaso, passagem e indicação espontânea. Não existe website. Não existe 
                estrutura digital para capturar demanda no momento em que ela acontece.
              </p>
            </motion.div>
            <motion.div variants={fadeLeft} custom={1} className="lg:col-span-2">
              <div className="border-l-2 border-primary/40 pl-6 space-y-6">
                <div>
                  <p className="font-display text-3xl font-bold text-primary">0</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Website ou landing page ativa</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-foreground">100%</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Dependência de tráfego orgânico e acaso</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-gradient-fire inline-block">∞</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Potencial de crescimento com sistema ativo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Real Objective — Strong editorial contrast */}
      <section className="py-24 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-6xl font-bold text-center mb-20 max-w-3xl mx-auto leading-tight">
              O ponto não é <span className="text-muted-foreground italic font-normal">postar mais</span>.
              <br />
              O ponto é <span className="text-gradient-fire">faturar mais</span>.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-secondary/40 border border-border rounded-xl p-8"
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
                ✕ &nbsp;Isso NÃO é o objetivo
              </p>
              <ul className="space-y-4 font-body text-muted-foreground">
                {[
                  'Postar no Instagram por postar',
                  'Rodar anúncios isolados sem direção',
                  'Perseguir métricas de vaidade',
                  'Marketing genérico e desconectado',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-muted-foreground/50 mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="bg-card border border-primary/20 rounded-xl p-8 shadow-fire"
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-6">
                ◆ &nbsp;Isso É o objetivo
              </p>
              <ul className="space-y-4 font-body text-foreground">
                {[
                  'Aparecer quando o turista buscar "restaurante Canasvieiras"',
                  'Capturar demanda no momento exato de decisão',
                  'Aumentar faturamento de forma previsível e constante',
                  'Transformar presença digital em clientes na mesa',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextSection;
