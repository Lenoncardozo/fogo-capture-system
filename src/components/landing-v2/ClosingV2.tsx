import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.08 },
  }),
};

const ClosingV2 = () => {
  return (
    <section id="fechamento" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center">
          <motion.div variants={fadeUp} custom={0} className="glow-line w-24 mx-auto mb-12" />

          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-[0.97] mb-8">
            Não é marketing por vaidade.
            <br />
            É estrutura para
            <span className="text-gradient-fire"> disputar a decisão.</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} className="font-body text-xl text-secondary-foreground/82 leading-relaxed max-w-3xl mx-auto mb-6">
            O Fogo já parece um lugar que merece visita. O trabalho proposto é transformar essa percepção
            em um sistema que aumenta descoberta, confiança e entrada de clientes.
          </motion.p>

          <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground max-w-2xl mx-auto mb-12">
            O Fogo já tem localização, atmosfera e potencial de desejo. O que falta é uma estrutura que transforme isso em aquisição recorrente.
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#assinatura"
              className="bg-gradient-fire text-primary-foreground font-body font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all shadow-fire text-sm tracking-wide"
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
          className="grid md:grid-cols-2 gap-10 pt-12 border-t border-border/50"
        >
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Operador</p>
            <h3 className="font-display text-3xl font-bold mb-3">Gabriel</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
              Estratégia, aquisição e direção editorial aplicadas a negócios locais que precisam vender melhor,
              não só parecer mais presentes.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-body text-[11px] uppercase tracking-[0.22em] text-primary mb-3">Estrutura</p>
            <h3 className="font-display text-3xl font-bold mb-3 text-primary">A Última Ideia</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md md:ml-auto">
              Operação criativa com visão de negócio: posicionamento, tráfego, conteúdo e superfícies digitais
              organizados para gerar mais captação e mais clareza comercial.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <p className="font-body text-xs text-muted-foreground/55 tracking-wider">
            © 2026 A Última Ideia · Proposta confidencial para Fogo, Canasvieiras
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingV2;
