/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    container:{
      padding:{DEFAULT:'15px'},
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg: '960px',
      xl: '1330px',

    },
   
  


    extend: {
      colors:{
        primary:'242a2b',
        secondary:'#808080',
        fontFamily: {'Lugrasimo ,cursive':'Lugrasimo , cursive'
    },
      }
    },
  },
  plugins: [],
}