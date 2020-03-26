<template>
  <!--  eslint-disable vue/valid-template-root  -->
  <div v-if="$fetchState.pending">loading</div>
  <div v-else>event page</div>
</template>

<script>
export default {
  data: () => ({
    story: null
  }),
  head() {
    if (!this.story) return {}
    const seo = this.story.content.seo
    return {
      title: seo.title || '',
      meta: [
        {
          property: 'og:title',
          content: seo.og_title || ''
        },
        {
          hid: `description`,
          name: 'description',
          content: seo.description
        },
        {
          property: 'og:title',
          content: seo.og_title || ''
        },
        {
          property: 'og:description',
          content: seo.og_description || ''
        },
        {
          property: 'og:image',
          content: seo.og_image || ''
        },
        {
          property: 'twitter:title',
          content: seo.twitter_title || ''
        },
        {
          property: 'twitter:description',
          content: seo.twitter_description || ''
        },
        {
          property: 'twitter:image',
          content: seo.twitter_image || ''
        }
      ]
    }
  },
  async fetch() {
    /* eslint-disable nuxt/no-this-in-fetch-data */
    const eventId = this.$route.params.eventId
    const locale = this.$i18n.locale

    const { data } = await this.$storyapi.get(`cdn/stories/events/${eventId}`, {
      language: locale,
      version: process.env.STORYBLOK_VERSION || 'draft'
    })
    this.story = data.story
  },
  activated() {
    // cache
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  }
}
</script>
