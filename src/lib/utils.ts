import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases de Tailwind de forma inteligente, resolviendo conflictos
 * y permitiendo lógica condicional limpia.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}