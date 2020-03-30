/* eslint-disable */

require('dotenv').config()

export default {
  mode: 'universal',
  server: require('./configs/server'),
  buildModules: require('./configs/buildModules'),
  modules: require('./configs/modules'),
  generate: require('./configs/generate').generate,
  sitemap: require('./configs/generate').sitemap,
  i18n: require('./configs/i18n'),
  netlify: {
    redirects: [
      {
        from: '/',
        to: '/en',
        force: true
      },
      // {
      //   from: '/my-redirect',
      //   to: '/',
      //   status: 302,
      //   force: true
      // },
      {
        from: '/en/*',
        to: '/en/404.html',
        status: 404
      },
      {
        from: '/*',
        to: '/404.html',
        status: 200
      },
      // {
      //   from: '/store',
      //   to: '/blog/:id',
      //   query: {
      //     id: ':id'
      //   }
      // },
      // {
      //   from: '/',
      //   to: '/china',
      //   status: 302,
      //   conditions: {
      //     Country: 'cn,hk,tw'
      //   }
      // }
    ]
  }
}
