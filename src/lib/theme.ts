export const theme = {
  colors: {
    // Primary Colors
    primary: {
      red: '#FF0006', // Brand red - for CTAs, accents, and key brand elements
      gray: '#171717', // Brand gray - for text and backgrounds
    },
    
    // Secondary Colors
    secondary: {
      charcoal: '#2A2A2A', // Rich dark gray for depth
      silver: '#E5E5E5',   // Light gray for subtle contrasts
      slate: '#64748B',    // Muted blue-gray for supporting elements
    },
    
    // Accent Colors
    accent: {
      gold: '#C6A87C',     // Luxury accent for special elements
      copper: '#B87456',   // Warm metallic for highlights
      pearl: '#F5F5F5',    // Off-white for clean spaces
    },
    
    // Gradient Combinations
    gradients: {
      primary: 'linear-gradient(135deg, #FF0006 0%, #B31B1E 100%)',
      dark: 'linear-gradient(135deg, #171717 0%, #2A2A2A 100%)',
      metallic: 'linear-gradient(135deg, #C6A87C 0%, #B87456 100%)',
    },
    
    // Functional Colors
    functional: {
      success: '#2D9D78',
      warning: '#FFB020',
      error: '#DC2626',
      info: '#3B82F6',
    },
    
    // Text Colors
    text: {
      primary: '#171717',
      secondary: '#64748B',
      light: '#F5F5F5',
    },
  },
  
  // Usage Recommendations
  usage: {
    primary: {
      red: 'CTAs, important buttons, key brand elements',
      gray: 'Main text, headers, backgrounds',
    },
    secondary: {
      charcoal: 'Secondary backgrounds, dark mode elements',
      silver: 'Borders, dividers, subtle backgrounds',
      slate: 'Secondary text, icons, supporting elements',
    },
    accent: {
      gold: 'Premium features, special offers, decorative elements',
      copper: 'Hover states, secondary accents',
      pearl: 'Background highlights, cards, light mode elements',
    },
  },
};

// Utility function to get nested color values
export const getColor = (path: string): string => {
  return path.split('.').reduce((obj, key) => obj[key], theme.colors) as string;
};

// Tailwind color configuration
export const tailwindColors = {
  primary: {
    DEFAULT: theme.colors.primary.red,
    dark: '#B31B1E',
  },
  secondary: {
    DEFAULT: theme.colors.primary.gray,
    light: theme.colors.secondary.silver,
  },
  accent: {
    DEFAULT: theme.colors.accent.gold,
    copper: theme.colors.accent.copper,
  },
};