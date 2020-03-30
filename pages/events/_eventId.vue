<template>
  <!--  eslint-disable vue/valid-template-root  -->
  <div v-if="$fetchState.pending">
    <article>
      <h1 class="text-2xl font-bold leading-tight mb-2">
        <Skeleton />
      </h1>

      <div class="flex items-center mb-2">
        <p class="text-mtl-infos">
          <Skeleton width="140px" />
        </p>
      </div>

      <div>
        <h2 class="mb-4"><Skeleton width="140px" /></h2>
        <div
          v-for="Skel in 4"
          :key="Skel"
          class="w-full overflow-hidden shadow-md p-4 border-2 border-gray-200 mb-4"
        >
          <div class="flex sm:flex-row flex-col">
            <div class="flex flex-col">
              <Skeleton height="100px" width="120px" />
              <div><Skeleton /></div>
            </div>
            <div class="flex flex-col w-full ml-4">
              <p><Skeleton :count="4" /></p>
            </div>
          </div>

          <div class="mt-8">
            <span> <Skeleton width="80px" /> </span>
            <Skeleton width="100px" />
          </div>
        </div>
      </div>

      <div>
        <h3 class="mb-4"><Skeleton width="80px" /></h3>
        <div><Skeleton height="440px" /></div>
      </div>
    </article>
  </div>

  <p v-else-if="$fetchState.error">
    Error while fetching posts: {{ $fetchState.error.message }}
  </p>
  <article v-else>
    <h1 class="text-2xl font-bold leading-tight mb-2">
      # {{ story.content.title }}
    </h1>

    <div>
      <div class="flex items-center mb-2">
        <p class="text-mtl-infos">Sponsor:</p>
        <ul>
          <li
            v-for="sponsor in story.content.sponsors"
            :key="sponsor._uid"
            class="py-2 px-4"
          >
            <a :href="sponsor.link.url" target="_blank">
              <img :src="sponsor.image" :alt="sponsor.name" class="w-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="font-bold mb-4">Speakers:</h2>
      <div v-for="speaker in story.content.speakers" :key="speaker._uid">
        <article
          class="w-full overflow-hidden shadow-md p-4 border-2 border-gray-200 mb-4"
        >
          <div class="flex sm:flex-row flex-col">
            <div class="flex flex-col">
              <img
                :src="filterImageQuality(speaker.image, '65')"
                :alt="speaker.name"
                class="mx-auto w-48"
              />
              <div class="text-center mt-4">
                <a
                  v-if="speaker.github.url"
                  :href="speaker.github.url"
                  class="icon p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon
                    :icon="['fab', 'github']"
                    class="fill-current text-mtl-primary w-4 h-4"
                  />
                </a>
                <a
                  v-if="speaker.linkedin.url"
                  :href="speaker.linkedin.url"
                  class="icon p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    class="fill-current text-mtl-primary w-4 h-4"
                  />
                </a>
              </div>
            </div>
            <div v-if="speaker.description" class="flex flex-col w-full ml-4">
              <text-description :text="speaker.description" />
            </div>
          </div>

          <div v-if="speaker.video.url" class="mt-4">
            <h3 class="text-mtl-infos">Video:</h3>
            <div class="embed-responsive aspect-ratio-16/9 relative mt-2">
              <iframe
                :src="speaker.video.url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="absolute pin w-full h-full"
              ></iframe>
            </div>
          </div>

          <div class="mt-8">
            <span class="text-mtl-infos"> Slides: </span>
            <a
              :href="speaker.slides.url"
              class="text-mtl-primary font-bold underline "
              >Cliquez ici</a
            >
          </div>
        </article>
      </div>

      <div>
        <h3 class="font-bold mb-4">Gallery:</h3>
        <div>gallery photos urls: {{ story.content.gallery }}</div>
        <Carousel
          :images="[
            'https://images.unsplash.com/photo-1555108004-a9183c23169e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1526669754135-c1babeb8c542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
            'https://images.unsplash.com/photo-1519178614-68673b201f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'
          ]"
        />
      </div>
    </div>
  </article>
</template>

<script>
import TextDescription from '@/components/TextDescription'
import Carousel from '@/components/carousel'
import { Skeleton } from 'vue-loading-skeleton'

export default {
  components: {
    Carousel,
    TextDescription,
    Skeleton
  },
  data: () => ({
    story: null
  }),
  head() {
    if (!this.story) return {}
    const seo = this.story.content.seo

    return {
      title: seo.title || '',
      meta: [
        {
          property: 'og:title',
          content: seo.og_title || ''
        },
        {
          hid: `description`,
          name: 'description',
          content: seo.description
        },
        {
          property: 'og:title',
          content: seo.og_title || ''
        },
        {
          property: 'og:description',
          content: seo.og_description || ''
        },
        {
          property: 'og:image',
          content: seo.og_image || ''
        },
        {
          property: 'twitter:title',
          content: seo.twitter_title || ''
        },
        {
          property: 'twitter:description',
          content: seo.twitter_description || ''
        },
        {
          property: 'twitter:image',
          content: seo.twitter_image || ''
        }
      ]
    }
  },
  async fetch() {
    /* eslint-disable nuxt/no-this-in-fetch-data */
    const eventId = this.$route.params.eventId
    const locale = this.$i18n.locale

    const { data } = await this.$storyapi.get(`cdn/stories/events/${eventId}`, {
      language: locale,
      version: process.env.STORYBLOK_VERSION || 'draft'
    })
    this.story = data.story
  },
  activated() {
    // cache
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  methods: {
    filterImageQuality(image, quality) {
      if (!image) return ''
      if (!quality) return ''

      const imageService = '//img2.storyblok.com/'
      const path = image.replace('//a.storyblok.com', '')
      const option = `filters:quality(${quality})`
      return imageService + option + path
    }
  }
}
</script>

<style scoped>
.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}
</style>
