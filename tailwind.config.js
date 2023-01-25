/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'sidebar': '#181818',
        'description': '#8d8d8d',
        'usedcolor': '#FDB813',
        'input': '#115173',
        'mustyellow': '#F9A01B',
        'forestgreen': '#228B22',
        'pink': '#FFC0CB',
        'whitesmoke': '#F8F8F8',
        'bg': '#022c43'
      },
      fontFamily:{
        Aurore: ['La Belle Aurore','cursive'],
        Coolvetica: ['Coolvetica','cursive'],
        Helvetica:['Helvetica Neue','cursive']
      },
      screens:{
        'sm': {'max': '650px'},
        'xs':{'max' : '390px'}
      }
    },
  },
  plugins: [],
}
