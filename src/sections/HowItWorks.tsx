import { FileText, Palette, Wallet, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: FileText, title: 'Alta de Cuenta', desc: 'Configurás tu perfil y colores de marca en minutos.', phase: '01' },
    { icon: Palette, title: 'Carga de Datos', desc: 'Personalizás tu menú con fotos y precios actualizados.', phase: '02' },
    { icon: Wallet, title: 'Configuración de Pagos', desc: 'Conectás Mercado Pago para recibir ventas directo a tu cuenta.', phase: '03' },
    { icon: Rocket, title: 'Lanzamiento', desc: 'Compartís tu link y empezás a recibir pedidos optimizados.', phase: '04' }
  ];

  return (
    <section className="py-24 bg-[#050508] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl font-black text-white/5 group-hover:text-red-600/10 transition-colors">{s.phase}</span>
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 relative z-10 shadow-xl shadow-red-600/10 group-hover:-rotate-6 transition-transform">
                <s.icon className="text-white w-8 h-8" />
              </div>
              <h4 className="text-white text-xl font-bold mb-3">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}