import { LayoutDashboard, ShoppingCart, MapPin, Tag, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onNavigate: (section: string) => void;
}

export default function Features({ onNavigate }: FeaturesProps) {
  const features = [
    {
      id: 'feat-dash',
      icon: LayoutDashboard,
      title: 'Dashboard Pro',
      desc: 'Analizá tu rendimiento con métricas en vivo y reportes de ventas detallados.',
      active: true,
    },
    {
      id: 'feat-orders',
      icon: ShoppingCart,
      title: 'Pedidos Real-Time',
      desc: 'Optimizá la recepción con un carrito intuitivo y confirmación instantánea.',
      active: true,
    },
    {
      id: 'feat-multi',
      icon: MapPin,
      title: 'Múltiples Sucursales',
      desc: 'Escalá tu negocio administrando varios locales desde un solo panel central.',
      active: true,
    },
    {
      id: 'feat-promo',
      icon: Tag,
      title: 'Promociones Dinámicas',
      desc: 'Impulsá tu facturación creando combos y descuentos en segundos.',
      active: true,
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div 
              key={f.id} 
              className="group border border-white/10 p-8 rounded-3xl hover:border-red-500/50 transition-all bg-white/[0.02]"
            >
              <div className="mb-6 inline-block">
                <f.icon className="text-red-500 w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {f.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
                  Módulo Activo
                </span>
                {f.active && (
                  <div className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Card de Acción Final */}
          <div className="lg:col-span-4 mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-[2.5rem] p-1">
            <div className="bg-[#0a0a0f] rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                  ¿Listo para escalar?
                </h3>
                <p className="text-gray-400">
                  Unite a la red hoy y llevá tu negocio al nivel digital que merece. Sin vueltas.
                </p>
              </div>
              <button
                onClick={() => onNavigate('pricing')}
                className="group bg-white text-black px-10 py-5 rounded-2xl font-black flex items-center gap-3 hover:bg-red-500 hover:text-white transition-all active:scale-95"
              >
                VER PLANES <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}