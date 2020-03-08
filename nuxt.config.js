require('dotenv').config()

export default {
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000, // par défaut: 3000
    host: '0.0.0.0' // par défaut: localhost
  },
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true
        },
        strategy: 'prefix_and_default',
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ],
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory'
      }
    ]
  ]
}
