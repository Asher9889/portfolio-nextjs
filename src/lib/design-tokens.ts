export const tokens = {
  colors: {
    // Primary brand colors
    gold: {
      main: "#E8B84B",
      soft: "rgba(232, 184, 75, 0.12)",
      glow: "rgba(232, 184, 75, 0.25)",
    },
    coral: {
      main: "#E8553A",
      soft: "rgba(232, 85, 58, 0.12)",
      glow: "rgba(232, 85, 58, 0.25)",
    },
    emerald: {
      main: "#34D399",
      soft: "rgba(52, 211, 153, 0.12)",
      glow: "rgba(52, 211, 153, 0.25)",
    },
    sapphire: {
      main: "#60A5FA",
      soft: "rgba(96, 165, 250, 0.12)",
      glow: "rgba(96, 165, 250, 0.25)",
    },
    cyan: {
      main: "#22D3EE",
      soft: "rgba(34, 211, 238, 0.12)",
      glow: "rgba(34, 211, 238, 0.25)",
    },
    rose: {
      main: "#FB7185",
      soft: "rgba(251, 113, 133, 0.12)",
      glow: "rgba(251, 113, 133, 0.25)",
    },
    violet: {
      main: "#A78BFA",
      soft: "rgba(167, 139, 250, 0.12)",
      glow: "rgba(167, 139, 250, 0.25)",
    },

    // Neutral colors - Dark theme
    bgDark: "#070708",
    surfaceDark: "#0c0c10",
    textPrimary: "#FAFAFA",
    textSecondary: "rgba(250,250,250,0.55)",
    textMuted: "rgba(250,250,250,0.25)",
    borderDark: "rgba(255,255,255,0.06)",
    borderDarkHover: "rgba(255,255,255,0.15)",

    // Neutral colors - Light theme
    bgLight: "#fdfdfd",
    surfaceLight: "#ffffff",
    textPrimaryLight: "#070708",
    textSecondaryLight: "rgba(7,7,8,0.55)",
    textMutedLight: "rgba(7,7,8,0.25)",
    borderLight: "rgba(0,0,0,0.05)",

    // Semantic colors
    accentCoral: "#E8553A",
    accentEmerald: "#34D399",
    accentSapphire: "#60A5FA",
    accentGold: "#E8B84B",
  },

  spacing: {
    sectionX: "clamp(1.5rem, 5vw, 7rem)",
    sectionY: "8rem",
    cardInner: "clamp(1.5rem, 3vw, 3rem)",
    stack: "1.5rem",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },

  rounding: {
    pill: "9999px",
    cardLg: "2rem",
    cardMd: "1.5rem",
    cardSm: "1rem",
    icon: "0.75rem",
    full: "9999px",
  },

  typography: {
    display: {
      fontFamily: "Geist, Arial, Helvetica, sans-serif",
      fontWeight: 900,
      lineHeight: 0.8,
      letterSpacing: "-0.05em",
    },
    headline: {
      fontFamily: "Geist, Arial, Helvetica, sans-serif",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
    },
    title: {
      fontFamily: "Geist, Arial, Helvetica, sans-serif",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    body: {
      fontFamily: "Geist, Arial, Helvetica, sans-serif",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    label: {
      fontFamily: "Geist Mono, monospace",
      fontWeight: 500,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },

  elevation: {
    // Dark theme elevations
    cardRest: "0 8px 40px rgba(0,0,0,0.3)",
    cardHover: (accentGlow: string) => `0 0 80px ${accentGlow}, 0 25px 60px rgba(0,0,0,0.5)`,
    tiltCardRest: "0 4px 24px -8px rgba(0,0,0,0.5)",
    tiltCardHover: (accentGlow: string) => `0 20px 60px -15px ${accentGlow}`,
    statCardHover: (accent: string) => `0 0 0 1px ${accent}`,

    // Light theme - flat, no shadows
    light: "none",
  },

  transitions: {
    fast: "150ms ease-out",
    normal: "300ms ease-out",
    slow: "700ms ease-out",
    easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  },

  zIndex: {
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modalBackdrop: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
  },
} as const;

export type Tokens = typeof tokens;