<template>
  <main>
    <header v-if="datas" class="mb-8 bg-mtl-black-500">
      <div class="flex flex-col justify-center items-center py-8">
        <img src="~assets/logo.svg" alt="" class="mb-2 h-32 " />
        <mtl-h-2
          class="text-mtl-white text-xs px-1 text-center lg:m-auto lg:w-1/2 mb-4 lg:mb-8"
        >
          {{ datas.header_description }}
        </mtl-h-2>
        <div class="flex justify-center">
          <a :href="datas.header_button_link" target="_blank">
            <mtl-button>{{ datas.header_button }}</mtl-button>
          </a>
        </div>
      </div>
    </header>
    <section id="next-events" v-if="datas" class="px-2 lg:px-0 mb-8">
      <div class="flex justify-between items-center mb-8">
        <mtl-h-2>{{ datas.next_title }}</mtl-h-2>
        <nuxt-link :to="localePath(datas.next_see_link)">
          <mtl-text-info class=" text-mtl-green-500">
            {{ datas.next_see_text }}
          </mtl-text-info>
        </nuxt-link>
      </div>
      <!-- <template v-if="nextEvents(events).length">
        <div v-for="event in nextEvents(events)" :key="event._uid">
          <nuxt-link :to="event.full_slug">{{ event.name }}</nuxt-link>
        </div>
      </template> -->
      <!-- <div v-else> -->
      <div class="flex flex-wrap">
        <div class="w-full px-4 lg:w-1/2 mb-4">
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
        <div class="w-full px-4 lg:w-1/2 mb-4">
          <mtl-card-job
            class="bg-mtl-black-200 flex justify-center items-center h-64 lg:h-full"
          >
            <template #card-body>
              <mtl-paragraph class="text-center w-full"
                >Post a event</mtl-paragraph
              >
            </template>
          </mtl-card-job>
        </div>
      </div>
    </section>
    <section id="new-jobs" v-if="datas" class="px-2 lg:px-0 mb-8">
      <div class="flex justify-between items-center mb-8">
        <mtl-h-2>{{ datas.job_title }}</mtl-h-2>
        <nuxt-link :to="localePath(datas.job_next_link)">
          <mtl-text-info class=" text-mtl-green-500">
            {{ datas.job_next_text }}
          </mtl-text-info>
        </nuxt-link>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full px-4 lg:w-1/2 mb-4">
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
              <div
                class="w-10 h-10 bg-mtl-black-400 rounded-lg mr-6 mt-1"
              ></div>
              <div class="flex-grow">
                <mtl-h-3 class="text-mtl-black-400">
                  Senior Front-End Developer
                </mtl-h-3>
                <mtl-text-info class="text-mtl-black-200">
                  At <span class="text-mtl-black-500">Sigma</span> San
                  Francisco, CA, USA
                </mtl-text-info>
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
              <mtl-button>apply</mtl-button>
            </template>
          </mtl-card-job>
        </div>
        <div class="w-full px-4 lg:w-1/2 mb-4">
          <mtl-card-job
            class="bg-mtl-black-200 flex justify-center items-center h-64 lg:h-full"
          >
            <template #card-body>
              <mtl-paragraph>Post a job</mtl-paragraph>
            </template>
          </mtl-card-job>
        </div>
      </div>
    </section>
    <section id="sponsors" v-if="datas" class="bg-mtl-black-200 py-6">
      <mtl-h-2 class="text-center mb-8">{{
        datas.sponsor_title || ''
      }}</mtl-h-2>
      <template v-if="datas.sponsors.length">
        <ul class="flex flex-wrap m-auto w-full mb-8">
          <li
            v-for="sponsor in datas.sponsors"
            :key="sponsor._uid"
            class="w-1/3 flex justify-center items-center"
          >
            <mtl-sponsor :link="sponsor.link.url" :img="sponsor.image" />
          </li>
        </ul>
      </template>

      <div class="flex justify-center">
        <mtl-button>{{ datas.sponsor_become }}</mtl-button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({
    events: [],
    seo: null,
    datas: null
  }),
  async fetch() {
    const lang = this.$i18n.locale === 'fr' ? '' : this.$i18n.locale
    const { version } = this.$nuxt.context.env
    try {
      const home = await this.$storyapi.get(`cdn/stories/${lang}/home`, {
        version
      })
      this.datas = home.data.story.content
    } catch (e) {
      console.error(e)
    }

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
</style>
