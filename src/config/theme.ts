/**
 * Design Tokens - Central configuration for colors, typography, spacing, etc.
 */

export const COLORS = {
  primary: "#1a5c38",
  primary_dark: "#0f3d21",
  accent: "#f5a623",
  
  // Semantic colors
  success: "#16a34a",
  warning: "#d97706",
  error: "#dc2626",
  info: "#2563eb",
  
  // Backgrounds
  bg_light: "#f7faf8",
  bg_white: "#ffffff",
  bg_dark: "#0a1a0f",
  bg_dark_header: "#0a2e1c",
  
  // Text colors
  text_dark: "#111827",
  text_gray: "#6b7280",
  text_light: "#9ca3af",
  text_white: "#ffffff",
  text_white_muted: "rgba(255, 255, 255, 0.7)",
  
  // Borders and dividers
  border_light: "#e5e7eb",
  border_dark: "#d1e8db",
  
  // Component colors
  green_50: "#e8f5ee",
  yellow_50: "#fef9ee",
  blue_50: "#eff6ff",
  purple_50: "#f5f3ff",
  red_50: "#fef2f2",
};

export const TYPOGRAPHY = {
  // Font families
  fonts: {
    display: "'Outfit', sans-serif",
    body: "'Inter', sans-serif",
  },
  
  // Font weights
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Font sizes - for responsive sizing use clamp() in components
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
};

export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
};

export const RADII = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  full: "9999px",
};

export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const Z_INDEX = {
  dropdown: 40,
  sticky: 20,
  fixed: 30,
  modal_backdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
};

// Utility functions
export const getCSSCustomProperties = (): Record<string, string> => ({
  "--color-primary": COLORS.primary,
  "--color-primary-dark": COLORS.primary_dark,
  "--color-accent": COLORS.accent,
  "--color-bg-light": COLORS.bg_light,
  "--color-text-dark": COLORS.text_dark,
  "--color-text-gray": COLORS.text_gray,
  "--font-display": TYPOGRAPHY.fonts.display,
  "--font-body": TYPOGRAPHY.fonts.body,
});
