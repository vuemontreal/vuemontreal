require('dotenv').config()

module.exports = [
  '@nuxtjs/eslint-module',
  '@nuxtjs/tailwindcss',
  [
    '@nuxtjs/google-analytics',
    {
      id: process.env.GOOGLE_ANALYTIC
    }
  ]
]
