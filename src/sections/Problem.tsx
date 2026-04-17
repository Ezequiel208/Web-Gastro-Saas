import { MessageSquareX, BarChart3, Clock, ArrowDown } from 'lucide-react';

interface ProblemProps {
  onNavigate: (section: string) => void;
}

export default function Problem({ onNavigate }: ProblemProps) {
  const problems = [
    {
      id: 'prob-1',
      icon: MessageSquareX,
      title: 'Pedidos Caóticos',
      description: 'WhatsApp saturado, comandas que se pierden y clientes esperando. El ruido del servicio te está sacando rentabilidad.',
      color: 'from-red-500/10 to-transparent',
    },
    {
      id: 'prob-2',
      icon: BarChart3,
      title: 'Cero Métricas',
      description: '¿Sabés qué plato rinde más hoy? No tener datos claros es como manejar a ciegas. Lo que no se mide, no crece.',
      color: 'from-orange-500/10 to-transparent',
    },
    {
      id: 'prob-3',
      icon: Clock,
      title: 'Tiempo Perdido',
      description: 'Actualizar precios a mano y procesos manuales que queman a tu equipo. El tiempo que perdés es plata que se va.',
      color: 'from-yellow-500/10 to-transparent',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-[#0a0a0f] border-y border-white/5 relative overflow-hidden">
      {/* Glow de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            ¿Tu restaurante está <br />
            <span className="text-red-600 italic">fuera de control?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            La falta de digitalización mata la rentabilidad. Detectamos los tres problemas críticos que frenan tu crecimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((p) => (
            <div 
              key={p.id} 
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradiente de fondo al hacer hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-600/20 group-hover:-rotate-3 transition-transform">
                  <p.icon className="text-white w-8 h-8" />
                </div>
                
                <h3 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('features')}
            className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors uppercase text-xs font-black tracking-[0.3em]"
          >
            Basta de caos. Ver la solución <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}