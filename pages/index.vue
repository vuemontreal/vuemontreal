<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6">
    <section id="heading" class="bg-mtl-black-500 min-h-12 flex-wrap py-8 flex">
      <div class="w-full flex items-center justify-center mb-4 px-8">
        <img class="w-1/2 md:w-1/3" src="~/assets/vue-logo-transparent.png" />
      </div>
      <div class="w-full flex justify-center">
        <div
          class="text-mtl-white text-lg md:text-2xl w-2/3 uppercase text-center"
        >
          {{ content.seo.description }}
        </div>
      </div>
    </section>
    <section id="next-events" class="px-4 md:px-0 mt-16">
      <div class="flex justify-between mt-12 items-center">
        <mtl-h-2 class="uppercase"> {{ content.next_title }} </mtl-h-2>
        <nuxt-link :to="localePath('/events')">
          <mtl-text-info class="text-mtl-green-500">
            {{ content.see_all }}
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
        </template>
        <nuxt-link v-else :to="localePath('/events')" class="w-full">
          <mtl-card-event class="mt-4 relative">
            <template #card-body>
              <div class="flex justify-center items-center flex-wrap flex-col">
                <mtl-text-button>{{ content.no_events }}</mtl-text-button>
                <mtl-button class="mt-4">
                  {{ content.show_old_events }}
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
    })

    // eslint-disable-next-line no-console
    console.log(events)
    const content = await app.$storyapi.get(`cdn/stories/${lang}home`, {
      version,
    })

    return {
      content: content.data.story.content,
      events: events.data.stories,
    }
  },
  data: () => ({
    events: [],
    content: {},
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
</style>
