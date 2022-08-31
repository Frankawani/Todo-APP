/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(220, 98%, 61%)',
        'check-background': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'light-grey': 'hsl(0, 0%, 98%)',
        'first': 'hsl(192, 100% , 67%)',
        'second': 'hsl(280, 87%, 65%)',
        'grey': 'hsl(234, 11%, 52%)',
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
      },
      fontFamily: {
        'josefin': 'Josefin Sans, sans-serif'
      },
      backgroundImage: {
        'desktopDarkTheme': 'url(/src/assets/images/bg-desktop-dark.jpg)',
        'desktopLightTheme': 'url(/src/assets/images/bg-desktop-light.jpg)'
      },
      screens: {
        '3xl': {'max': '2500px'},
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '967px'},
        // => @media (max-width: 767px) { ... }
  
        'min-sm': {'min': '720px'},
        
        'sm': {'max': '720px'},
        // => @media (max-width: 639px) { ... }
        'xs': {'max': '569px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
