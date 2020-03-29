<template>
  <!--  eslint-disable vue/valid-template-root  -->
  <div v-if="$fetchState.pending">loading</div>
  <article v-else>
    <div>title event: {{ story.content.title }}</div>
    <hr />
    <div v-for="sponsor in story.content.sponsors" :key="sponsor._uid">
      sponsor
      <div>
        image: {{ sponsor.image }}
        <img :src="sponsor.image" alt="" />
      </div>
      <div>sponsor link : {{ sponsor.link.url }}</div>
    </div>
    <hr />
    <div>
      speakers
      <div v-for="speaker in story.content.speakers" :key="speaker._uid">
        <div>name: {{ speaker.name }}</div>
        <div>description: {{ speaker.description }}</div>
        <div>
          image:
          {{ speaker.image }}
          <img :src="speaker.image" alt="" />
        </div>
        <div>
          linkedin:
          {{ speaker.linkedin.url }}
        </div>
        <div>
          github:
          {{ speaker.github.url }}
        </div>
        <div>
          video:
          {{ speaker.video.url }}
        </div>
        <div>
          slides:
          {{ speaker.slides.url }}
        </div>
        <hr />
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
