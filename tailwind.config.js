/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: false,
  theme: {
    aspectRatio: {
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    colors: {
      'mtl-primary': '#42B983', // TODO: deprecated
      'mtl-accent': '#0A87BC', // TODO: deprecated
      'mtl-infos': '#8A8A8A', // TODO: deprecated
      'mtl-white': '#FFFFFF',
      'mtl-black': {
        '200': '#CED0D0',
        '300': '#9CA1A9',
        '400': '#3C4144',
        '500': '#0B1215'
      },
      'mtl-green': {
        '400': '#7DC29C',
        '500': '#269A5A'
      }
    }
  },
  variants: {
    aspectRatio: ['responsive'] // defaults to ['responsive']
  },
  plugins: [require('tailwindcss-aspect-ratio')]
}
