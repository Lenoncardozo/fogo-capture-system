import { motion } from 'framer-motion';
import fireGrill from '@/assets/fire-grill-close.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const TrafficSpanish = () => {
  return (
    <>
      {/* Section 7: Paid Traffic — Editorial, not twin cards */}
      <section id="trafego" className="py-24 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
                Tráfego pago
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
                Campanhas com{' '}
                <span className="text-gradient-fire">lógica de captura.</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-secondary-foreground/80 leading-relaxed mb-10">
                Não é impulsionar post. É construir infraestrutura de aquisição com 
                campanhas inteligentes, segmentação local e comunicação bilíngue.
              </motion.p>

              {/* Stacked items instead of twin cards */}
              <motion.div variants={fadeUp} custom={3} className="space-y-6">
                <div className="border-l-2 border-primary/40 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-fire flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">G</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">Google Ads</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Captura por intenção: "restaurante Canasvieiras", "onde comer Floripa". 
                    Google Maps otimizado. Campanhas separadas PT/ES. Segmentação geográfica focada.
                  </p>
                </div>

                <div className="border-l-2 border-ember/40 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-fire flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">M</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">Meta Ads</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Descoberta visual no Instagram e Facebook. Retargeting de visitantes. 
                    Criativos de alto impacto com vídeo e carrossel. Públicos por localização e comportamento.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Visual mockup — campaign preview */}
            <motion.div variants={fadeUp} custom={3}>
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Simulação de campanha
                </p>
                {/* Google search mockup */}
                <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-primary">G</span>
                    </div>
                    <div className="flex-1 bg-secondary/80 rounded px-3 py-1.5">
                      <span className="font-body text-[11px] text-muted-foreground">restaurante canasvieiras</span>
                    </div>
                  </div>
                  <div className="border border-primary/10 rounded-lg p-3 bg-card/50">
                    <p className="font-body text-[10px] text-primary/60 mb-0.5">Anúncio · fogocanas.com.br</p>
                    <p className="font-body text-sm font-semibold text-foreground">Fogo · Restaurante em Canasvieiras</p>
                    <p className="font-body text-[11px] text-muted-foreground mt-0.5">
                      Brasa, sabor e o mar a metros. Reserve sua mesa agora. ★★★★★
                    </p>
                  </div>
                </div>

                {/* Instagram ad mockup */}
                <div className="bg-secondary/50 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 p-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-fire flex items-center justify-center text-primary-foreground font-bold text-[9px]">F</div>
                    <div>
                      <p className="font-body text-[11px] font-semibold text-foreground">fogocanas</p>
                      <p className="font-body text-[9px] text-muted-foreground">Patrocinado</p>
                    </div>
                  </div>
                  <img
                    src={fireGrill}
                    alt="Anúncio simulado"
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="p-3 flex justify-between items-center">
                    <p className="font-body text-[11px] text-muted-foreground">fogocanas.com.br</p>
                    <span className="font-body text-[10px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                      Reserve agora
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Spanish Advantage — Full-bleed dramatic */}
      <section className="relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-[40vh] md:h-[50vh] overflow-hidden"
        >
          <img
            src={fireGrill}
            alt="Fogo e brasa"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
              <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
                Vantagem competitiva
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4 max-w-lg">
                Falar espanhol{' '}
                <span className="text-gradient-fire">é faturar mais.</span>
              </motion.h2>
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div variants={fadeUp} custom={0} className="space-y-5 font-body text-secondary-foreground/80 leading-relaxed">
              <p>
                Canasvieiras recebe um volume massivo de turistas hispanofalantes. 
                Argentinos, uruguaios, chilenos — todos decidem onde comer com base em conforto e confiança.
              </p>
              <p>
                A concorrência local já opera com cardápio em espanhol e presença digital bilíngue. 
                O Fogo precisa não apenas acompanhar — precisa liderar esse posicionamento.
              </p>
              <p className="text-primary/90 font-medium">
                Anúncios em espanhol, conteúdo adaptado, comunicação direta. 
                Não é tradução — é voz e posicionamento.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="space-y-4">
              <div className="bg-card border border-primary/20 rounded-xl p-6 shadow-fire">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/60 mb-3">
                  Exemplo de anúncio
                </p>
                <p className="font-display text-xl font-semibold text-foreground italic mb-2">
                  "¿Buscás donde comer esta noche?"
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Fuego en Canasvieiras. Brasas, sabor y el mar a metros. 
                  Reservá tu mesa ahora.
                </p>
              </div>
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-3">
                  Exemplo de conteúdo
                </p>
                <p className="font-display text-lg font-semibold text-foreground italic mb-2">
                  "Lo mejor de Floripa está en tu mesa."
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Platos con alma, fuego de verdad y la brisa del mar.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrafficSpanish;
