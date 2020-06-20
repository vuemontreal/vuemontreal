import axios from 'axios'

const generateStoryblokEventRoutes = async () => {
  const storyblokUrl = 'https://api.storyblok.com/v1/cdn/stories'
  const token = process.env.STORYBLOK_TOKEN
  const version = process.env.STORYBLOK_VERSION || 'draft'
  const endUrl = `?token=${token}&version=${version}&cv=${new Date().getTime()}`

  const langs = ['fr', 'en']

  const storyblokEventsRoutes = []

  langs.forEach((lang) => {
    storyblokEventsRoutes.push(
      axios.get(`${storyblokUrl}${endUrl}&starts_with=${lang}/events/`)
    )
  })

  try {
    const ret = []
    const response = await Promise.all(storyblokEventsRoutes)
    response.map((res) => {
      res.data.stories.map((story) => ret.push(story.full_slug))
    })

    return ret
  } catch (e) {
    console.error(e)
  }
}

export default {
  target: 'static',
  mode: 'universal',
  env: {
    version: process.env.STORYBLOK_VERSION || 'draft'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
        rel: 'stylesheet'
      }
    ]
  },

  server: {
    port: process.env.PORT || 5000
  },
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTIC
      }
    ]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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
  sitemap: {
    hostname: 'https://vuemontreal.org',
    routes: generateStoryblokEventRoutes
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: null
      }
    }
  },
  components: [
    { path: '~/components/', prefix: 'mtl-' },
    { path: '~/components/tokens/icons/', prefix: 'icon-' }
  ]
}
