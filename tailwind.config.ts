import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { boxShadow } from './src/styles/tokens/boxShadow';
import { colors } from './src/styles/tokens/colors';
import { fontSize } from './src/styles/tokens/fontSize';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    plugin(({ addComponents }) => {
      addComponents({
        '.gradient-twilight': {
          backgroundImage: 'linear-gradient(222deg, #003DFF 0%, #CAD1FF 100%)'
        },
        '.gradient-nova': {
          backgroundImage: 'linear-gradient(223deg, #F988CD 0%, #003DFF 100%)'
        },
        '.gradient-comet': {
          backgroundImage: 'linear-gradient(222deg, #DB2796 0%, #FFD9F0 100%)'
        },
        '.gradient-solstice': {
          backgroundImage:
            'linear-gradient(220deg, #9EF4EE 0%, #39ABCD 51%, #003DFF 100%)'
        }
      });
    })
  ],
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30'
  ],
  theme: {
    colors,
    boxShadow,
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem'
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem'
      }
    },
    extend: {
      fontSize,
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text)',
            '--tw-prose-headings': 'var(--text)',
            h1: {
              fontSize: '4rem',
              fontWeight: 'normal',
              marginBottom: '0.25em'
            }
          }
        }
      })
    }
  }
};

export default config;
