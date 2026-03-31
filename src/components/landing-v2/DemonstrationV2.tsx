import { motion } from 'framer-motion';
import logoFogo from '@/assets/logo-fogo.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import restaurantAmbience from '@/assets/restaurant-ambience.jpg';
import terraceNight from '@/assets/terrace-night.jpg';
import fireGrill from '@/assets/fire-grill-close.jpg';
import grilledDish from '@/assets/grilled-dish.jpg';
import foodDetail from '@/assets/food-detail.jpg';
import canasvieirasAerial from '@/assets/canasvieiras-aerial.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.08 },
  }),
};

const postConcepts = [
  { title: 'Brasa e ambiente', role: 'abertura de percepção', image: fireGrill },
  { title: 'O salão do Fogo', role: 'prova de atmosfera', image: restaurantInterior },
  { title: 'Mesa pronta para decisão', role: 'conversão por contexto', image: restaurantAmbience },
  { title: 'Canasvieiras ao redor', role: 'lastro de localização', image: canasvieirasAerial },
  { title: 'Prato assinatura', role: 'desejo visual', image: grilledDish },
  { title: 'Detalhe que aproxima', role: 'retenção e prova', image: foodDetail },
];

const trackItems = [
  {
    title: 'Bio orientada a ação',
    body: 'Sai a descrição genérica; entra promessa curta, localização, idiomas e CTA visível.',
  },
  {
    title: 'Highlights com função',
    body: 'Menu, ambiente, avaliações, reserva e espanhol deixam de ser decoração e viram caminhos de decisão.',
  },
  {
    title: 'Feed com papéis diferentes',
    body: 'Cada peça trabalha desejo, ambiente, localização, credibilidade ou oferta.',
  },
  {
    title: 'CTA sem ambiguidade',
    body: 'O perfil inteiro passa a empurrar para reserva, mapa ou contato com menos fricção.',
  },
];

const keywordGroups = [
  { label: 'Intenção direta', items: ['restaurante canasvieiras', 'onde comer em canasvieiras', 'parrilla florianópolis'] },
  { label: 'Camada PT + ES', items: ['anúncios separados por idioma', 'copy adaptada por público', 'landing com leitura bilíngue'] },
  { label: 'Conversão local', items: ['Google Maps', 'clique para rota', 'reserva rápida', 'retargeting de visita'] },
];

const contentModules = [
  'ambiente e mesa pronta',
  'brasa, preparo e bastidor',
  'detalhes da casa e serviço',
  'localização e atmosfera de Canasvieiras',
];

const acquisitionModules = [
  {
    title: 'Estratégia',
    body: 'leitura de demanda, ângulo da oferta, estrutura de argumento e foco comercial',
  },
  {
    title: 'Captação',
    body: 'Google Ads, Meta Ads, Maps, landing enxuta e superfícies de decisão',
  },
  {
    title: 'Conversão',
    body: 'Instagram funcional, prova social, copy bilíngue e CTAs claros',
  },
  {
    title: 'Otimização',
    body: 'leituras semanais, ajustes de mídia, teste de criativo e melhoria contínua',
  },
];

