<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6">
    <a
      href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section
        id="heading"
        class="bg-mtl-black-500 flex-wrap flex cursor-pointer mb-4"
        :style="`background-image: url('${image.filename}');`"
      ></section>
    </a>

    <section id="next-events" class="px-4 md:px-0">
      <div class="flex justify-between items-center">
        <mtl-h-2 class="uppercase"> {{ next_title }} </mtl-h-2>
        <nuxt-link :to="localePath('/events')">
          <mtl-text-info class="text-mtl-green-500">
            {{ see_all }}
          </mtl-text-info>
        </nuxt-link>
      </div>
      <div class="flex flex-wrap -mx-1 mt-1">
        <template v-if="nextEvents.length">
          <div
            v-for="event in nextEvents"
            :key="event.id"
            class="w-full lg:w-1/2 px-1"
          >
            <mtl-card-event :event="event" class="mt-4" />
          </div>
        </template>
        <nuxt-link v-else :to="localePath('/events')" class="w-full">
          <mtl-card-event class="mt-4 relative">
            <template #card-body>
              <div class="flex justify-center items-center flex-wrap flex-col">
                <mtl-text-button>{{ no_events }}</mtl-text-button>
                <mtl-button class="mt-4">
                  {{ show_old_events }}
                </mtl-button>
              </div>
            </template>
          </mtl-card-event>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import head from '~/utils/head'

export default {
  name: 'HomePage',
  async asyncData({ app, store, env }) {
    const lang = app.i18n.locale === 'fr' ? '' : 'en/'
    const { version } = env

    const events = await app.$storyapi.get('cdn/stories/', {
      version,
      starts_with: lang + 'events/',
      sort_by: 'sort_by_date:desc',
      resolve_relations: 'speakers',
    })
    const content = await app.$storyapi.get(`cdn/stories/${lang}home`, {
      version,
    })

    return {
      ...content.data.story.content,
      events: events.data.stories,
    }
  },
  data: () => ({
    events: [],
  }),
  computed: {
    nextEvents() {
      return this.events
        .filter(
          (event) => new Date(event.sort_by_date).setHours(24) > Date.now()
        )
        .slice(0, 2)
    },
  },
  mounted() {
    this.$store.commit('closeNavMobile')
  },
  head,
}
</script>

<style lang="postcss">
.centered {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#heading {
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
}
</style>
