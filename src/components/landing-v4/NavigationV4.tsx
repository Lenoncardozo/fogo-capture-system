import { useEffect, useState } from 'react';
import logoFogo from '@/assets/logo-fogo.jpg';

const navItems = [
  { label: 'Contexto', href: '#contexto' },
  { label: 'Estratégia', href: '#estrategia' },
  { label: 'Demonstração', href: '#demonstracao' },
  { label: 'Captação', href: '#captacao' },
  { label: 'Métricas', href: '#metricas' },
  { label: 'Fechamento', href: '#fechamento' },
];

const NavigationV4 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const offset = 72;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? 'bg-background/92 backdrop-blur-xl border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="flex items-center gap-3 min-w-0 rounded-md touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img src={logoFogo} alt="Fogo - Parrilla & Café" className="size-9 rounded-full object-cover" />
          <div className="min-w-0">
            <span className="font-display text-lg tracking-[0.18em] text-primary font-semibold block leading-none">
              FOGO
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Fogo · Canasvieiras
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors tracking-wide rounded-md touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground rounded-md p-1 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/96 backdrop-blur-xl border-b border-border/60 px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors rounded-md touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationV4;
