import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  onEnter?: () => void;
}

export const useScrollTrigger = <T extends HTMLElement>(
  callback: (element: T) => void,
  options: ScrollTriggerOptions = {}
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ejecutamos la animación
    callback(element);

    const st = ScrollTrigger.create({
      trigger: options.trigger || element,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub ?? false,
      pin: options.pin ?? false,
      onEnter: options.onEnter,
    });

    return () => {
      if (st) st.kill(); // Matamos el trigger para limpiar la consola
    };
  }, [callback, options.trigger, options.start, options.end, options.scrub, options.pin, options.onEnter]);

  return elementRef;
};