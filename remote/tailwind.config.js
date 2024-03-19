/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        public: ['"Oxygen"']
      },
      screens: {
        xs: '360px'
      },
      borderRadius: {
        theme: '20px',
        'theme-medium': '16px',
        'theme-xl': '25px',
        'theme-2xl': '30px',
        'theme-4xl': '50px'
      },
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        primary: {
          navy: '#002E79',
          blue: '#126BEC',
          gray: '#637288',
          'light-blue': '#EEF3FF',
          description: '#637288',
          background: '#F1F5F9'
        },
        secondary: {
          navy: '#0A1D3A',
          blue: '#14438E',
          red: '#D04D4D',
          slate: '#0A1D3A',
          description: '#637288',
          background: '#F0F6FF',
          'background-alternate': '#F4FBFD'
        },
        type: {
          saham: '#002E79',
          obligasi: '#C69611',
          sukuk: '#FF820F',
          startup: '#2F80ED',
          syariah: '#33B640',
          affiliate: '#F2994A',
          reseller: '#9B51E0'
        },
        alert: {
          success: '#33B640'
        }
      },
      height: {
        '11/12': '91.666667%'
      },
      width: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '976px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px'
      },
      minWidth: {
        '1/2': '50%',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '976px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px'
      },
      maxWidth: {
        '1/2': '50%',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '976px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px'
      },
      backgroundImage: {
        'image-placeholder': 'url(/svg/image-placeholder.svg)',
        'gradient-blue': `radial-gradient(100% 576% at 0% 0%, #126BEC 0%, #00419E 44.27%)`
      },
      zIndex: {
        5: '5'
      },
      keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(1);' },
          '14%': { transform: 'scale(1.1);' },
          '28%': { transform: 'scale(1);' },
          '42%': { transform: 'scale(1.1);' },
          '70%': { transform: 'scale(1);' }
        }
      },
      animation: {
        heartBeat: 'heartBeat 4s'
      }
    }
  },
  plugins: [],
}

