import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f5f2',
          100: '#f1e7df',
          200: '#decab6',
          300: '#c9a083',
          400: '#b5805f',
          500: '#9c664d',
          600: '#7f4f3d',
          700: '#5a3728',
          800: '#3f251a',
          900: '#2f1a13'
        }
      }
    }
  },
  plugins: [],
};

export default config;
