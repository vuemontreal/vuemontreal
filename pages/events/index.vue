<template>
  <div class="px-2 mt-8">
    <mtl-h-2 class="mb-4 ">Next Events</mtl-h-2>
    <ul class="flex flex-wrap">
      <li
        v-for="event in upcomingEvents"
        :key="event._uid"
        class="w-full px-4 lg:w-1/2 mb-4"
      >
        {{ event.name }}
      </li>
    </ul>
    <mtl-h-2 class=" mb-4">Old Events</mtl-h-2>
    <ul class="flex flex-wrap">
      <li
        v-for="event in pastEvents"
        :key="event._uid"
        class="w-full px-4 lg:w-1/2 mb-4"
      >
        <mtl-card-event class=" h-64">
          <template #card-header>
            <mtl-h-4 class="mb-2 text-mtl-black-400">
              {{ event.content.title }}
            </mtl-h-4>
            <div class="flex text-mtl-black-200">
              <div class="flex  items-center">
                <IconCalendarSharp class="mr-4 w-6 h-6" />
                <mtl-text-info class="mr-6">
                  April 10, 2020
                </mtl-text-info>
              </div>
              <div class="flex  items-center">
                <icon-time-outline class="mr-4 w-6 h-6" />
                <mtl-text-info>
                  20:00
                </mtl-text-info>
              </div>
            </div>
          </template>
          <template #card-body>
            <v-clamp :max-lines="2">
              {{ strippedContent(richtext(event.content.description)) }}
            </v-clamp>
          </template>
          <template #card-actions>
            <mtl-button class="mr-2" tertiary>More Infos</mtl-button>
            <mtl-button>Join</mtl-button>
          </template>
        </mtl-card-event>
      </li>
    </ul>
  </div>
</template>

<script>
import VClamp from 'vue-clamp'

/* eslint-disable no-console */
export default {
  components: {
    VClamp
  },
  data: () => ({
    events: []
  }),
  computed: {
    upcomingEvents: (vm) =>
      vm.events.filter(
        (event) => new Date(event.sort_by_date).setHours(24) > Date.now()
      ),
    pastEvents: (vm) =>
      vm.events.filter(
        (event) => new Date(event.sort_by_date).setHours(24) < Date.now()
      )
  },
  async fetch() {
    const lang = this.$i18n.locale === 'fr' ? '' : this.$i18n.locale
    const { version } = this.$nuxt.context.env
    try {
      const events = await this.$storyapi.get('cdn/stories/', {
        version,
        starts_with: lang + '/events/',
        sort_by: 'sort_by_date:desc'
      })
      this.events = events.data.stories
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    richtext(text) {
      return text ? this.$storyapi.richTextResolver.render(text) : ''
    },
    strippedContent(text) {
      const regex = /(<([^>]+)>)/gi
      return text.replace(regex, '')
    }
  }
}
</script>
