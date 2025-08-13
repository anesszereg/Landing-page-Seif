import { Variants } from 'framer-motion';

// Fade up animation - elements fade in and slide up from below
export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: 0.1 * custom,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Scale animation - elements start small and grow into place
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    scale: 1,
    transition: { 
      delay: 0.1 * custom,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Slide in from left
export const slideFromLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: 0.15 * custom,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Slide in from right
export const slideFromRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: 0.15 * custom,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Stagger animation for children - each child animates one after another
export const staggerChildrenVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Rotate and scale animation - element rotates and grows
export const rotateScaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -10
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      delay: 0.1 * custom,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Springy effect - bounces into place
export const springyVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      delay: 0.1 * custom,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  })
};
