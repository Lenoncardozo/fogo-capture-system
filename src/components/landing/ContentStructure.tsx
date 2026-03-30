import { motion } from 'framer-motion';
import foodSpread from '@/assets/food-spread.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
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

const ContentStructure = () => {
  return (
    <>
      {/* Section 9: Content Production — Full-bleed immersive */}
      <section className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="relative h-[45vh] md:h-[60vh] overflow-hidden image-placeholder"
        >
          <img
            src={foodSpread}
            alt="Produção de conteúdo gastronômico"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
              Produção de conteúdo
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-lg">
              Imagens que criam{' '}
              <span className="text-gradient-fire">desejo real.</span>
            </h2>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-secondary-foreground/80 leading-relaxed text-base md:text-lg">
              Conteúdo criado para gerar desejo — não apenas documentar. Fotografia editorial de pratos, 
              vídeos de bastidores com fogo e brasa, imagens aéreas da localização. 
              Cada peça visual com intenção comercial e estética de alto nível.
            </motion.p>
            <motion.div variants={fadeUp} custom={1} className="space-y-3">
              {[
                'Fotografia profissional de pratos e ambiente',
                'Vídeo e Reels de bastidores e preparo',
                'Drone aéreo de Canasvieiras e da região',
                'Criação editorial com direção de arte',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Full Marketing Structure — Numbered editorial list */}
      <section id="estrutura" className="py-24 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Estrutura completa
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Um sistema operacional{' '}
              <span className="text-gradient-fire">de aquisição.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
              Tudo integrado. Cada peça alimenta a outra. Estratégia, execução e otimização em ciclo contínuo.
            </motion.p>
          </motion.div>

          {/* Editorial numbered list — not a card grid */}
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
    </>
  );
};

export default ContentStructure;
