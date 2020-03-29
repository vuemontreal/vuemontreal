<template>
  <!--  eslint-disable vue/valid-template-root  -->
  <div v-if="$fetchState.pending">loading</div>
  <article v-else>
    <h1 class="text-2xl font-bold leading-tight uppercase mb-2">
      #{{ story.content.title }}
    </h1>

    <div v-for="sponsor in story.content.sponsors" :key="sponsor._uid">
      <div class="flex items-center mb-2">
        <p class="text-mtl-infos">Sponsor:</p>
        <ul>
          <li class="py-2 px-4">
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
          class="w-full overflow-hidden shadow-md p-4 border-2 border-gray-200"
        >
          <div class="flex sm:flex-row flex-col ">
            <div class="flex flex-col">
              <img :src="speaker.image" :alt="speaker.name" class="mx-auto" />
              <div class="text-center mt-4">
                <a
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
            <div class="flex flex-col w-full ml-4">
              <p>Description {{ speaker.description }}</p>
            </div>
          </div>

          <div class="mt-4">
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
        gallery carousel:
        <div>gallery photos urls: {{ story.content.gallery }}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}
</style>
