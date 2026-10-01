import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // dark: variants based on the .dark class on <html>
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#B5451B', // deep rust
          secondary: '#F5F0E8', // warm off-white
          accent: '#2D4A3E', // forest green
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
