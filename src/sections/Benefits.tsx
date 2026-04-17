import { Smartphone, DollarSign, Palette, Lock } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Smartphone, title: 'Gestión Móvil', desc: 'Panel admin optimizado. Manejá precios y stock desde cualquier lugar.' },
    { icon: DollarSign, title: 'Sin Comisiones', desc: 'No pagás por cada venta. La rentabilidad es 100% tuya.' },
    { icon: Palette, title: 'Marca Blanca', desc: 'Tus clientes ven tu logo y tus colores. El sistema es invisible.' },
    { icon: Lock, title: 'Sin Ataduras', desc: 'Suscripción mensual simple. Cancelás cuando quieras sin penalidades.' }
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-6 leading-tight">VOS MANDÁS, <br/><span className="text-gradient">NOSOTROS PONEMOS LA TECH.</span></h2>
            <p className="text-gray-500 text-lg">Modelo Gastro SaaS te da las herramientas que antes solo tenían las grandes cadenas, pero a una fracción del costo.</p>
          </div>
          <div className="grid gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-all group">
                <div className="bg-red-600/10 p-4 rounded-xl group-hover:bg-red-600 transition-colors">
                  <b.icon className="text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-1">{b.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}