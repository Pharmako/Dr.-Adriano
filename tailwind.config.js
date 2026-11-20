/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1D2B',
          light: '#162738',
          deep: '#0A141E',
        },
        gold: {
          DEFAULT: '#C8A253',
          hover: '#D8B56A',
          muted: '#9A7C3E',
        },
        paper: {
          DEFAULT: '#F7F6F2',
          elevated: '#FDFCF9',
        },
        ink: {
          DEFAULT: '#23303D',
          muted: '#52606D',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BD5A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 24px 60px -18px rgba(15, 29, 43, 0.14)',
        'editorial-dark': '0 30px 70px -20px rgba(4, 9, 15, 0.65)',
        'gold-glow': '0 14px 34px -10px rgba(200, 162, 83, 0.4)',
      },
    },
  },
  plugins: [],
};
