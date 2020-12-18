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
  components: [{ path: '~/components/', prefix: 'mtl-' }],
  env: {
    version: process.env.STORYBLOK_VERSION || 'draft',
  },
  loading: false,
  head: {
    title: 'Vue montreal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Vue montreal website',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTIC,
      },
    ],
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory',
      },
    ],
    'nuxt-i18n',
    '@nuxtjs/sitemap',
  ],
  generate: {
    fallback: true,
  },
  sitemap: {
    hostname: 'https://vuemontreal.org',
    routes: generateStoryblokEventRoutes,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          events: 'Events',
          home: 'Home',
          more: 'View More',
          lang: 'Language',
          other: 'Others',
          conduct: 'Code of conduct',
          contribute: 'Contribute',
          newsletter: {
            subscribe_text: 'Subscribe to our newsletter',
            subscribe_subtext: 'Get the best of our listings into your inbox.',
            subscribe: 'Subscribe',
            subscribe_promise: '✋️ We promise to respect your inbox.',
          },
          netlify:
            'Thank\'s to <a href="https://www.netlify.com/open-source/" target="_blank" class="cursor-pointer underline">Netlify Open Source program</a> <br/> Copyright © 2020 Vue Montreal',
        },
        fr: {
          events: 'Events',
          home: 'Accueil',
          more: 'Voir Plus',
          lang: 'Langage',
          other: 'Autres',
          conduct: 'Code de conduite',
          contribute: 'Contribuez',
          newsletter: {
            subscribe_text: 'Souscrire à notre newsletter',
            subscribe_subtext:
              'Recevez le meilleur de notre listings dans votre boîte mail.',
            subscribe: 'Souscrire',
            subscribe_promise:
              '✋️ On vous promet de respecter votre boîte mail.',
          },
          netlify:
            'Merci <a href="https://www.netlify.com/open-source/" target="_blank" class="cursor-pointer underline">Netlify pour le programme open source</a> <br/> Copyright © 2020 Vue Montreal',
        },
      },
    },
  },
}
