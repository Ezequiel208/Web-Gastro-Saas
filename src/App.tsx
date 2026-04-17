import { useState, useRef, useEffect } from 'react';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Features from './sections/Features';
import Modules from './sections/Modules';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import Pricing from './sections/Pricing';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';
import './App.css';

/**
 * Modelo Gastro SaaS - Main Entry Point
 * Refactored for clean architecture and production readiness.
 */

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Manejo de navegación suave (Smooth Scroll) optimizado
  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    
    const offset = 80; // Compensación por el header fijo
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // Accesibilidad: Cerrar modal con la tecla ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsTrialModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div ref={mainRef} className="app-container bg-[#0a0a0f] text-white antialiased">
      <main role="main">
        <Hero onOpenTrial={() => setIsTrialModalOpen(true)} onNavigate={handleNavigate} />
        
        <section id="problem">
          <Problem onNavigate={handleNavigate} />
        </section>

        <section id="features">
          <Features onNavigate={handleNavigate} />
        </section>

        <section id="modules">
          <Modules onOpenTrial={() => setIsTrialModalOpen(true)} />
        </section>

        <HowItWorks />
        <Benefits />

        <section id="pricing">
          <Pricing onOpenTrial={() => setIsTrialModalOpen(true)} />
        </section>

        <ContactCTA isOpen={isTrialModalOpen} onClose={() => setIsTrialModalOpen(false)} />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;