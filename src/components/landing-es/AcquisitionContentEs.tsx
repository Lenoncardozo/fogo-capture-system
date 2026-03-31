import { motion } from 'framer-motion';
import fireGrill from '@/assets/fire-grill-close.jpg';
import restaurantImg from '@/assets/restaurant-interior.jpg';
import restaurantAmbience from '@/assets/restaurant-ambience.jpg';
import terraceImg from '@/assets/terrace-night.jpg';
import grilledDish from '@/assets/grilled-dish.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1 },
  }),
};

const contentModules = [
  'ambiente y mesa lista',
  'brasa, preparación y detrás de escena',
  'detalles de la casa y del servicio',
  'ubicación y atmósfera de Canasvieiras',
];

const AcquisitionContentEs = () => {
  return (
    <>
      <section id="captacion" className="scroll-mt-24 py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <motion.p variants={fadeUp} custom={0} className="text-sm font-body tracking-[0.25em] uppercase text-primary mb-4">
                Tráfico pago
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-8">
                Campañas con <span className="text-gradient-fire">lógica de captura.</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-secondary-foreground/80 leading-relaxed mb-10">
                No se trata de impulsar publicaciones. Se trata de construir infraestructura de adquisición
                con campañas inteligentes, segmentación local y comunicación bilingüe orientadas a mesas ocupadas.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="space-y-6">
                <div className="border-l-2 border-primary/40 pl-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-gradient-fire flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">G</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">Google Ads</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Captación por intención: "restaurante canasvieiras", "dónde comer en Floripa".
                    Google Maps optimizado. Campañas separadas en PT/ES. Segmentación geográfica enfocada.
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
                    Descubrimiento visual en Instagram y Facebook. Retargeting de visitantes.
                    Creatividades de alto impacto con video y carrusel. Públicos por ubicación y comportamiento.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} custom={4}>
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Simulación de campaña
                </p>
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
                    <p className="font-body text-[10px] text-primary/60 mb-0.5">Anuncio · fogocanas.com.br</p>
                    <p className="font-body text-sm font-semibold text-foreground">Fogo · Restaurante en Canasvieiras</p>
                    <p className="font-body text-[11px] text-muted-foreground mt-0.5">
                      Brasa, sabor y mar a pocos metros. Reserva tu mesa ahora. ★★★★★
                    </p>
                  </div>
                </div>

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
                    alt="Anuncio simulado"
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="p-3 flex justify-between items-center">
                    <p className="font-body text-[11px] text-muted-foreground">fogocanas.com.br</p>
                    <span className="font-body text-[10px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                      Reservar ahora
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[30rem]">
          <img
            src={fireGrill}
            alt="Brasa de Fogo"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1800}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/74 to-background/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="max-w-2xl">
                <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
                  Diferencial bilingüe
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-6xl font-bold leading-[0.97] mb-5">
                  Hablarle al turista
                  <br />
                  en su idioma <span className="text-gradient-fire">reduce fricción.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="font-body text-base md:text-lg text-secondary-foreground/84 leading-relaxed">
                  En Canasvieiras, hablar español reduce el esfuerzo de comprensión, aumenta la confianza
                  y mejora la probabilidad de que el turista elija Fogo en lugar de seguir hacia otra opción.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
                Producción de contenido
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-7">
                El contenido real vale más
                <br />
                que una presencia genérica.
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-secondary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                El contenido tiene que mostrar lo que el turista necesita validar rápido: ambiente, clima,
                calidad percibida, ubicación y deseo. Cada pieza visual debe ayudar a vender la visita.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="grid sm:grid-cols-2 gap-3">
                {contentModules.map((item) => (
                  <div key={item} className="rounded-xl border border-border/55 bg-secondary/25 px-4 py-4 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4} className="grid grid-cols-2 gap-3">
              <img src={restaurantImg} alt="Ambiente de Fogo" className="rounded-[1.2rem] h-56 w-full object-cover border border-border/50" loading="lazy" width={900} height={700} />
              <img src={terraceImg} alt="Terraza de Fogo" className="rounded-[1.2rem] h-56 w-full object-cover border border-border/50" loading="lazy" width={900} height={700} />
              <img src={grilledDish} alt="Plato de Fogo" className="rounded-[1.2rem] h-64 w-full object-cover border border-border/50" loading="lazy" width={900} height={900} />
              <img src={restaurantAmbience} alt="Salón de Fogo" className="rounded-[1.2rem] h-64 w-full object-cover border border-border/50" loading="lazy" width={900} height={900} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcquisitionContentEs;
