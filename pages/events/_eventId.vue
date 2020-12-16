<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6">
    <header class="bg-mtl-black-500 flex-wrap py-8 flex mb-4">
      <div
        class="w-full flex items-center justify-center mb-4 px-8 relative hero"
      >
        <h1
          class="text-mtl-white absolute bottom-0 text-4xl text-center font-bold w-full md:w-1/2"
        >
          {{ title }}
        </h1>
      </div>
    </header>
    <section id="speakers" class="mb-2">
      <div class="flex flex-wrap">
        <mtl-card-speaker
          v-for="speaker in speakers"
          :key="speaker.id"
          :speaker="speaker.content"
          class="mr-2 mb-2"
        />
      </div>
    </section>
    <section id="description" class="px-4">
      <mtl-paragraph>
        {{ description }}
      </mtl-paragraph>
      <div class="text-right">
        <mtl-button
          v-if="inscription && inscription.url.length"
          @click.native="navigate"
          >Join</mtl-button
        >
      </div>
    </section>
  </div>
</template>

<script>
import head from '~/utils/head'
export default {
  async asyncData({ app, params, env }) {
    const eventId = params.eventId
    const locale = app.i18n.locale

    const { version } = env

    const { data } = await app.$storyapi.get(`cdn/stories/events/${eventId}`, {
      language: locale,
      version,
      resolve_relations: 'speakers',
    })
    return {
      ...data.story.content,
    }
  },
  mounted() {
    this.$store.commit('closeNavMobile')
  },
  methods: {},
  head,
}
</script>

<style lang="postcss">
.hero {
  height: 370px;
  background-image: url('~assets/vue-logo-transparent.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
