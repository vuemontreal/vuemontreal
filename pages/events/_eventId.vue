<template>
  <!--  eslint-disable vue/valid-template-root  -->
  <div v-if="$fetchState.pending">loading</div>
  <div v-else>event page</div>
</template>

<script>
export default {
  data: () => ({
    story: null
  }),
  async fetch() {
    /* eslint-disable nuxt/no-this-in-fetch-data */
    const { data } = await this.$storyapi.get(
      `cdn/stories${this.$route.path}`,
      {
        version: process.env.STORYBLOK_TOKEN || 'draft'
      }
    )
    this.story = data.story
  }
}
</script>
