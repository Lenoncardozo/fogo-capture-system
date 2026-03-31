import { motion } from 'framer-motion';
import canasvieirasImg from '@/assets/canasvieiras-drone.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const signals = [
  {
    title: 'Base própria ausente',
    body: 'Nas buscas públicas, o Fogo ainda não opera uma superfície própria clara para captar demanda e orientar decisão.',
  },
  {
    title: 'Descoberta ainda reativa',
    body: 'A operação depende mais de passagem, indicação e Instagram orgânico do que de um fluxo digital estruturado.',
  },
  {
    title: 'Decisão acontece rápido',
    body: 'No turismo, a escolha do restaurante é curta. Quem aparece bem no momento certo reduz a perda para concorrentes.',
  },
];

const audienceSignals = [
  {
    title: 'Turista brasileiro',
    desc: 'Pesquisa no Google, valida no Instagram e procura prova visual antes de sair do lugar.',
  },
  {
    title: 'Turista hispanohablante',
    desc: 'Responde melhor quando entende a oferta de primeira, sem esforço de tradução nem ruído na decisão.',
  },
  {
    title: 'Polo turístico intenso',
    desc: 'Canasvieiras concentra fluxo, conveniência e escolha imediata. Presença digital muda ocupação de mesa.',
  },
];

const pillars = [
  {
    step: '01',
    title: 'Google e Maps',
    tag: 'intenção direta',
    desc: 'Capturar quem já está procurando onde comer e remover atrito entre busca, prova e reserva.',
  },
  {
    step: '02',
    title: 'Instagram como funil',
    tag: 'descoberta e decisão',
    desc: 'Transformar perfil, destaques e feed em estrutura de consideração, não apenas presença social.',
  },
  {
    step: '03',
    title: 'Landing / site enxuto',
    tag: 'base própria',
    desc: 'Criar um destino digital que concentra cardápio, prova, localização, CTA e leitura bilíngue.',
  },
  {
    step: '04',
    title: 'Conteúdo e prova social',
    tag: 'desejo e confiança',
    desc: 'Usar imagem real, ambiente e avaliações para reduzir dúvida e aumentar taxa de escolha.',
  },
];

const ContextAndStrategyV4 = () => {
  return (
    <>
      <section id="contexto" className="scroll-mt-24 relative">
        <div className="relative h-[42vh] md:h-[56vh] overflow-hidden">
          <img
            src={canasvieirasImg}
            alt="Vista aérea de Canasvieiras"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 lg:px-8 pb-10 md:pb-12">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">Contexto do projeto</p>
            <h2 className="font-display text-balance text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              Canasvieiras já entrega o fluxo.
              <br />
              <span className="text-gradient-fire">O digital precisa capturar a decisão.</span>
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="space-y-8">
              <motion.div variants={fadeUp} custom={0} className="space-y-6 font-body text-secondary-foreground/82 text-base md:text-lg leading-relaxed">
                <p>
                  Canasvieiras concentra tráfego turístico, decisão curta e forte competição pela atenção.
                  Nesse cenário, restaurante bom não basta: quem aparece melhor no momento de escolha tende a capturar mais mesas.
                </p>
                <p>
                  O Fogo já tem localização, ambiente e linguagem visual com potencial. O gargalo não parece ser produto.
                  O gargalo é transformar presença dispersa em um sistema de captação que funcione quando a demanda acontece.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} custom={1} className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary/30 border border-border/60 rounded-2xl p-5">
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-3">Objetivo real</p>
                  <p className="font-display text-2xl font-bold leading-tight">
                    Mais fluxo qualificado.
                    <br />
                    Mais previsibilidade.
                  </p>
                </div>
                <div className="bg-card border border-primary/15 rounded-2xl p-5">
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-3">Resultado esperado</p>
                  <p className="font-body text-sm text-secondary-foreground/78 leading-relaxed">
                    Mais presença no momento de busca, mais clareza na decisão e mais chance de transformar interesse em mesa ocupada.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {signals.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  variants={fadeUp}
                  custom={index + 2}
                  className="border-l-2 border-primary/35 pl-5 py-2"
                >
                  <p className="font-display text-xl font-semibold text-foreground mb-1">{signal.title}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{signal.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
              <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
                Leitura estratégica
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-6xl font-bold leading-[0.97] mb-8 max-w-4xl">
                Quem domina a comunicação
                <br />
                <span className="text-gradient-fire">domina o fluxo de receita.</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="space-y-6 font-body text-secondary-foreground/80 leading-relaxed text-base md:text-lg max-w-3xl">
                <p>
                  O turista não quer pensar demais. Ele quer enxergar rápido se o lugar parece bom,
                  confiável, perto e compatível com o momento.
                </p>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-5">
              {audienceSignals.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={index + 3}
                  className="bg-card/55 border border-border/55 rounded-2xl p-6"
                >
                  <p className="font-display text-xl font-semibold mb-2">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="estrategia" className="scroll-mt-24 py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_40%)]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-14">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
              Sistema central
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-6xl font-bold leading-tight mb-6">
              Captação sob demanda,
              <br />
              <span className="text-gradient-fire">com base própria.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Google, Instagram, conteúdo e prova social não funcionam isolados.
              Eles precisam apontar para uma estrutura própria que capture a decisão e reduza atrito até a reserva.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto mt-10">
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/25 to-transparent" />
            <div className="space-y-0">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index + 3}
                  className="relative flex items-start gap-6 md:gap-8 py-7 md:py-8"
                >
                  <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 rounded-full bg-secondary border border-primary/25 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-sm md:text-base font-bold text-primary">{pillar.step}</span>
                  </div>
                  <div className="pt-1 md:pt-2">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3 className="font-display text-xl md:text-2xl font-bold">{pillar.title}</h3>
                      <span className="font-body text-[11px] uppercase tracking-[0.18em] text-primary/70">{pillar.tag}</span>
                    </div>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextAndStrategyV4;
