require('dotenv').config()

module.exports = [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  '@nuxtjs/pwa',
  // Doc: https://github.com/nuxt-community/dotenv-module
  [
    'storyblok-nuxt',
    {
      accessToken: process.env.STORYBLOK_TOKEN,
      cacheProvider: 'memory',
    },
  ],
  [
    'nuxt-fontawesome',
    {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas'],
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab'],
        },
      ],
    },
  ],
  'nuxt-i18n',
  '@nuxtjs/sitemap',
]
