// =============================================================================
// Configuración del Sitio - Modelo Gastro SaaS
// Edita este archivo para personalizar todo el contenido de la landing page.
// =============================================================================

// -- Configuración General del Sitio ------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  author: string;
}

export const siteConfig: SiteConfig = {
  title: "Modelo Gastro SaaS",
  description: "La solución definitiva para la gestión y digitalización de restaurantes modernos.",
  language: "es",
  author: "Gastro Dev Studio", // Nombre genérico para GitHub
};

// -- Configuración del Hero (Sección Principal) -------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/images/hero-bg.jpg", // Ruta genérica
  brandName: "GASTRO SAAS",
  decodeText: "GESTIÓN INTELIGENTE",
  decodeChars: "X010110SHF92",
  subtitle: "Controlá tus ventas, stock y pedidos en tiempo real con la plataforma más robusta del mercado gastronómico.",
  ctaPrimary: "Probar Demo Gratis",
  ctaPrimaryTarget: "pricing",
  ctaSecondary: "Ver Módulos",
  ctaSecondaryTarget: "modules",
  cornerLabel: "VERSIÓN 2.0",
  cornerDetail: "CLOUD BASED SYSTEM",
  navItems: [
    { label: "El Problema", sectionId: "problem", icon: "disc" },
    { label: "Funciones", sectionId: "features", icon: "play" },
    { label: "Planes", sectionId: "pricing", icon: "calendar" },
  ],
};

// -- Configuración del Footer y Datos Globales --------------------------------
export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: { label: string; sectionId: string }[];
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  copyrightText: string;
  socialLinks: SocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Modelo Gastro SaaS",
  brandDescription: "Transformando la industria gastronómica con tecnología de vanguardia y diseño centrado en el usuario.",
  quickLinksTitle: "Navegación",
  quickLinks: [
    { label: "Inicio", sectionId: "hero" },
    { label: "Módulos", sectionId: "modules" },
    { label: "Preguntas Frecuentes", sectionId: "faq" },
  ],
  contactTitle: "Contacto",
  email: "soporte@tu-dominio.com",
  phone: "+54 11 0000-0000",
  address: "Buenos Aires, Argentina",
  copyrightText: "© 2024 Modelo Gastro SaaS. Todos los derechos reservados.",
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "#" },
    { icon: "twitter", label: "Twitter", href: "#" },
  ],
};