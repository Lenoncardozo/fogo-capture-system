import { motion } from 'framer-motion';
import foodSpread from '@/assets/food-spread.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const managementStack = [
  { icon: '◆', title: 'Estratégia', desc: 'Planejamento e posicionamento de marca' },
  { icon: '◆', title: 'Tráfego pago', desc: 'Google Ads + Meta Ads com segmentação local' },
  { icon: '◆', title: 'Conteúdo', desc: 'Foto, vídeo, drone e criação editorial' },
  { icon: '◆', title: 'Redes sociais', desc: 'Gestão de perfis com lógica de conversão' },
  { icon: '◆', title: 'Landing pages', desc: 'Páginas de captura e conversão' },
  { icon: '◆', title: 'Website', desc: 'Presença digital completa e profissional' },
  { icon: '◆', title: 'Copywriting', desc: 'Comunicação persuasiva e direcionada' },
  { icon: '◆', title: 'Análise e otimização', desc: 'Dados, métricas e melhoria contínua' },
];

const ContentStructure = () => {
  return (
    <>
      {/* Section 9: Content Production */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Produção de conteúdo
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Imagens que criam<br />
              <span className="text-gradient-fire">desejo real.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="relative rounded-2xl overflow-hidden mb-12 image-placeholder"
          >
            <img
              src={foodSpread}
              alt="Produção de conteúdo gastronômico"
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
              width={1920}
              height={768}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex flex-wrap gap-6">
                {[
                  { label: 'Fotografia profissional', icon: '📷' },
                  { label: 'Vídeo e Reels', icon: '🎬' },
                  { label: 'Drone aéreo', icon: '🚁' },
                  { label: 'Criação editorial', icon: '✦' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-body text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-body text-secondary-foreground/80 leading-relaxed">
              Conteúdo criado para gerar desejo — não apenas documentar. Fotografia editorial de pratos, 
              vídeos de bastidores com fogo e brasa, imagens aéreas de Canasvieiras e da localização. 
              Cada peça visual com intenção comercial e estética de alto nível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Full Marketing Structure */}
      <section id="estrutura" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Estrutura completa
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Um sistema operacional<br />
              <span className="text-gradient-fire">de aquisição.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
              Tudo integrado. Cada peça do sistema alimenta a outra. Estratégia, execução e otimização 
              em ciclo contínuo.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {managementStack.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i + 3}
                className="bg-card/50 border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-primary text-xs">{item.icon}</span>
                <h4 className="font-display text-sm font-bold mt-2 mb-1">{item.title}</h4>
                <p className="font-body text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContentStructure;
