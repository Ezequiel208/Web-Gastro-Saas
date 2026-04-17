import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

export default function Modules({ onOpenTrial }: { onOpenTrial: () => void }) {
  const [selected, setSelected] = useState(1);

  const modules = [
    { id: 1, title: 'Carta Digital', subtitle: 'Optimizado para mobile', desc: 'Menú interactivo con fotos HD y categorías ilimitadas.', features: ['QR Propio', 'Actualización al instante', 'Fotos de alta calidad'] },
    { id: 2, title: 'Stock & Almacén', subtitle: 'Control total de insumos', desc: 'Alertas de stock bajo y descuento automático por cada venta.', features: ['Alertas críticas', 'Gestión de proveedores', 'Historial de movimientos'] },
    { id: 3, title: 'Fidelización', subtitle: 'Hacé que vuelvan', desc: 'Sistema de puntos y recompensas automático para tus clientes.', features: ['Billetera de puntos', 'Cupones VIP', 'Estadísticas de retorno'] }
  ];

  return (
    <section id="modules" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-4xl font-black mb-16 tracking-tight">MÓDULOS <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">CORE</span></h2>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            {modules.map((m) => (
              <button key={m.id} onClick={() => setSelected(m.id)} className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all ${selected === m.id ? 'bg-red-600 border-red-600 text-white' : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/10'}`}>
                <span className="font-bold text-lg">{m.title}</span>
                <ChevronRight className={selected === m.id ? 'rotate-90 transition-transform' : ''} />
              </button>
            ))}
          </div>
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-10 rounded-3xl">
            {modules.map((m) => m.id === selected && (
              <div key={m.id} className="animate-entrance">
                <span className="text-red-500 font-bold text-xs uppercase tracking-widest">{m.subtitle}</span>
                <p className="text-gray-400 mt-6 text-lg leading-relaxed">{m.desc}</p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {m.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white">
                      <Check className="text-red-500 w-4 h-4" /> {f}
                    </div>
                  ))}
                </div>
                <button onClick={onOpenTrial} className="mt-10 bg-white text-black px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">PROBAR AHORA</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}