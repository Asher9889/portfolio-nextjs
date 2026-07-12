export const tokens = {
  colors: {
    gold: "#E8B84B",
    coral: "#E8553A",
    emerald: "#34D399",
    sapphire: "#60A5FA",
    cyan: "#22D3EE",
    rose: "#FB7185",
    violet: "#A78BFA",
    bgLight: "#fdfdfd",
    bgDark: "#070708",
    surfaceDark: "#0c0c10",
    textPrimary: "#FAFAFA",
    textSecondary: "rgba(250,250,250,0.55)",
    textMuted: "rgba(250,250,250,0.25)",
    borderDark: "rgba(255,255,255,0.06)",
    borderLight: "rgba(0,0,0,0.05)",

    // Accent variations
    coralSoft: "rgba(232, 85, 58, 0.12)",
    coralGlow: "rgba(232, 85, 58, 0.25)",
    emeraldSoft: "rgba(52, 211, 153, 0.12)",
    emeraldGlow: "rgba(52, 211, 153, 0.25)",
    sapphireSoft: "rgba(96, 165, 250, 0.12)",
    sapphireGlow: "rgba(96, 165, 250, 0.25)",
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
  rounded: {
    pill: "9999px",
    cardLg: "2rem",
    cardMd: "1.5rem",
    cardSm: "1rem",
    icon: "0.75rem",
  },
  spacing: {
    sectionX: "clamp(1.5rem, 5vw, 7rem)",
    sectionY: "8rem",
    cardInner: "clamp(1.5rem, 3vw, 3rem)",
    stack: "1.5rem",
  },
  elevation: {
    projectCardRest: "0 8px 40px rgba(0,0,0,0.3)",
    projectCardHover: (accentGlow: string) => `0 0 80px ${accentGlow}, 0 25px 60px rgba(0,0,0,0.5)`,
    tiltCardRest: "0 4px 24px -8px rgba(0,0,0,0.5)",
    tiltCardHover: (accentGlow: string) => `0 20px 60px -15px ${accentGlow}`,
  },
  components: {
    buttonPrimaryDark: {
      backgroundColor: "#222222",
      textColor: "#ffffff",
      rounded: "9999px",
      padding: "1rem 2rem",
    },
    buttonPrimaryGold: {
      backgroundColor: "#E8B84B",
      textColor: "#000000",
      rounded: "9999px",
      padding: "0.75rem 1.5rem",
    },
    buttonGhost: {
      backgroundColor: "transparent",
      textColor: "rgba(255,255,255,0.7)",
      rounded: "9999px",
      padding: "0.75rem 1.5rem",
    },
    navLinkDefault: {
      textColor: "rgba(0,0,0,0.6)",
      rounded: "9999px",
      padding: "0.5rem 1rem",
    },
    navLinkActive: {
      backgroundColor: "#111111",
      textColor: "#ffffff",
      rounded: "9999px",
      padding: "0.5rem 1rem",
    },
    tiltCard: {
      backgroundColor: "rgba(255,255,255,0.03)",
      rounded: "1.5rem",
    },
    statCard: {
      backgroundColor: "rgba(255,255,255,0.02)",
      rounded: "1rem",
      borderColor: "rgba(255,255,255,0.06)",
    },
  },
} as const;

export type Tokens = typeof tokens;