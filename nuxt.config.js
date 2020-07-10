require('dotenv').config()

export default {
  target: 'static',
  mode: 'universal',
  env: {
    version: process.env.STORYBLOK_VERSION || 'draft'
  },
  head: require('./configs/head'),
  server: require('./configs/server'),
  buildModules: require('./configs/buildModules'),
  modules: require('./configs/modules'),
  sitemap: require('./configs/generate').sitemap,
  i18n: require('./configs/i18n')
}
