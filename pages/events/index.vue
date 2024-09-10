<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6 mt-16 md:mt-0">
    <mtl-h-2 class="mt-3 px-2 md:px-0"> {{ $t('events') }} </mtl-h-2>
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
  name: 'EventsPage',
  async asyncData({ app, store, env }) {
    const language = app.i18n.locale
    const { version } = env
    try {
      const stories = await app.$storyapi.get('cdn/stories/', {
        version,
        language,
        starts_with: 'events/',
        sort_by: 'sort_by_date:desc',
        resolve_relations: 'speakers',
      })

      const speakers = stories.data.rels.reduce((acc, speaker) => {
        acc[speaker.uuid] = speaker
        return acc
      }, {})

      const events = stories.data.stories.map((event) => {
        event.content.speakers = event.content.speakers.map(
          (uuid) => speakers[uuid],
        )
        return event
      })

      return {
        events,
      }
    } catch (e) {
      console.error(e)
    }
  },
  data: () => ({
    events: [],
  }),
  head,
  mounted() {
    this.$store.commit('closeNavMobile')
  },
}
</script>
