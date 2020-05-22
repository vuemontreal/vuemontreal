<template>
  <div>
    <header class="relative mt-6">
      <img src="~assets/bg.svg" alt="" class="header-filter" />
      <div class="top-0 left-0 z-10 flex flex-col absolute pt-8">
        <img src="~assets/logo.svg" alt="" class="mb-2 h-32" />
        <p class="text-mtl-white text-xs px-1 text-center mb-4">
          Vue Montreal is a community focused on the Vue.js Framework and
          provide multiples events around technology and good practice.
        </p>
        <div class="flex justify-center">
          <mtl-button>JOIN US ON SLACK</mtl-button>
        </div>
      </div>
    </header>
    <!-- <div v-if="$fetchState.pending">
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
        is-incoming
      />

      <h2 class="mb-4 font-bold uppercase border-b border-black pb-2">
        Past events
      </h2>
      <event-preview
        v-for="event in pastEvents(events)"
        :key="event.uuid"
        :event="event"
      />
    </div> -->
  </div>
</template>

<script>
import { MtlButton } from '@/components/index'
export default {
  name: 'HomePage',
  components: {
    MtlButton
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
  },
  methods: {
    pastEvents: (events) =>
      events.filter(
        (event) => new Date(event.sort_by_date).setHours(24) < Date.now()
      ),
    nextEvents: (events) =>
      events.filter(
        (event) => new Date(event.sort_by_date).setHours(24) > Date.now()
      )
  }
}
</script>

<style lang="postcss" scoped>
.header-filter {
  filter: brightness(0.3);
  height: 360px;

  @apply absolute;
}

header {
  height: 360px;
}
</style>
