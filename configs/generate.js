/* eslint-disable */

require('dotenv').config()
const axios = require('axios')

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
      }).catch(reject)
  })
}


module.exports = {
  generate: {
    routes: generateStoryblokEventRoutes
  },
  sitemap:{
    hostname: 'https://vuemontreal.org',
    routes: generateStoryblokEventRoutes
  }
}