const DemonstrationV2 = () => {
  return (
    <>
      <section id="demonstracao" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-18">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
              Demonstração prática
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
              Primeiras entregas
              <span className="text-gradient-fire"> com função comercial.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Esta camada mostra como o Fogo pode se apresentar melhor para captar atenção,
              transmitir confiança e facilitar a decisão do turista entre busca, descoberta e reserva.
            </motion.p>
          </motion.div>

          <div className="grid xl:grid-cols-[1fr_0.9fr] gap-8 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="bg-[hsl(0_0%_7%)] border border-border/50 rounded-[2rem] p-6 md:p-7">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="font-display text-2xl font-bold">Reestruturação do Instagram</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">O perfil deixa de ser vitrine solta e passa a operar como canal de conversão.</p>
                </div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-primary border border-primary/25 rounded-full px-3 py-2">
                  perfil otimizado
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-background/45 border border-border/50 rounded-2xl p-5">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Antes</p>
                  <div className="flex items-center gap-4 mb-5">
                    <img src={logoFogo} alt="Fogo" className="w-16 h-16 rounded-full object-cover border border-border/60" />
                    <div>
                      <p className="font-body text-sm font-semibold">fogo.restaurante.canasvieiras</p>
                      <p className="font-body text-xs text-muted-foreground">presença atual</p>
                    </div>
                  </div>
                  <div className="space-y-2 font-body text-sm text-muted-foreground leading-relaxed">
                    <p>Bio com boa intenção, mas pouca direção operacional.</p>
                    <p>Destaques pouco funcionais para decisão rápida.</p>
                    <p>Sem hierarquia clara entre descoberta, prova e CTA.</p>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-5 shadow-fire">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-4">Depois</p>
                  <div className="flex items-center gap-4 mb-5">
                    <img src={logoFogo} alt="Fogo" className="w-16 h-16 rounded-full object-cover border-2 border-primary/35" />
                    <div>
                      <p className="font-body text-sm font-semibold">fogocanas</p>
                      <p className="font-body text-xs text-muted-foreground">Fogo · Canasvieiras</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 font-body text-sm text-secondary-foreground/85">
                    <p>Brasa, sabor e mar em Canasvieiras</p>
                    <p>Florianópolis · aberto todos os dias</p>
                    <p>Português & Español</p>
                    <p className="text-primary font-semibold">↓ Reserve sua mesa agora</p>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-5">
                    {['Menu', 'Amb', 'Ava', 'Res', 'ES'].map((item) => (
                      <div key={item} className="w-full aspect-square rounded-full border border-primary/30 bg-secondary/35 flex items-center justify-center">
                        <span className="font-body text-[10px] text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {trackItems.map((item, index) => (
                <motion.div key={item.title} variants={fadeUp} custom={index + 4} className="border-l-2 border-primary/35 pl-5 py-2">
                  <p className="font-display text-xl font-semibold mb-1">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={8} className="mt-12">
            <p className="font-body text-xs tracking-[0.24em] uppercase text-muted-foreground text-center mb-5">
              6 posts iniciais com papel no funil
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {postConcepts.map((post) => (
                <div key={post.title} className="group relative rounded-[1.35rem] overflow-hidden border border-border/50 bg-card">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-700"
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

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={9} className="mt-14">
            <div className="relative rounded-[2rem] overflow-hidden border border-primary/20 bg-card shadow-warm">
              <div className="bg-secondary/40 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <div className="bg-secondary/70 rounded-md px-3 py-1 ml-3">
                  <span className="font-body text-[10px] text-muted-foreground">fogocanas.com.br</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[26rem]">
                  <img
                    src={restaurantInterior}
                    alt="Preview do futuro site do Fogo"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={1400}
                    height={1100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                  <div className="absolute left-0 right-0 bottom-0 p-8 md:p-10">
                    <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">Mini site-demo</p>
                    <h3 className="font-display text-3xl md:text-5xl font-bold leading-[0.96] max-w-lg mb-4">
                      O lugar que o turista
                      <br />
                      entende rápido.
                    </h3>
                    <p className="font-body text-sm md:text-base text-secondary-foreground/80 max-w-md leading-relaxed">
                      Ambiente, localização, prova visual, leitura bilíngue e rota clara para reserva sem ruído.
                    </p>
                  </div>
                </div>

                <div className="p-7 md:p-8 bg-background/55 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { title: 'Menu', text: 'curto, visual e acessível' },
                      { title: 'Ambiente', text: 'fotos reais do Fogo' },
                      { title: 'Reserva', text: 'CTA visível e rápido' },
                      { title: 'Español', text: 'versão pensada para o turista' },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-border/55 bg-secondary/25 p-4">
                        <p className="font-display text-lg font-semibold mb-1">{item.title}</p>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <p className="font-body text-[11px] tracking-[0.18em] uppercase text-primary">Por que essa camada importa</p>
                    <div className="space-y-3">
                      {[
                        'concentra a informação crítica fora do feed',
                        'vira destino para mídia paga e busca local',
                        'permite PT + ES sem depender só do Instagram',
                      ].map((item) => (
                        <div key={item} className="flex gap-3 items-start">
                          <span className="text-primary mt-1">→</span>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="captacao" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
                Captação e mídia
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-7">
                Tráfego com arquitetura,
                <br />
                <span className="text-gradient-fire">não com improviso.</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-secondary-foreground/80 leading-relaxed text-base md:text-lg max-w-2xl">
                O tráfego pago entra para interceptar demanda real: quem já procura onde comer,
                quem ainda está escolhendo e quem precisa de um último sinal de confiança para decidir.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="bg-card border border-border/55 rounded-[1.8rem] p-6 md:p-7">
              <p className="font-body text-[11px] tracking-[0.24em] uppercase text-primary mb-6">Arquitetura sugerida</p>
              <div className="space-y-5">
                {keywordGroups.map((group) => (
                  <div key={group.label} className="border-l-2 border-primary/30 pl-5">
                    <p className="font-display text-xl font-semibold mb-3">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-border/60 bg-secondary/35 px-3 py-1.5 text-xs text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative min-h-[30rem]">
          <img
            src={fireGrill}
            alt="Brasa do Fogo"
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
                  Diferencial bilíngue
                </motion.p>
                <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-6xl font-bold leading-[0.97] mb-5">
                  Falar com o turista
                  <br />
                  na língua dele
                  <span className="text-gradient-fire"> reduz fricção.</span>
                </motion.h2>
                <motion.p variants={fadeUp} custom={2} className="font-body text-base md:text-lg text-secondary-foreground/84 leading-relaxed">
                  Em Canasvieiras, falar espanhol reduz esforço de compreensão, aumenta confiança
                  e melhora a chance de o turista escolher o Fogo em vez de seguir para outra opção.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
                Produção de conteúdo
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-7">
                Conteúdo real vale mais
                <br />
                que presença genérica.
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-secondary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                O conteúdo precisa mostrar o que o turista quer validar rápido: ambiente, clima,
                qualidade percebida, localização e desejo. Cada ativo visual deve ajudar a vender a visita.
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
              <img src={restaurantAmbience} alt="Ambiente do Fogo" className="rounded-[1.2rem] h-56 w-full object-cover border border-border/50" loading="lazy" width={900} height={700} />
              <img src={terraceNight} alt="Terraço do Fogo" className="rounded-[1.2rem] h-56 w-full object-cover border border-border/50" loading="lazy" width={900} height={700} />
              <img src={grilledDish} alt="Prato do Fogo" className="rounded-[1.2rem] h-64 w-full object-cover border border-border/50" loading="lazy" width={900} height={900} />
              <img src={restaurantInterior} alt="Salão do Fogo" className="rounded-[1.2rem] h-64 w-full object-cover border border-border/50" loading="lazy" width={900} height={900} />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="estrutura" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/25 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4">
              Estrutura completa
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
              Menos lista de serviços.
              <br />
              <span className="text-gradient-fire">Mais sistema operacional.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estratégia, captação, conversão e otimização operam como um sistema. Cada frente existe para mover demanda e aumentar clareza comercial.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {acquisitionModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 3}
                className="rounded-[1.5rem] border border-border/55 bg-card p-6 md:p-7"
              >
                <p className="font-body text-[10px] uppercase tracking-[0.24em] text-primary mb-3">Módulo {index + 1}</p>
                <h3 className="font-display text-2xl font-bold mb-3">{module.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{module.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DemonstrationV2;
