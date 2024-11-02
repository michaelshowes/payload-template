import { ThemeConfig } from 'tailwindcss/types/config';

export const colors: ThemeConfig['colors'] = {
  background: 'hsl(var(--background))',
  primary: {
    DEFAULT: '#003DFF',
    foreground: 'hsl(var(--primary-foreground))'
  },
  secondary: {
    DEFAULT: '#23263B',
    foreground: 'hsl(var(--secondary-foreground))'
  },
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#23263B',
  green: {
    300: '#D9FFFC',
    400: '#9EF4EE',
    500: '#89D9D3',
    600: '#4CC9C0',
    700: '#219088'
  },
  teal: {
    300: '#DFF2F8',
    400: '#98DFF4',
    500: '#5BBFDD',
    600: '#39ABCD',
    700: '#3087A1'
  },
  pink: {
    300: '#FFD9F0',
    400: '#F988CD',
    500: '#F82CAA',
    600: '#DB2796',
    700: '#9E0062'
  },
  blue: {
    300: '#F2F4FF',
    400: '#A2AFFF',
    500: '#003DFF',
    600: '#0738D2',
    700: '#0E297E'
  },
  neutral: {
    100: '#F4F4F5',
    200: '#D3D4D8',
    300: '#91929D',
    400: '#4F5162'
  },
  orange: '#F78125',
  cyan: '#0DB7EB',
  success: {
    DEFAULT: '#06AF87',
    foreground: '#B9FFEE'
  },
  informative: {
    DEFAULT: '#1363C1',
    foreground: '#D1E5FD'
  },
  warning: {
    DEFAULT: '#E07E0B',
    foreground: '#FFE2BF'
  },
  error: {
    DEFAULT: '#D9293E',
    foreground: '#FFD4DA'
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))'
  },
  border: 'hsl(var(--border))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))'
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))'
  },
  foreground: 'hsl(var(--foreground))',
  input: 'hsl(var(--input))',
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))'
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))'
  },
  ring: 'hsl(var(--ring))'
};
