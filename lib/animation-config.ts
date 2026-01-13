// Animation Configuration Guide
// ===============================
// This file documents all animation configurations used throughout the portfolio

// GSAP ScrollTrigger Configuration
// ================================
export const scrollTriggerConfig = {
  // Hero Section Parallax
  hero: {
    scrub: 0.5, // Smooth scroll sync
    trigger: 'start',
    markers: false,
  },
  
  // Project Timeline
  projects: {
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out',
  },
  
  // Skills Cards
  skills: {
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out',
  },
  
  // Achievement Cards
  achievements: {
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out',
  },
}

// Framer Motion Variants
// ======================
export const animationVariants = {
  // Letter-by-letter animation
  letter: {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.03,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  },

  // Word-by-word animation
  text: {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  },

  // Staggered item animation
  item: {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  },
}

// Lenis Configuration
// ===================
export const lenisConfig = {
  duration: 1.2, // Scroll duration in seconds
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
}

// Three.js/R3F Configuration
// ==========================
export const r3fConfig = {
  // Camera settings
  camera: {
    position: [0, 0, 8],
    fov: 45,
  },

  // Lighting
  lights: {
    ambient: { intensity: 0.2 },
    pointLight1: { position: [10, 10, 10], intensity: 1, color: '#00ffaa' },
    pointLight2: { position: [-10, -10, -10], intensity: 0.5, color: '#ff00aa' },
  },

  // Animated Sphere
  sphere: {
    scale: 2.5,
    geometry: { args: [1, 4] },
    material: {
      color: '#00ffaa',
      distort: 0.4,
      speed: 1.5,
      roughness: 0.2,
      metalness: 0.8,
    },
  },

  // Float settings
  float: {
    speed: 1.5,
    rotationIntensity: 1,
    floatIntensity: 2,
  },
}

// CSS Animation Keyframes
// ======================
export const cssAnimations = {
  // Reveal animation (scroll-based)
  reveal: `
    @keyframes reveal {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,

  // Glow pulse effect
  glowPulse: `
    @keyframes glow-pulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 255, 170, 0.3);
      }
      50% {
        box-shadow: 0 0 40px rgba(0, 255, 170, 0.5);
      }
    }
  `,

  // Float animation
  float: `
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `,
}

// Color Scheme
// ============
export const colors = {
  // Background
  background: 'oklch(0.09 0.01 240)',     // Deep navy
  foreground: 'oklch(0.97 0 0)',           // Off white
  card: 'oklch(0.12 0.01 240)',            // Slightly lighter navy

  // Primary Colors
  accent: 'oklch(0.75 0.18 165)',          // Cyan green
  accentSecondary: 'oklch(0.7 0.2 320)',   // Pink purple

  // Secondary Colors
  muted: 'oklch(0.18 0.01 240)',           // Light navy
  mutedForeground: 'oklch(0.65 0 0)',      // Gray
  border: 'oklch(0.25 0.01 240)',          // Subtle gray

  // Effects
  shadow: {
    glow: 'rgba(0, 255, 170, 0.3)',
    glowSm: 'rgba(0, 255, 170, 0.2)',
  },
}

// Responsive Breakpoints
// =======================
export const breakpoints = {
  sm: '640px',  // Small phones
  md: '768px',  // Tablets
  lg: '1024px', // Desktops
  xl: '1280px', // Large screens
}

// Typography
// ===========
export const typography = {
  fontFamily: {
    sans: '"Inter", "Geist", "Geist Fallback", system-ui, sans-serif',
    mono: '"Geist Mono", "Geist Mono Fallback", monospace',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
}

// Button Styles
// =============
export const buttonStyles = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--accent-foreground)',
    padding: '1rem 2rem',
    borderRadius: '9999px', // Full round
    fontSize: '0.875rem',
    fontWeight: 600,
  },

  secondary: {
    background: 'transparent',
    color: 'var(--foreground)',
    border: '1px solid var(--border)',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
}

// Timing Functions (Easing)
// ==========================
export const easing = {
  // Custom cubic bezier easing
  smooth: [0.25, 0.4, 0.25, 1],
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeInOut: [0.4, 0, 0.2, 1],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
  easeInOutQuart: [0.76, 0, 0.24, 1],
}

// Animation Delays
// ================
export const delays = {
  // Stagger delays (in seconds)
  sm: 0.05,      // Small items
  md: 0.1,       // Medium items
  lg: 0.15,      // Large items
  xl: 0.2,       // Extra large items

  // Section delays
  introDelay: 0.8,
  sectionDelay: 1.2,
}

// Export all configurations
// =========================
export default {
  scrollTriggerConfig,
  animationVariants,
  lenisConfig,
  r3fConfig,
  cssAnimations,
  colors,
  breakpoints,
  typography,
  buttonStyles,
  easing,
  delays,
}
