<template>
  <div class="mt-16 px-4">
    <mtl-h-2 class="mt-3"> Events </mtl-h-2>
    <div class="flex flex-wrap -mx-1 mt-1">
      <div v-for="event in events" :key="event.id" class="w-full md:w-1/2 px-1">
        <mtl-card-event class="mt-4">
          <template #card-header>
            <mtl-h-4 class="mb-2 text-mtl-black-400">{{
              event.content.title
            }}</mtl-h-4>
            <div class="flex text-mtl-black-200">
              <div class="flex items-center">
                <icon-calendar-sharp class="mr-4 w-6 h-6" /><mtl-text-info
                  class="mr-6"
                  >{{ event.sort_by_date }}</mtl-text-info
                >
              </div>
              <div class="flex items-center">
                <icon-time-outline class="mr-4 w-6 h-6" /><mtl-text-info
                  >20:00</mtl-text-info
                >
              </div>
            </div>
          </template>
          <template #card-body>
            <mtl-paragraph class="text-mtl-black-400">
              <mtl-sb-text :text="event.content.short_description" />
            </mtl-paragraph>
          </template>
          <template #card-actions>
            <mtl-button class="mr-2" tertiary>More Infos</mtl-button>
            <mtl-button>Join</mtl-button>
          </template>
        </mtl-card-event>
      </div>
    </div>
  </div>
</template>

<script>
import head from '~/utils/head'

export default {
  name: 'SearchPage',
  async fetch() {
    const lang = this.$i18n.locale
    const { version } = this.$nuxt.context.env
    try {
      const events = await this.$storyapi.get('cdn/stories/', {
        version,
        starts_with: lang + '/events/',
        sort_by: 'sort_by_date:desc',
      })
      this.events = [...events.data.stories]
    } catch (e) {
      console.error(e)
    }
  },
  data: () => ({
    events: [],
  }),
  mounted() {
    this.$store.commit('closeNavMobile')
  },
  head,
}
</script>
