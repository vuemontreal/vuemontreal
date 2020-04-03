/* eslint-disable */

require('dotenv').config()


export default {
  mode: 'universal',
  fallback: false,
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: require('./configs/server'),
  buildModules: require('./configs/buildModules'),
  modules: require('./configs/modules'),
  generate: require('./configs/generate').generate,
  sitemap: require('./configs/generate').sitemap,
  i18n: require('./configs/i18n'),
}
