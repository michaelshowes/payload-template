import { ThemeConfig } from 'tailwindcss/types/config';

export const fontSize: ThemeConfig['fontSize'] = {
  h1: ['48px', { lineHeight: '48px', fontWeight: 700 }],
  h2: ['40px', { lineHeight: '48px', fontWeight: 700 }],
  h3: ['32px', { lineHeight: '35px', fontWeight: 600, letterSpacing: '2px' }],
  h4: ['24px', { lineHeight: '19px', fontWeight: 700, letterSpacing: '1px' }],
  subhead: ['20px', { lineHeight: '28px', fontWeight: 700 }]
};
