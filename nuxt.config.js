import axios from 'axios'

const generateStoryblokEventRoutes = async () => {
  const storyblokUrl = 'https://api.storyblok.com/v1/cdn/links'
  const token = process.env.STORYBLOK_TOKEN
  const version = process.env.STORYBLOK_VERSION || 'draft'
  const endUrl = `?token=${token}&version=${version}&cv=${new Date().getTime()}`

  try {
    const ret = []

    const { data } = await axios.get(
      `${storyblokUrl}${endUrl}&starts_with=events/`,
    )
    for (const link in data.links) {
      const slug = data.links[link].slug
      ret.push(slug)
      ret.push('en/' + slug)
    }

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
      {
        name: 'google-site-verification',
        content: '4pw9b71c9bCUbtQ-grRAr4yjfBlNuI9G7702BvInXNQ',
      },
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
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  plugins: ['~/plugins/popover.client.js', '~/plugins/ellipsis.client.js'],
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
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTIC,
    // dev: process.env.NODE_ENV !== 'production',
    debug: {
      enabled: process.env.NODE_ENV !== 'production',
    },
  },
  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
      },
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
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
          steps: {
            one: 'You explain your project',
            second: 'We contact you and schedule a meeting',
            third: 'Your project on the website',
          },
          newsletter: {
            subscribe_text: 'Subscribe to our newsletter',
            subscribe_subtext: 'Get the best of our listings into your inbox.',
            subscribe: 'Subscribe',
            subscribe_promise: '✋️ We promise to respect your inbox.',
            success: 'Subscription success',
            failure: 'Subscription failed',
          },
          back: 'Back',
          who: 'Who is using Vuejs in Quebec?',
          netlify:
            'Thanks to <a rel="noreferrer" href="https://www.netlify.com/open-source/" target="_blank" class="cursor-pointer underline">Netlify Open Source program</a> <br/> Copyright © 2020 Vue Montreal',
        },
        fr: {
          events: 'Évènements',
          home: 'Accueil',
          more: 'Voir Plus',
          lang: 'Langage',
          other: 'Autres',
          back: 'Retour',
          who: 'Qui utilise Vuejs au Québec?',
          conduct: 'Code de conduite',
          contribute: 'Contribuer',
          steps: {
            one: 'You explain your project',
            second: 'We contact you and schedule a meeting',
            third: 'Your project on the website',
          },
          newsletter: {
            subscribe_text: 'Souscrire à notre newsletter',
            subscribe_subtext:
              'Recevez le meilleur de notre listings dans votre boîte mail.',
            subscribe: 'Souscrire',
            subscribe_promise:
              '✋️ On vous promet de respecter votre boîte mail.',
            success: 'Inscription réussie',
            failure: "Échec de l'inscription",
          },
          netlify:
            'Merci <a rel="noreferrer" href="https://www.netlify.com/open-source/" target="_blank" class="cursor-pointer underline">Netlify pour le programme open source</a> <br/> Copyright © 2020 Vue Montreal',
        },
      },
    },
  },
  axios: {
    baseURL: '/',
  },
}
