<template>
  <section class="flex flex-col">
    <div v-if="$fetchState.pending">
      <eventPreviewSkeleton v-for="Skel in 4" :key="Skel" />
    </div>
    <p v-else-if="$fetchState.error">
      Error while fetching event
    </p>
    <event-preview
      v-else
      v-for="event in events"
      :key="event.uuid"
      :event="event"
    />
  </section>
</template>

<script>
/* eslint-disable nuxt/no-this-in-fetch-data */

import eventPreview from '@/components/eventPreview'
import eventPreviewSkeleton from '@/components/eventPreviewSkeleton'
export default {
  name: 'HomePage',
  components: {
    eventPreview,
    eventPreviewSkeleton
  },
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
  data: () => ({
    events: [],
    seo: null
  }),
  async fetch() {
    const lang = this.$store.state.i18n.locale
    const { version } = this.$nuxt.context.env

    const events = await this.$storyapi.get('cdn/stories/', {
      version,
      starts_with: lang + '/events/',
      sort_by: 'sort_by_date:desc'
    })
    const home = await this.$storyapi.get(
      `cdn/stories/${this.$i18n.locale}/home`,
      {
        version
      }
    )
    this.seo = home.data.story.content.seo
    this.events = events.data.stories
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
