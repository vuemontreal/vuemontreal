/* eslint-disable */

require('dotenv').config()
const axios = require('axios')

const { STORYBLOK_TOKEN, STORYBLOK_VERSION, GOOGLE_ANALYTIC } = process.env;
console.log(STORYBLOK_TOKEN, STORYBLOK_VERSION, GOOGLE_ANALYTIC);

const generateStoryblokEventRoutes = function() {
  return new Promise((resolve, reject) => {
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

      const ret = []
    return Promise.all(storyblokEventsRoutes).then((response) => {
        response.map((res) => {
          res.data.stories.map((story) => ret.push(story.full_slug))
        })
        resolve(ret);
      }).catch(err => {
        console.log("ERROR", err);
        reject(err)
      })
  })
}


export default {
  mode: 'universal',
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
  generate: {
    routes: generateStoryblokEventRoutes
  },
  sitemap:{
    hostname: 'https://vuemontreal.org',
    routes: generateStoryblokEventRoutes
  },
  i18n: require('./configs/i18n'),
}
