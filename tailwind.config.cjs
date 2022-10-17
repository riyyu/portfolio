/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yankees-blue': {
          50: '#4d606d',
          100: '#435663',
          200: '#394c59',
          300: '#2f424f',
          400: '#253845',
          500: '#1b2e3b',
          600: '#112431',
          700: '#071a27',
          800: '#00101d',
          900: '#000613'
        },
        'pale-goldenrod': {
          50: '#ffffe1',
          100: '#ffffd7',
          200: '#ffffcd',
          300: '#f5ffc3',
          400: '#ebf9b9',
          500: '#e1efaf',
          600: '#d7e5a5',
          700: '#cddb9b',
          800: '#c3d191',
          900: '#b9c787'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
