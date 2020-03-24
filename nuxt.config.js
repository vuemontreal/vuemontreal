require('dotenv').config()
const axios = require('axios')

const generateStoryblokEventRoutes = async () => {
  const storyblokUrl = 'https://api.storyblok.com/v1/cdn/stories'
  const token = process.env.STORYBLOK_TOKEN
  const version = process.env.STORYBLOK_VERSION || 'draft'
  const endUrl = `?token=${token}&version=${version}&cv=${new Date().getTime()}`

  const langs = ['fr', 'en']

  const storyblokCategoriesRoutes = []

  langs.forEach((lang) => {
    storyblokCategoriesRoutes.push(
      axios.get(`${storyblokUrl}${endUrl}&starts_with=${lang}/events/`)
    )
  })

  try {
    const ret = []
    const response = await Promise.all(storyblokCategoriesRoutes)
    response.map((res) => {
      res.data.stories.map((story) => ret.push(story.full_slug))
    })
    return ret
  } catch (e) {
    console.log(e)
  }
}

export default {
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000, // par défaut: 3000
    host: '0.0.0.0' // par défaut: localhost
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
    // '@nuxtjs/dotenv'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory'
      }
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  generate: {
    routes: generateStoryblokEventRoutes
  },
  sitemap: {
    hostname: 'https://vuemontreal.org',
    routes: generateStoryblokEventRoutes
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Set to override the default domain of the cookie. Defaults to host of the site.
      cookieDomain: null,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: false,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: null
    },
    vuex: {
      // Module namespace
      moduleName: 'i18n',
      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: true,
      // Mutation to commit to set route parameters translations
      syncRouteParams: true
    }
  }
}
