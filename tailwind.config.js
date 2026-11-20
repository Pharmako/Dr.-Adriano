/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          light: '#19324B',
          deep: '#09131E',
        },
        gold: {
          DEFAULT: '#D4AF5A',
          hover: '#E2C170',
          muted: '#9A7C3E',
        },
        paper: {
          DEFAULT: '#F4F3EF',
          card: '#F7F6F2',
          elevated: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#0D1B2A',
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
        sculpted:
          '0 32px 80px -24px rgba(9, 19, 30, 0.42), 0 12px 32px -12px rgba(9, 19, 30, 0.24)',
        editorial: '0 24px 60px -18px rgba(13, 27, 42, 0.12)',
        'gold-glow': '0 14px 36px -10px rgba(212, 175, 90, 0.42)',
      },
    },
  },
  plugins: [],
};
