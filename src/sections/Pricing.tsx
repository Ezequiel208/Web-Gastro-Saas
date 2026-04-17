import { Check, Star } from 'lucide-react';

export default function Pricing({ onOpenTrial }: { onOpenTrial: () => void }) {
  const plans = [
    { name: 'Plan Full Digital', price: '$20.000', badge: 'Básico', features: ['Hasta 60 productos', 'Pedidos Online', 'Soporte vía Email', 'Menú QR Autogestionable'], highlight: false },
    { name: 'Plan Expert OS', price: '$35.000', badge: 'Recomendado', features: ['Productos Ilimitados', 'Multi-sucursal', 'Soporte VIP WhatsApp 24/7', 'Gestión de Stock Avanzada', 'Sistema de Puntos'], highlight: true }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-white text-4xl font-black mb-4 uppercase">Planes de Membresía</h2>
        <p className="text-gray-500">Elegí el plan que mejor se adapte al tamaño de tu negocio.</p>
      </div>
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {plans.map((p, i) => (
          <div key={i} className={`relative p-12 rounded-[40px] border transition-all duration-500 ${p.highlight ? 'border-red-600 bg-red-600/5 shadow-2xl shadow-red-600/10 scale-105 z-10' : 'border-white/10'}`}>
            {p.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-xs font-black uppercase flex items-center gap-2"><Star className="w-3 h-3 fill-white" /> {p.badge}</div>}
            <h3 className="text-white text-2xl font-bold mb-6">{p.name}</h3>
            <div className="text-5xl font-black text-white mb-10">{p.price}<span className="text-sm text-gray-500 font-normal">/mes</span></div>
            <ul className="space-y-5 mb-12 text-left">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-4 text-gray-400">
                  <Check className="text-red-500 w-5 h-5 flex-shrink-0" /> <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <button onClick={onOpenTrial} className={`w-full py-5 rounded-2xl font-black transition-all ${p.highlight ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>EMPEZAR AHORA</button>
          </div>
        ))}
      </div>
    </section>
  );
}