interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl shadow-lg shadow-red-600/20" />
            <span className="text-white font-black text-2xl tracking-tighter uppercase">
              Modelo Gastro SaaS
            </span>
          </div>

          {/* Navegación Rápida */}
          <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-gray-500">
            <button 
              onClick={() => onNavigate('problem')} 
              className="hover:text-white transition-colors"
            >
              El Problema
            </button>
            <button 
              onClick={() => onNavigate('features')} 
              className="hover:text-white transition-colors"
            >
              Funciones
            </button>
            <button 
              onClick={() => onNavigate('pricing')} 
              className="hover:text-white transition-colors"
            >
              Planes
            </button>
          </div>
        </div>

        {/* Línea inferior de créditos */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-widest">
            © {currentYear} Todos los derechos reservados.
          </p>
          
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            Desarrollado y Distribuido por{" "}
            <a 
              href="https://github.com/Ezequiel208" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-red-500 transition-all border-b border-red-500/30 hover:border-red-500 pb-0.5"
            >
              Ezequiel Paez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}