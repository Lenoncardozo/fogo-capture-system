import { motion } from 'framer-motion';
import logoFogo from '@/assets/logo-fogo.jpg';
import restaurantImg from '@/assets/restaurant-interior.jpg';
import restaurantAmbience from '@/assets/restaurant-ambience.jpg';
import grilledDish from '@/assets/grilled-dish.jpg';
import foodDetail from '@/assets/food-detail.jpg';
import terraceImg from '@/assets/terrace-night.jpg';
import fireGrill from '@/assets/fire-grill-close.jpg';
import canasvieirasAerial from '@/assets/canasvieiras-aerial.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const postConcepts = [
  { title: 'Brasa e ambiente', role: 'abertura de percepção', image: fireGrill },
  { title: 'O salão do Fogo', role: 'prova de atmosfera', image: restaurantImg },
  { title: 'Mesa pronta para decisão', role: 'conversão por contexto', image: restaurantAmbience },
  { title: 'Canasvieiras ao redor', role: 'lastro de localização', image: canasvieirasAerial },
  { title: 'Prato assinatura', role: 'desejo visual', image: grilledDish },
  { title: 'Detalhe que aproxima', role: 'retenção e prova', image: foodDetail },
];

const DeliveryV4 = () => {
  return (
    <section id="demonstracao" className="scroll-mt-24 py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
            Primeira entrega
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-6">
            Demonstração prática <span className="text-gradient-fire">de execução.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
            Não é promessa. É amostra concreta do que será estruturado para o Fogo:
            Instagram, conteúdo inicial e uma presença digital desenhada para converter.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
          <motion.h3 variants={fadeUp} custom={0} className="font-display text-2xl font-bold mb-3 text-center">
            Reestruturação do Instagram
          </motion.h3>
          <motion.p variants={fadeUp} custom={1} className="font-body text-xs text-muted-foreground text-center mb-8">
            Perfil atual → Perfil otimizado como funil de conversão
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div variants={fadeUp} custom={2}>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3 text-center">Perfil atual</p>
              <div className="bg-[hsl(0_0%_7%)] border border-border/40 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-5">
                  <img src={logoFogo} alt="Fogo" className="w-20 h-20 rounded-full object-cover border-2 border-border/30" />
                  <div className="flex-1">
                    <p className="font-body font-semibold text-foreground text-sm">fogo.restaurante.canasvieiras</p>
                    <p className="font-body text-xs text-muted-foreground">Fogo Restaurante Canasvieiras</p>
                    <div className="flex gap-5 mt-2">
                      <span className="font-body text-xs text-foreground"><strong>69</strong> <span className="text-muted-foreground">posts</span></span>
                      <span className="font-body text-xs text-foreground"><strong>2.979</strong> <span className="text-muted-foreground">followers</span></span>
                      <span className="font-body text-xs text-foreground"><strong>419</strong> <span className="text-muted-foreground">following</span></span>
                    </div>
                  </div>
                </div>
                <div className="space-y-0.5 font-body text-xs text-secondary-foreground/70 mb-4">
                  <p className="text-muted-foreground">Entrepreneur</p>
                  <p>🔥 Onde o fogo se transforma em experiência</p>
                  <p>🦐 Parrilla, mar & momentos na praia</p>
                  <p>📍 Canasvieiras – Florianópolis</p>
                  <p className="text-muted-foreground text-[11px]">Rua Mario Lacombe 735, Canasvieiras 88054-260</p>
                </div>
                <div className="flex gap-4 mt-4 overflow-x-auto pb-1">
                  {['Horarios', 'Localização', 'Menú', 'Pomoções'].map((h) => (
                    <div key={h} className="flex-shrink-0 flex flex-col items-center gap-1">
                      <div className="w-16 h-16 rounded-full border border-border/40 bg-secondary/30 flex items-center justify-center">
                        <img src={logoFogo} alt={h} className="w-10 h-10 rounded-full object-cover opacity-50" />
                      </div>
                      <span className="text-[10px] font-body text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={3}>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-3 text-center">Perfil otimizado</p>
              <div className="bg-card border border-primary/20 rounded-xl p-6 ring-1 ring-primary/10 shadow-fire">
                <div className="flex items-center gap-4 mb-5">
                  <img src={logoFogo} alt="Fogo" className="w-20 h-20 rounded-full object-cover border-2 border-primary/40" />
                  <div className="flex-1">
                    <p className="font-body font-semibold text-foreground text-sm">fogocanas</p>
                    <p className="font-body text-xs text-muted-foreground">Fogo · Canasvieiras</p>
                    <div className="flex gap-5 mt-2">
                      <span className="font-body text-xs text-foreground"><strong>69</strong> <span className="text-muted-foreground">posts</span></span>
                      <span className="font-body text-xs text-foreground"><strong>2.979</strong> <span className="text-muted-foreground">followers</span></span>
                      <span className="font-body text-xs text-foreground"><strong>419</strong> <span className="text-muted-foreground">following</span></span>
                    </div>
                  </div>
                </div>
                <div className="space-y-0.5 font-body text-sm text-secondary-foreground/80 mb-4">
                  <p>🔥 Brasa, sabor e mar em Canasvieiras</p>
                  <p>📍 Florianópolis · Aberto todos os dias</p>
                  <p>🌎 Português & Español</p>
                  <p className="text-primary font-medium">↓ Reserve sua mesa agora</p>
                </div>
                <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                  {['Menu', 'Ambiente', 'Avaliações', 'Reserva', 'Español'].map((h) => (
                    <div key={h} className="flex-shrink-0 flex flex-col items-center gap-1">
                      <div className="w-14 h-14 rounded-full border-2 border-primary/30 bg-secondary/50 flex items-center justify-center">
                        <img src={logoFogo} alt={h} className="w-9 h-9 rounded-full object-cover opacity-90" />
                      </div>
                      <span className="text-[10px] font-body text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-muted-foreground mt-5 text-center italic">
                  Perfil como funil: Bio → Highlights → Feed → CTA → Conversão
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="mb-16">
          <p className="font-body text-xs tracking-[0.24em] uppercase text-muted-foreground text-center mb-5">
            6 posts iniciais com papel no funil
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {postConcepts.map((post) => (
              <div key={post.title} className="group relative rounded-[1.35rem] overflow-hidden border border-border/50 bg-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 md:h-56 object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                  width={900}
                  height={700}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display text-xl font-semibold leading-tight">{post.title}</p>
                  <p className="font-body text-[11px] uppercase tracking-[0.18em] text-primary/80 mt-2">{post.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
          <motion.div variants={fadeUp} custom={5} className="text-center mb-8">
            <span className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5">
              Preview — futura presença digital do Fogo
            </span>
          </motion.div>

          <motion.div variants={scaleIn} className="relative border border-primary/20 rounded-2xl overflow-hidden bg-charcoal shadow-warm">
            <div className="bg-secondary/40 px-4 py-3 flex items-center gap-2 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-secondary/60 rounded-md px-3 py-1 max-w-xs">
                  <span className="font-body text-[10px] text-muted-foreground">fogocanas.com.br</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={restaurantImg}
                alt="Ambiente premium do Fogo"
                className="w-full h-72 md:h-96 object-cover"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <p className="font-display text-balance text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    Onde o fogo
                    <br />
                    encontra o mar.
                </p>
                <p className="font-body text-sm text-secondary-foreground/70 mt-3 max-w-md">
                  Brasa, sabor e a brisa de Canasvieiras. Uma experiência que fica.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-10">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">A experiência</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    Gastronomia na brasa,
                    <br />
                    feita com fogo de verdade.
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Cada prato é preparado com técnica, ingredientes selecionados e o calor que só o fogo direto dá.
                    Uma jornada de sabor para lembrar.
                  </p>
                </div>
                <div className="md:col-span-2 relative rounded-xl overflow-hidden">
                  <img
                    src={grilledDish}
                    alt="Prato premium na grelha"
                    className="w-full h-56 md:h-64 object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>

              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-6">Destaques</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Da grelha', tag: 'Especialidade' },
                    { name: 'Do mar', tag: 'Temporada' },
                    { name: 'Da casa', tag: 'Favorito' },
                    { name: 'Sobremesas', tag: 'Assinatura' },
                  ].map((dish, i) => (
                    <div key={dish.name} className="relative rounded-lg overflow-hidden group">
                      <img
                        src={[grilledDish, foodDetail, restaurantImg, terraceImg][i]}
                        alt={dish.name}
                        className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="font-body text-xs font-medium text-foreground">{dish.name}</p>
                        <p className="font-body text-[10px] text-primary/70">{dish.tag}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 relative rounded-xl overflow-hidden order-2 md:order-1">
                  <img
                    src={terraceImg}
                    alt="Terraço noturno"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width={1920}
                    height={960}
                  />
                </div>
                <div className="md:col-span-3 order-1 md:order-2">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">Visite</p>
                  <h3 className="font-display text-2xl font-bold mb-4">Canasvieiras, Florianópolis</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    A poucos passos da praia, em uma das regiões mais vibrantes da ilha.
                    Aberto todos os dias. Reserve sua mesa e venha viver o Fogo.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gradient-fire text-primary-foreground font-body text-xs font-semibold px-5 py-2.5 rounded-lg">
                      Reservar mesa
                    </span>
                    <span className="border border-primary/30 text-primary font-body text-xs px-5 py-2.5 rounded-lg">
                      Ver no mapa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 px-4 py-2 text-center border-t border-border/50">
              <p className="font-body text-[10px] text-muted-foreground tracking-wider">
                Preview conceitual — será desenvolvido com a identidade real do Fogo
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryV4;
