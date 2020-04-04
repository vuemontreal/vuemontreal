<template>
  <section class="flex flex-col">
    <div v-if="$fetchState.pending">
      <eventPreviewSkeleton v-for="Skel in 4" :key="Skel" />
    </div>
    <p v-else-if="$fetchState.error">
      Error while fetching event
    </p>
    <div v-else>
      <h2 class="mb-4 font-bold uppercase border-b border-black pb-2">
        New events
      </h2>
      <event-preview
        v-for="event in nextEvents(events)"
        :key="event.uuid"
        :event="event"
        is-incomming
      />

      <h2 class="mb-4 font-bold uppercase border-b border-black pb-2">
        Past events
      </h2>
      <event-preview
        v-for="event in pastEvents(events)"
        :key="event.uuid"
        :event="event"
      />
    </div>
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
    const events = await this.$storyapi.get('cdn/stories/', {
      version: process.env.STORYBLOK_VERSION || 'draft',
      starts_with: lang + '/events/',
      sort_by: 'sort_by_date:desc'
    })
    const home = await this.$storyapi.get(
      `cdn/stories/${this.$i18n.locale}/home`,
      {
        version: 'draft'
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
  },
  methods: {
    pastEvents: (events) =>
      events.filter(
        (event) => new Date(event.sort_by_date).getTime() < Date.now()
      ),
    nextEvents: (events) =>
      events.filter(
        (event) => new Date(event.sort_by_date).getTime() > Date.now()
      )
  }
}
</script>
