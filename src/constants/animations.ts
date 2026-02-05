/**
 * Animation Configuration Constants
 * Centralized animation values for consistency and easy tweaking
 */

export const ANIMATION_DURATION = {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
    verySlow: 1.2,
} as const;

export const ANIMATION_EASING = {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    spring: { type: 'spring', stiffness: 260, damping: 20 },
} as const;

export const STAGGER_DELAY = {
    short: 0.1,
    medium: 0.2,
    long: 0.3,
} as const;

/**
 * Common Framer Motion Variants
 */
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
};

export const slideInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
};

/**
 * Hover Effects
 */
export const hoverScale = {
    scale: 1.05,
    transition: { duration: ANIMATION_DURATION.fast },
};

export const hoverLift = {
    y: -10,
    transition: { duration: ANIMATION_DURATION.fast },
};
