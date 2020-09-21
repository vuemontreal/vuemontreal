require('dotenv').config()

module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  strategy: 'prefix_and_default',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en: {
        events: 'Events',
        home: 'Home',
        more: 'More',
        register: 'Register',
        slides: 'View slides',
        lang: 'Language',
        other: 'Others',
        join_slack: 'Join us on slack',
        conduct: 'Code of conduct',
      },
      fr: {
        events: 'Events',
        home: 'Accueil',
        more: "Plus d'infos",
        register: "S'inscrire",
        slides: 'Voir les diapositives',
        lang: 'Langage',
        other: 'Autres',
        join_slack: 'Nous rejoindre sur slack',
        conduct: 'Code de conduite',
      },
    },
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
    fallbackLocale: null,
  },
  vuex: {
    // Module namespace
    moduleName: 'i18n',
    // If enabled, current app's locale is synced with nuxt-i18n store module
    syncLocale: true,
    // Mutation to commit to set route parameters translations
    syncRouteParams: true,
  },
}
