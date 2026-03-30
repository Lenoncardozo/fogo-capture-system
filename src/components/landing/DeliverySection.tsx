import { motion } from 'framer-motion';
import restaurantImg from '@/assets/restaurant-ambience.jpg';
import foodDetail from '@/assets/food-detail.jpg';
import foodSpread from '@/assets/food-spread.jpg';
import terraceImg from '@/assets/terrace-night.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const conceptPosts = [
  { title: 'Apresentação do Fogo', type: 'Carrossel', desc: 'Fogo, brasa e sabor em Canasvieiras. Introdução visual do restaurante.' },
  { title: 'O prato que marca', type: 'Reels', desc: 'Vídeo curto do prato principal com close na grelha e fogo.' },
  { title: 'Vista + Mesa', type: 'Foto editorial', desc: 'Ambiente noturno com iluminação quente e mesa posta.' },
  { title: 'Depoimento visual', type: 'Story/Reels', desc: 'Turista real comentando a experiência. Prova social autêntica.' },
  { title: '¿Buscas donde comer?', type: 'Ad em espanhol', desc: 'Post direcionado ao público hispano com CTA direto.' },
  { title: 'Por trás da brasa', type: 'Reels bastidor', desc: 'Processo de preparo, tempero, fogo. Desejo e autenticidade.' },
];

const DeliverySection = () => {
  return (
    <section id="demonstracao" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
            Primeira entrega
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Demonstração prática<br />
            <span className="text-gradient-fire">de execução.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">
            Não é promessa. É amostra real do que será construído para o Fogo — 
            desde a reestruturação do Instagram até a presença digital completa.
          </motion.p>
        </motion.div>

        {/* Instagram Restructure */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display text-2xl font-bold mb-8 text-center">
            Reestruturação do Instagram
          </motion.h3>

          {/* Bio proposal */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="bg-card border border-border rounded-xl p-8 max-w-md mx-auto mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-fire flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                F
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">fogocanas</p>
                <p className="font-body text-xs text-muted-foreground">Fogo · Canasvieiras</p>
              </div>
            </div>
            <div className="space-y-1 font-body text-sm text-secondary-foreground/80">
              <p>🔥 Brasa, sabor e mar em Canasvieiras</p>
              <p>📍 Florianópolis · Aberto todos os dias</p>
              <p>🇧🇷🇦🇷 Português & Español</p>
              <p className="text-primary font-medium">↓ Reserve sua mesa agora</p>
            </div>

            {/* Highlights */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
              {['Menu', 'Ambiente', 'Avaliações', 'Reserva', 'Español'].map((h) => (
                <div key={h} className="flex-shrink-0 flex flex-col items-center gap-1">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/30 bg-secondary/50 flex items-center justify-center">
                    <span className="text-[10px] font-body text-muted-foreground">{h.slice(0, 3)}</span>
                  </div>
                  <span className="text-[10px] font-body text-muted-foreground">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p variants={fadeUp} custom={2} className="text-center font-body text-sm text-muted-foreground mb-4">
            Perfil como funil: Bio → Highlights → Feed → CTA → Conversão
          </motion.p>
        </motion.div>

        {/* 6 Conceptual Posts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display text-2xl font-bold mb-4 text-center">
            6 posts conceituais iniciais
          </motion.h3>
          <motion.p variants={fadeUp} custom={1} className="font-body text-sm text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Cada post com lógica de conversão. Não é conteúdo por conteúdo — é comunicação com objetivo.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 2}
                className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs tracking-widest text-primary/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-[10px] tracking-wider uppercase text-muted-foreground bg-secondary/60 px-2 py-1 rounded">
                    {post.type}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold mb-2">{post.title}</h4>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{post.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============================================= */}
        {/* B2C EMBEDDED PREVIEW */}
        {/* ============================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-8">
            <span className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full px-4 py-1.5">
              Preview — futura presença digital do Fogo
            </span>
          </motion.div>

          {/* Framed container for B2C preview */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="relative border border-primary/20 rounded-2xl overflow-hidden bg-charcoal shadow-warm"
          >
            {/* Browser chrome simulation */}
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

            {/* B2C Preview Hero */}
            <div className="relative">
              <img
                src={restaurantImg}
                alt="Ambiente premium do Fogo"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Onde o fogo encontra o mar.
                </p>
                <p className="font-body text-sm text-secondary-foreground/70 mt-2">
                  Brasa, sabor e a brisa de Canasvieiras. Uma experiência que fica.
                </p>
              </div>
            </div>

            {/* B2C Content blocks */}
            <div className="p-8 md:p-12 space-y-12">
              {/* Gastronomy block */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">A experiência</p>
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Gastronomia na brasa,<br />feita com fogo de verdade.
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Cada prato é preparado com técnica, ingredientes selecionados e o calor que só o fogo 
                    direto dá. Da entrada à sobremesa, uma jornada de sabor para lembrar.
                  </p>
                </div>
                <div className="relative rounded-xl overflow-hidden image-placeholder">
                  <img
                    src={foodDetail}
                    alt="Prato premium"
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
              </div>

              {/* Dishes grid */}
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-6">Destaques</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Ancho na brasa', tag: 'Especialidade' },
                    { name: 'Frutos do mar', tag: 'Temporada' },
                    { name: 'Risoto de camarão', tag: 'Favorito' },
                    { name: 'Sobremesa flamada', tag: 'Assinatura' },
                  ].map((dish) => (
                    <div key={dish.name} className="bg-secondary/30 rounded-lg p-4 border border-border/50">
                      <div className="w-full h-20 bg-secondary/50 rounded-md mb-3 flex items-center justify-center">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <p className="font-body text-xs font-medium text-foreground">{dish.name}</p>
                      <p className="font-body text-[10px] text-primary/70">{dish.tag}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location / CTA block */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-xl overflow-hidden image-placeholder">
                  <img
                    src={terraceImg}
                    alt="Terraço noturno"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width={1920}
                    height={960}
                  />
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-3">Visite</p>
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Canasvieiras, Florianópolis
                  </h3>
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

            {/* Label */}
            <div className="bg-secondary/30 px-4 py-2 text-center border-t border-border/50">
              <p className="font-body text-[10px] text-muted-foreground tracking-wider">
                ⟡ Preview conceitual — será desenvolvido com a identidade real do Fogo
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySection;
