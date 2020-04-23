/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    aspectRatio: {
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    extend: {
      colors: {
        'mtl-primary': '#42B983',
        'mtl-black': '#000000',
        'mtl-accent': '#0A87BC',
        'mtl-infos': '#8A8A8A',
        'mtl-white': '#FFFFFF'
      }
    }
  },
  variants: {
    aspectRatio: ['responsive'] // defaults to ['responsive']
  },
  plugins: [require('tailwindcss-aspect-ratio')]
}
