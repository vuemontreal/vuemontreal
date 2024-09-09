module.exports = {
  purge: false,
  theme: {
    aspectRatio: {
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    colors: {
      current: 'currentColor',
      'mtl-white': '#FFFFFF',
      'mtl-black': {
        200: '#CED0D0',
        300: '#9CA1A9',
        400: '#3C4144',
        500: '#0B1215',
      },
      'mtl-green': {
        400: '#7DC29C',
        500: '#269A5A',
      },
      'mtl-red': {
        500: '#e74c3c',
      },
    },
    extend: {
      minHeight: {
        4: '4rem',
        8: '8rem',
        12: '12rem',
      },
      maxHeight: {
        4: '4rem',
        8: '8rem',
        12: '12rem',
      },
    },
  },
}
