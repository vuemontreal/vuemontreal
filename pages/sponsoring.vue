<template>
  <div>sponsors</div>
</template>

<script>
export default {
  name: 'Sponsoring',
  data: () => ({
    seo: null
  }),
  head() {
    const seo = this.seo
    if (!seo) return {}
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
          content: seo.description || ''
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
    const sponsoring = await this.$storyapi.get(
      `cdn/stories/${this.$i18n.locale}/sponsoring`,
      {
        version: process.env.STORYBLOK_VERSION || 'draft'
      }
    )
    this.seo = sponsoring.data.story.content.seo
  },
  activated() {
    // cache
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 2000) {
      this.$fetch()
    }
  }
}
</script>

<style></style>
