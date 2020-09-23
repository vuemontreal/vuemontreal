<template>
  <div></div>
  <!--  eslint-disable vue/valid-template-root  -->
  <!-- <div v-if="$fetchState.pending">
    <eventSkeleton />
  </div>

  <p v-else-if="$fetchState.error">
    Error while fetching posts: {{ $fetchState.error.message }}
  </p>

  <article v-else>
    <h1 class="mb-2 text-2xl font-bold leading-tight">
      # {{ story.content.title }}
    </h1>
    <template v-if="story.content.sponsors.length > 0">
      <sponsors :sponsors="story.content.sponsors" />
    </template>
    <div>
      <text-description :text="story.content.description" class="mb-10" />
      <h2 class="mb-4 font-bold">Speakers:</h2>
      <div v-for="speaker in story.content.speakers" :key="speaker._uid">
        <speakerCard :speaker="speaker" />
      </div>
      <carousel v-if="getImages.length > 0">
        <carousel-slide v-for="(image, index) in getImages" :key="index">
          <img :src="image" alt="" class="w-full" />
        </carousel-slide>
      </carousel>
    </div>
  </article> -->
</template>

<script>
export default {
  async fetch() {
    const eventId = this.$route.params.eventId
    const locale = this.$i18n.locale

    const { version } = this.$nuxt.context.env

    const { data } = await this.$storyapi.get(`cdn/stories/events/${eventId}`, {
      language: locale,
      version,
    })
    this.story = data.story
  },
  data: () => ({
    story: null,
  }),
  computed: {
    getImages() {
      const images = []
      this.story.content.gallery.forEach((img) => {
        images.push(this.filterImageQuality(img.src, 450))
      })
      return images
    },
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
    },
  },
  head() {
    if (!this.story) return {}
    const seo = this.story.content.seo

    return {
      title: seo.title || '',
      meta: [
        {
          property: 'og:title',
          content: seo.og_title || '',
        },
        {
          hid: `description`,
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.og_title || '',
        },
        {
          property: 'og:description',
          content: seo.og_description || '',
        },
        {
          property: 'og:image',
          content: seo.og_image || '',
        },
        {
          property: 'twitter:title',
          content: seo.twitter_title || '',
        },
        {
          property: 'twitter:description',
          content: seo.twitter_description || '',
        },
        {
          property: 'twitter:image',
          content: seo.twitter_image || '',
        },
      ],
    }
  },
}
</script>
