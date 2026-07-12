/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Espresso / walnut scale extracted from the PerezDev wood panel
        espresso: {
          50:  '#F7F1E7',
          100: '#EDE1CD',
          200: '#DAC7A8',
          300: '#C1A67E',
          400: '#A5875F',
          500: '#856A47',
          600: '#6B5238',
          700: '#513D2A',
          800: '#3A2B1E',
          900: '#271C13',
          950: '#1A120B',
        },
        // Restrained brass accent (used sparingly)
        brass: {
          light: '#C9A461',
          DEFAULT: '#B08948',
          dark: '#8F6C36',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(39, 28, 19, 0.04), 0 8px 24px -12px rgba(39, 28, 19, 0.18)',
        card: '0 1px 3px rgba(39, 28, 19, 0.06), 0 12px 32px -16px rgba(39, 28, 19, 0.28)',
        lift: '0 18px 48px -20px rgba(39, 28, 19, 0.45)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
