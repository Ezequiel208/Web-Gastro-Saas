import { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactCTAProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactCTA({ isOpen, onClose }: ContactCTAProps) {
  // Estado simple para controlar los inputs
  const [form, setForm] = useState({
    nombre: '',
    restaurante: '',
    email: '',
    mensaje: ''
  });

  if (!isOpen) return null;

  // Manejador único para todos los campos - Cortito y al pie
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Armamos el texto para WhatsApp
    const text = `¡Buenas! Vengo de la web de Modelo Gastro SaaS.\n\n` +
                 `Me interesa una demo para el restaurante: *${form.restaurante}*.\n` +
                 `Mi nombre es ${form.nombre} y mi email es ${form.email}.\n\n` +
                 `Consulta: ${form.mensaje || 'Sin consultas adicionales.'}`;

    window.open(`https://wa.me/541122334455?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-[#111] border border-white/10 p-8 rounded-[2rem] max-w-lg w-full relative">
        
        {/* Botón de cierre */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Pedí tu Demo</h2>
          <p className="text-gray-500 mt-2">Probá el sistema completo por 15 días, gratis.</p>
        </div>

        <form onSubmit={handleSend} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input 
              required
              name="nombre"
              placeholder="Tu nombre"
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-red-600 outline-none transition-all"
            />
            <input 
              required
              name="restaurante"
              placeholder="Local / Resto"
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-red-600 outline-none transition-all"
            />
          </div>
          
          <input 
            required
            name="email"
            type="email"
            placeholder="Tu email de contacto"
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-red-600 outline-none transition-all"
          />
          
          <textarea 
            name="mensaje"
            placeholder="¿Alguna duda o pedido especial?"
            onChange={handleChange}
            rows={3}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-red-600 outline-none transition-all resize-none"
          />

          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all active:scale-95"
          >
            SOLICITAR ACCESO <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}