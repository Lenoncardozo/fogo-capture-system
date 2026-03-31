import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, delay: i * 0.08 },
  }),
};

const ClosingEs = () => {
  return (
    <section id="cierre" className="scroll-mt-24 py-16 md:py-20 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center">
          <motion.div variants={fadeUp} custom={0} className="glow-line w-16 mx-auto mb-8" />

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            No se trata de <span className="text-muted-foreground italic font-normal">marketing por vanidad</span>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="font-body text-lg md:text-xl text-secondary-foreground/82 leading-relaxed max-w-2xl mx-auto mb-4"
          >
            Se trata de organizar captación, prueba y conversión para que Fogo aparezca mejor
            y transforme más decisiones en mesas ocupadas.
          </motion.p>

          <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            El contexto ya existe. La base es el próximo paso.
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="max-w-[360px] mx-auto mb-12">
            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-fire text-primary-foreground shadow-fire hover:opacity-90 transition-opacity rounded-xl px-6 py-3.5 touch-manipulation"
            >
              <a
                href="https://wa.me/5548996496950"
                target="_blank"
                rel="noreferrer"
              >
                Aprobar dirección e iniciar la base
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <Separator className="mb-10 opacity-55" />

        <motion.div
          id="firma"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Operador</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Gabriel Lopes</h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
              Estrategia, adquisición y dirección editorial aplicadas a negocios locales
              que necesitan vender mejor, no solo parecer más presentes.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Estructura</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-primary">A Última Ideia</h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl md:ml-auto">
              Operación creativa con visión de negocio: posicionamiento, tráfico, contenido y superficies digitales
              organizadas para generar más captación y más claridad comercial.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="font-body text-xs text-muted-foreground/55 tracking-wider">
            © 2026 A Última Ideia · Propuesta confidencial para Fogo, Canasvieiras
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingEs;
