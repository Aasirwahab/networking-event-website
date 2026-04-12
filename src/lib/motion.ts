/**
 * Shared Framer Motion variants used across multiple sections.
 * Centralised here to avoid duplicate object allocations per component.
 */

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
} as const;

/** Shared viewport config for whileInView triggers (observe once, with margin). */
export const viewportOnce = { once: true, margin: '-100px' as const };
