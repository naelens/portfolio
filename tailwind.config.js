/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        customGradient: 'linear-gradient(to right, #6b46c1 20%, #9f7aea 50%, #d6bcfa 80%)',
      },      
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gradiant: 'linear-gradient(to right, #6b46c1 20%, #9f7aea 50%, #d6bcfa 80%)',
        bglinear: '#AA65F0',
        gray700: '#0D0D0D',
        gray600:'#0D0F16',
        gray400: '#333333',
        gray300: '#808080',
        gray200: '#D9D9D9',
        white100: '#FAFAFA',
      },
      spacing: {
        '1.25rem': '1.25rem',
        '7.5rem': '7.5rem',
        '1.5rem': '1.5rem',
      },
      padding: {
        '3.75rem': '3.75rem',
      },
      fontSize: {
        '1rem': '1rem',
      },
      height: {
        'h-main': '550px',
        'avatar': '12rem',
        '17.5rem': '17.5rem',
      },
      width: {
        '40rem': '40rem'
      },
      keyframes: {
        waveHand: {
          '0%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-15deg)' },
          '40%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(-15deg)' },
          '80%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        waveHand: 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
}

