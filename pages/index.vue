<template>
  <main>
    <header class="relative mt-12  mb-8">
      <img src="~assets/bg.svg" alt="" class="header-filter behind" />
      <div class="top-0 left-0 z-10 flex flex-col absolute behind pt-8">
        <img src="~assets/logo.svg" alt="" class="mb-2 h-32 " />
        <p class="text-mtl-white text-xs px-1 text-center mb-4">
          Vue Montreal is a community focused on the Vue.js Framework and
          provide multiples events around technology and good practice.
        </p>
        <div class="flex justify-center">
          <mtl-button>JOIN US ON SLACK</mtl-button>
        </div>
      </div>
    </header>
    <section id="next-events" class="px-2 mb-8">
      <div class="flex justify-between items-center mb-8">
        <mtl-h-2>Next Events</mtl-h-2>
        <mtl-text-info class=" text-mtl-green-500">See all</mtl-text-info>
      </div>
      <!-- <template v-if="nextEvents(events).length">
        <div v-for="event in nextEvents(events)" :key="event._uid">
          <nuxt-link :to="event.full_slug">{{ event.name }}</nuxt-link>
        </div>
      </template> -->
      <!-- <div v-else> -->
      <div>
        <mtl-card-event>
          <template #card-header>
            <mtl-h-4 class="mb-2 text-mtl-black-400">
              009 - ORGA - Presentation of the new website vuemontreal.org
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
            <mtl-paragraph class="text-mtl-black-400">
              The "orga" type meetings deal with topics about the organization
              of the Vue.js Montreal community. The goal of this meeting is to
              present the new vuemontreal.org website ...
            </mtl-paragraph>
          </template>
          <template #card-actions>
            <mtl-button class="mr-2" tertiary>More Infos</mtl-button>
            <mtl-button>Join</mtl-button>
          </template>
        </mtl-card-event>
      </div>
    </section>
    <section id="new-jobs" class="px-2 mb-2">
      <div class="flex justify-between items-center mb-8">
        <mtl-h-2>Last view job</mtl-h-2>
        <mtl-text-info class=" text-mtl-green-500">See all</mtl-text-info>
      </div>
      <mtl-card-job>
        <template #card-header>
          <mtl-h-4 class="mb-2 text-mtl-green-500 pt-4">New</mtl-h-4>
          <mtl-text-info
            class="bg-mtl-black-200 absolute top-0 right-0 text-mtl-black-400 rounded-bl-lg px-4 py-2"
          >
            Full-time
          </mtl-text-info>
        </template>
        <template #card-hero>
          <div class="w-10 h-10 bg-mtl-black-400 rounded-lg mr-6 mt-1"></div>
          <div class="flex-grow">
            <mtl-h-3 class="text-mtl-black-400">
              Senior Front-End Developer
            </mtl-h-3>
            <mtl-text-info class="text-mtl-black-200">
              At <span class="text-mtl-black-500">Sigma</span> San Francisco,
              CA, USA
            </mtl-text-info>
          </div>
        </template>
        <template #card-body>
          <mtl-paragraph class="text-mtl-black-400">
            The "orga" type meetings deal with topics about the organization of
            the Vue.js Montreal community. The goal of this meeting is to
            present the new vuemontreal.org website ...
          </mtl-paragraph>
        </template>
        <template #card-actions>
          <mtl-button>apply</mtl-button>
        </template>
      </mtl-card-job>
    </section>
    <section id="sponsors" class="bg-mtl-black-200 py-6">
      <mtl-h-2 class="text-center mb-8">Our sponsors</mtl-h-2>
      <ul class="flex flex-wrap m-auto w-full">
        <li class="w-1/3"><mtl-sponsor name="Netlify" /></li>
        <li class="w-1/3"><mtl-sponsor name="Netlify" /></li>
        <li class="w-1/3"><mtl-sponsor name="Netlify" /></li>
        <li class="w-1/3"><mtl-sponsor name="Netlify" /></li>
        <li class="w-1/3"><mtl-sponsor name="Netlify" /></li>
        <li class="w-1/3"><mtl-sponsor name="Netlify" /></li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    events: [],
    seo: null
  }),
  async fetch() {
    // eslint-disable-next-line no-console
    // const lang = this.$store.state.i18n.locale
    // const { version } = this.$nuxt.context.env
    // const events = await this.$storyapi.get('cdn/stories/', {
    //   version,
    //   starts_with: lang + '/events/',
    //   sort_by: 'sort_by_date:desc'
    // })
    // const settings = await this.$storyapi.get(
    //   `cdn/stories/${this.$i18n.locale}/settings`,
    //   {
    //     version
    //   }
    // )
    // this.seo = home.data.story.content.seo
    // this.events = settings.data.stories
    // eslint-disable-next-line no-console
    // console.log(settings.data.story.content)
  },
  beforeMount() {
    this.$store.commit('openNavMobile', false)
  },
  // head() {
  //   const seo = this.seo
  //   if (!seo) return {}
  //   return {
  //     title: seo.title || '',
  //     meta: [
  //       {
  //         property: 'og:title',
  //         content: seo.og_title || ''
  //       },
  //       {
  //         hid: `description`,
  //         name: 'description',
  //         content: seo.description
  //       },
  //       {
  //         property: 'og:title',
  //         content: seo.og_title || ''
  //       },
  //       {
  //         property: 'og:description',
  //         content: seo.og_description || ''
  //       },
  //       {
  //         property: 'og:image',
  //         content: seo.og_image || ''
  //       },
  //       {
  //         property: 'twitter:title',
  //         content: seo.twitter_title || ''
  //       },
  //       {
  //         property: 'twitter:description',
  //         content: seo.twitter_description || ''
  //       },
  //       {
  //         property: 'twitter:image',
  //         content: seo.twitter_image || ''
  //       }
  //     ]
  //   }
  // },
  methods: {
    // pastEvents: (events) =>
    //   events.filter(
    //     (event) => new Date(event.sort_by_date).setHours(24) < Date.now()
    //   ),
    // nextEvents: (events) =>
    //   events.filter(
    //     (event) => new Date(event.sort_by_date).setHours(24) > Date.now()
    //   )
  }
}
</script>

<style lang="postcss" scoped>
.header-filter {
  filter: brightness(0.3);
  z-index: 20;

  @apply absolute w-full h-auto;
}

.behind {
  z-index: -1;
}

header {
  height: 360px;
}
</style>
