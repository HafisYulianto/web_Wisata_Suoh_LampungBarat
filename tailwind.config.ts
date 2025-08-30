import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a2240',
          50: '#eaf0f7', 100: '#d6e1ef', 200: '#adc3de', 300: '#84a5ce',
          400: '#5b87bd', 500: '#346aa9', 600: '#1f4f82', 700: '#163b62',
          800: '#0f2a45', 900: '#0a2240', 950: '#07172b'
        },
        accent: { DEFAULT: '#f6c90e' }
      },
      boxShadow: { soft: '0 2px 10px rgba(0,0,0,0.06)' },
      borderRadius: { xl: '14px', '2xl': '18px' }
    },
  },
  plugins: [],
}
export default config
