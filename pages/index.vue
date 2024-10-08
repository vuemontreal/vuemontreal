<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6 mt-10 md:mt-0">
    <section
      id="heading"
      class="bg-mtl-black-500 flex-wrap flex mb-4 items-end py-8 justify-center"
      :style="`background-image: url('${image.filename.replace(
        '//a.storyblok.com',
        '//img2.storyblok.com',
      )}');`"
    >
      <div
        class="text-mtl-white w-full lg:w-1/2 flex flex-col items-center justify-center px-2"
      >
        <mtl-h-1 smaller class="mb-4 text-center text-lg">
          {{ description }}
        </mtl-h-1>
        <a
          href="https://discord.gg/PxAeZaphnA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <mtl-button>{{ join_slack }}</mtl-button>
        </a>
      </div>
    </section>

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
          <div class="mt-4 relative">
            <div class="flex justify-center items-center flex-wrap flex-col">
              <mtl-text-button>{{ no_events }}</mtl-text-button>
              <mtl-button class="mt-4">
                {{ show_old_events }}
              </mtl-button>
            </div>
          </div>
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
    const language = app.i18n.locale
    const { version } = env

    const events = await app.$storyapi.get('cdn/stories/', {
      version,
      language,
      starts_with: 'events/',
      sort_by: 'sort_by_date:desc',
      resolve_relations: 'speakers',
    })
    const { data } = await app.$storyapi.get(`cdn/stories/home`, {
      language,
      version,
    })

    return {
      ...data.story.content,
      events: events.data.stories,
    }
  },
  data: () => ({
    events: [],
  }),
  head,
  computed: {
    nextEvents() {
      return this.events
        .filter(
          (event) => new Date(event.sort_by_date).setHours(24) > Date.now(),
        )
        .slice(0, 2)
    },
  },
  mounted() {
    this.$store.commit('closeNavMobile')
  },
}
</script>

<style lang="postcss">
.centered {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#heading {
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
</style>
