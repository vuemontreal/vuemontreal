<template>
  <div class="w-full max-w-screen-xl m-auto">
    <section id="heading" class="mt-12">
      <a
        href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="w-full" src="~/assets/svgs/heading.svg" />
      </a>
    </section>
    <section id="next-events" class="px-4 mt-16">
      <div class="flex justify-between mt-12 items-center">
        <mtl-h-2> Next Events </mtl-h-2>
        <nuxt-link :to="localePath('/search')">
          <mtl-text-info class="text-mtl-green-500">see all</mtl-text-info>
        </nuxt-link>
      </div>
      <div class="flex flex-wrap -mx-1 mt-1">
        <template v-if="nextEvents.length">
          <div
            v-for="event in nextEvents"
            :key="event.id"
            class="w-full md:w-1/2 px-1"
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
        <nuxt-link v-else :to="localePath('/search')" class="w-full">
          <mtl-card-event class="mt-4 relative">
            <template #card-body>
              <div class="absolute centered flex justify-center flex-wrap">
                <mtl-text-button>No Events Schedule</mtl-text-button>
                <mtl-button class="mt-4"> Show old events </mtl-button>
              </div>
            </template>
          </mtl-card-event>
        </nuxt-link>
      </div>
    </section>
    <section id="vue-jobs" class="px-4">
      <div class="flex justify-between mt-12 items-center">
        <mtl-h-2> Latest vue job </mtl-h-2>
        <a href="https://vuejobs.com/" rel="sponsored" target="_blank">
          <mtl-text-info class="text-mtl-green-500">see all</mtl-text-info>
        </a>
      </div>
      <div class="flex flex-wrap -mx-1 mt-1">
        <div
          v-for="job in jobs"
          :key="job.key"
          class="m-auto container mt-8 w-full"
        >
          <mtl-card-job>
            <template #card-header>
              <mtl-h4 class="mb-2 text-mtl-green-500 pt-4">New</mtl-h4>
              <mtl-text-info
                class="bg-mtl-black-200 absolute top-0 right-0 text-mtl-black-400 rounded-bl-lg px-4 py-2"
                >Full-time</mtl-text-info
              >
            </template>
            <template #card-hero>
              <!-- <div
                class="w-10 h-10 bg-mtl-black-400 rounded-lg mr-6 mt-1"
              ></div> -->
              <div class="flex flex-row flex-wrap">
                <mtl-h3 class="text-mtl-black-400">{{ job.title }}</mtl-h3>
                <mtl-text-info class="text-mtl-black-200 mt-2"
                  >At <span class="text-mtl-black-500">{{ job.company }}</span>
                  {{ job.location }}
                </mtl-text-info>
              </div>
            </template>
            <template #card-body>
              <mtl-paragraph
                class="text-mtl-black-400"
                v-html="job.description"
              >
              </mtl-paragraph>
            </template>
            <template #card-actions>
              <mtl-button>apply</mtl-button>
            </template>
          </mtl-card-job>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import head from '~/utils/head'

export default {
  name: 'HomePage',
  async fetch() {
    const lang = this.$store.state.i18n.locale
    const { version } = this.$nuxt.context.env

    const events = await this.$storyapi.get('cdn/stories/', {
      version,
      starts_with: lang + '/events/',
      sort_by: 'sort_by_date:desc',
    })
    const home = await this.$storyapi.get(
      `cdn/stories/${this.$i18n.locale}/home`,
      {
        version,
      }
    )
    this.seo = home.data.story.content.seo
    this.events = events.data.stories
  },
  data: () => ({
    events: [],
    seo: null,
    jobs: [],
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
  async mounted() {
    try {
      const { data } = await this.$axios.get(
        'https://vuejobs.com/api/positions/search?search=&location=canada&jobs_per_page=2'
      )
      this.jobs = data.data
    } catch (e) {
      console.error(e)
    }
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
