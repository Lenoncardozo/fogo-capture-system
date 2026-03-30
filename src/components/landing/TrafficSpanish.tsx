import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const TrafficSpanish = () => {
  return (
    <>
      {/* Section 7: Paid Traffic */}
      <section id="trafego" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
              Infraestrutura de aquisição
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tráfego pago<br />
              <span className="text-gradient-fire">com lógica de captura.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
              Não é impulsionar post. É construir uma máquina de aquisição com campanhas inteligentes, 
              segmentação local e comunicação bilíngue.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-fire flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">G</span>
                </div>
                <h3 className="font-display text-xl font-bold">Google Ads</h3>
              </div>
              <ul className="space-y-3 font-body text-sm text-secondary-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Captura por intenção de busca: "restaurante Canasvieiras", "onde comer Floripa"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Google Maps e perfil otimizado para busca local
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Campanhas separadas em português e espanhol
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Segmentação geográfica focada na região
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-fire flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <h3 className="font-display text-xl font-bold">Meta Ads</h3>
              </div>
              <ul className="space-y-3 font-body text-sm text-secondary-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Campanhas de descoberta visual no Instagram e Facebook
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Retargeting de visitantes do perfil e website
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Criativos de alto impacto com vídeo e carrossel
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">→</span>
                  Públicos personalizados por localização e comportamento
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Spanish Advantage */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
                  Vantagem competitiva
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Falar espanhol<br />
                  <span className="text-gradient-fire">é faturar mais.</span>
                </motion.h2>
                <motion.div variants={fadeUp} custom={2} className="space-y-5 font-body text-secondary-foreground/80 leading-relaxed">
                  <p>
                    Canasvieiras recebe um volume massivo de turistas hispanofalantes. Argentinos, uruguaios, 
                    chilenos — todos decidem onde comer com base em conforto e confiança.
                  </p>
                  <p>
                    Quem comunica na língua deles primeiro, captura primeiro. Anúncios em espanhol, conteúdo 
                    adaptado, comunicação direta. Não é tradução — é voz e posicionamento.
                  </p>
                  <p className="text-primary/90 font-medium">
                    Enquanto a concorrência fala só português, o Fogo pode dominar esse fluxo inteiro.
                  </p>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="space-y-4"
              >
                {/* Spanish ad examples */}
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrafficSpanish;
