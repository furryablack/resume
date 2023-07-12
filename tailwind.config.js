/** 
 * @type { import('tailwindcss').Config }
 *  */

module.exports = {
  content: ['./index.html', "./src/**/*.{vue,js}"],

  theme: {
    extend: {},
  },
  
  plugins: [
    "tailwindcss",
    "autoprefixer",
  ],

  darkMode: 'media',
  
  variants: {
    extend: {},
  },
}
