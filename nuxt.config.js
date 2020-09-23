export default {
  // mode: 'universal',
  target: 'static',
  components: [
    { path: '~/components/', prefix: 'mtl-' },
    { path: '~/components/tokens/icons', prefix: 'icon-' },
  ],
  env: {
    version: process.env.STORYBLOK_VERSION || 'draft',
  },
  loading: false,
  head: require('./configs/head'),
  server: require('./configs/server'),
  buildModules: require('./configs/buildModules'),
  modules: require('./configs/modules'),
  generate: require('./configs/generate').generate,
  sitemap: require('./configs/generate').sitemap,
  i18n: require('./configs/i18n'),
}
