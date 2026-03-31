import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.08 },
  }),
};

const ClosingV3 = () => {
  return (
    <section id="fechamento" className="py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center">
          <motion.div variants={fadeUp} custom={0} className="glow-line w-20 mx-auto mb-10" />

          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Não se trata de <span className="text-muted-foreground italic font-normal">marketing por vaidade</span>.
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} className="font-body text-lg md:text-xl text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-5">
            Trata-se de construir um sistema que traz mais gente, com mais frequência,
            e transforma presença em faturamento.
          </motion.p>

          <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground mb-10 max-w-xl mx-auto">
            O Fogo tem a localização e o potencial. Esta proposta é o sistema que falta.
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="max-w-[420px] mx-auto mb-14">
            <a
              href="#assinatura"
              className="block w-full bg-gradient-fire text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-fire text-base md:text-lg tracking-wide"
            >
              Aprovar direção e iniciar a fundação
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          id="assinatura"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="grid md:grid-cols-2 gap-8 pt-10 border-t border-border/50"
        >
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Operador</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Gabriel</h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
              Estratégia, aquisição e direção editorial aplicadas a negócios locais
              que precisam vender melhor, não só parecer mais presentes.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Estrutura</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-primary">A Última Ideia</h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl md:ml-auto">
              Operação criativa com visão de negócio: posicionamento, tráfego, conteúdo e superfícies digitais
              organizados para gerar mais captação e mais clareza comercial.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="font-body text-xs text-muted-foreground/55 tracking-wider">
            © 2026 A Última Ideia · Proposta confidencial para Fogo, Canasvieiras
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingV3;
