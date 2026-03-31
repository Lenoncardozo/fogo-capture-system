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

const ClosingV4 = () => {
  return (
    <section id="fechamento" className="scroll-mt-24 py-16 md:py-20 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center">
          <motion.div variants={fadeUp} custom={0} className="glow-line w-16 mx-auto mb-8" />

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-balance text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Não se trata de <span className="text-muted-foreground italic font-normal">marketing por vaidade</span>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="font-body text-lg md:text-xl text-secondary-foreground/82 leading-relaxed max-w-2xl mx-auto mb-4"
          >
            Trata-se de organizar captação, prova e conversão para o Fogo aparecer melhor
            e transformar mais decisão em mesa ocupada.
          </motion.p>

          <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            O contexto já existe. A fundação é o próximo passo.
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
                Aprovar direção e iniciar a fundação
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <Separator className="mb-10 opacity-55" />

        <motion.div
          id="assinatura"
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

        <div className="mt-12 text-center">
          <p className="font-body text-xs text-muted-foreground/55 tracking-wider">
            © 2026 A Última Ideia · Proposta confidencial para Fogo, Canasvieiras
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingV4;
