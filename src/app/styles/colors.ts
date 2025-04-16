// src/app/styles/colors.ts

export const colors = {
  // Primary color from the logo (crimson red)
  primary: {
    50: '#fdf2f4',
    100: '#fce7ea',
    200: '#f9d0d7',
    300: '#f4a9b7',
    400: '#ed758c',
    500: '#e34963',
    600: '#d12a47', // Logo color
    700: '#b01d39',
    800: '#931b35',
    900: '#7c1c32',
    950: '#450a18',
  },
  
  // Secondary color (deep navy)
  secondary: {
    50: '#f0f4fd',
    100: '#e2e9fa',
    200: '#cbd7f5',
    300: '#a7bcee',
    400: '#7d99e4',
    500: '#5c77db',
    600: '#4359cf',
    700: '#3747b9',
    800: '#303c97',
    900: '#2b3678',
    950: '#1c2249',
  },
  
  // Accent color (teal)
  accent: {
    50: '#effcfc',
    100: '#d7f5f5',
    200: '#b3ecec',
    300: '#7edede',
    400: '#43c7c7',
    500: '#29adad',
    600: '#238a8a',
    700: '#216f6f',
    800: '#205a5a',
    900: '#1f4b4b',
    950: '#0f2d2d',
  },
  
  // Neutral colors
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  
  // Success, warning, error colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
};

// Export specific colors for easy access
export const primaryColor = colors.primary[600]; // Logo color
export const secondaryColor = colors.secondary[700];
export const accentColor = colors.accent[500];
export const backgroundColor = colors.neutral[50];
export const textColor = colors.neutral[900];
export const textColorLight = colors.neutral[500];
