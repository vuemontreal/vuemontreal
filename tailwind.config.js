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
        '100': '#CED0D0',
        '200': '#9DA0A1',
        '300': '#6D7173',
        '400': '#3C4144',
        '500': '#0B1215'
      },
      'mtl-grey': {
        '100': '#DEE0E2',
        '200': '#BDC0C6',
        '300': '#9CA1A9',
        '400': '#7B818D',
        '500': '#5A6270'
      },
      'mtl-green': {
        '100': '#D4EBDE',
        '200': '#A8D7BD',
        '300': '#7DC29C',
        '400': '#51AE7B',
        '500': '#269A5A'
      }
    }
  },
  variants: {
    aspectRatio: ['responsive'] // defaults to ['responsive']
  },
  plugins: [require('tailwindcss-aspect-ratio')]
}
