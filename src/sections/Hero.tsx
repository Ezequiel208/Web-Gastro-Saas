import { useState, useEffect } from 'react';
import { Menu, X,  } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onNavigate: (section: string) => void;
}

export default function Hero({ onOpenTrial, onNavigate }: HeroProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Manejo del scroll con limpieza para que la consola no chille
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'El Problema', id: 'problem' },
    { label: 'Funciones', id: 'features' },
    { label: 'Módulos', id: 'modules' },
    { label: 'Precios', id: 'pricing' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-[#0a0a0f] overflow-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <span className="text-white font-black text-xl tracking-tighter uppercase">Modelo Gastro</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => onNavigate(link.id)}
                className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={onOpenTrial}
              className="bg-white text-black px-6 py-2.5 rounded-full font-black text-xs hover:bg-red-600 hover:text-white transition-all uppercase"
            >
              Demo Gratis
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-6 pt-20 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          SaaS Gastronómico v2.0
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
          Digitalizá tu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Restaurante</span>
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
          Controlá stock, pedidos y ventas desde un solo lugar. <br className="hidden md:block"/> 
          La tecnología que tu negocio necesita para escalar sin límites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onOpenTrial}
            className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all active:scale-95 shadow-xl shadow-red-600/20 uppercase text-sm tracking-wider"
          >
            Empezar ahora
          </button>
          <button 
            onClick={() => onNavigate('features')}
            className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl border border-white/10 transition-all uppercase text-sm tracking-wider"
          >
            Ver funciones
          </button>
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 mt-24 border-t border-white/5 pt-12">
          <div>
            <div className="text-2xl md:text-4xl font-black text-white">0%</div>
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">Comisiones</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-black text-white">5 min</div>
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">Setup inicial</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl md:text-4xl font-black text-white">100%</div>
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">Tu Marca</div>
          </div>
        </div>
      </div>
    </section>
  );
}