require('dotenv').config()

module.exports = [
  [
    '@nuxtjs/stylelint-module',
    {
      /* module options */
    },
  ],
  '@nuxtjs/eslint-module',
  '@nuxtjs/tailwindcss',
  [
    '@nuxtjs/google-analytics',
    {
      id: process.env.GOOGLE_ANALYTIC,
    },
  ],
]
