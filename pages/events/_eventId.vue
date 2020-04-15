<template>
  <!--  eslint-disable vue/valid-template-root  -->
  <div v-if="$fetchState.pending">
    <article>
      <h1 class="mb-2 text-2xl font-bold leading-tight">
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
          class="w-full p-4 mb-4 overflow-hidden border-2 border-gray-200 shadow-md"
        >
          <div class="flex flex-col sm:flex-row">
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
    <h1 class="mb-2 text-2xl font-bold leading-tight">
      # {{ story.content.title }}
    </h1>

    <div>
      <div class="flex items-center mb-2">
        <p class="text-mtl-infos">Sponsor:</p>
        <ul>
          <li
            v-for="sponsor in story.content.sponsors"
            :key="sponsor._uid"
            class="px-4 py-2"
          >
            <a :href="sponsor.link.url" target="_blank">
              <img :src="sponsor.image" :alt="sponsor.name" class="w-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <text-description :text="story.content.description" class="mb-10" />
      <h2 class="mb-4 font-bold">Speakers:</h2>
      <div v-for="speaker in story.content.speakers" :key="speaker._uid">
        <article
          class="w-full p-4 mb-4 overflow-hidden border-2 border-gray-200 shadow-md"
        >
          <div class="flex flex-col sm:flex-row">
            <div class="flex flex-col">
              <img
                :src="filterImageQuality(speaker.image, '65')"
                :alt="speaker.name"
                class="w-48 mx-auto"
              />
              <div class="mt-4 text-center">
                <a
                  v-if="speaker.github.url"
                  :href="speaker.github.url"
                  class="p-2 icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon
                    :icon="['fab', 'github']"
                    class="w-4 h-4 fill-current text-mtl-primary"
                  />
                </a>
                <a
                  v-if="speaker.linkedin.url"
                  :href="speaker.linkedin.url"
                  class="p-2 icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <font-awesome-icon
                    :icon="['fab', 'linkedin']"
                    class="w-4 h-4 fill-current text-mtl-primary"
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
            <div class="relative mt-2 embed-responsive aspect-ratio-16/9">
              <iframe
                :src="speaker.video.url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="absolute w-full h-full pin"
              ></iframe>
            </div>
          </div>

          <div class="mt-8">
            <span class="text-mtl-infos"> Slides: </span>
            <a
              :href="speaker.slides.url"
              target="_blank"
              class="font-bold underline text-mtl-primary "
              >{{ $t('click_here') }}</a
            >
          </div>
        </article>
      </div>
      <carousel v-if="getImages.length > 0">
        <carousel-slide v-for="(image, index) in getImages" :key="index">
          <img :src="image" alt="" />
        </carousel-slide>
      </carousel>
    </div>
  </article>
</template>

<script>
import TextDescription from '@/components/textDescription'
import Carousel from '@/components/carousel/carousel'
import CarouselSlide from '@/components/carousel/carousel-slide'
import { Skeleton } from 'vue-loading-skeleton'

export default {
  components: {
    Carousel,
    CarouselSlide,
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
  computed: {
    getImages() {
      const images = []
      this.story.content.gallery.forEach((img) => {
        images.push(this.filterImageQuality(img.src, 450))
      })
      return images
    }
  },
  async fetch() {
    /* eslint-disable nuxt/no-this-in-fetch-data */
    const eventId = this.$route.params.eventId
    const locale = this.$i18n.locale

    const { version } = this.$nuxt.context.env

    const { data } = await this.$storyapi.get(`cdn/stories/events/${eventId}`, {
      language: locale,
      version
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
