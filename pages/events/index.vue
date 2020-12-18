<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6">
    <mtl-h-2 class="mt-3"> Events </mtl-h-2>
    <div class="flex flex-wrap -mx-1 mt-1">
      <div
        v-for="event in events"
        :key="event.id"
        class="w-full md:w-1/2 lg:w-1/3 px-1"
      >
        <mtl-card-event :event="event" class="mt-2" />
      </div>
    </div>
  </div>
</template>

<script>
import head from '~/utils/head'

export default {
  name: 'SearchPage',
  async asyncData({ app, store, env }) {
    const lang = app.i18n.locale === 'fr' ? '' : 'en/'
    const { version } = env
    try {
      const events = await app.$storyapi.get('cdn/stories/', {
        version,
        starts_with: lang + 'events/',
        sort_by: 'sort_by_date:desc',
        resolve_relations: 'speakers',
      })
      return {
        events: [...events.data.stories],
      }
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
