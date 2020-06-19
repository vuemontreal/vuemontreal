<template>
  <div
    class="max-w-screen-xl container mx-auto pt-12 lg:pt-24 md:pt-6 h-screen"
  >
    <mtl-nav-mobile @openNav="$store.commit('openNavMobile', true)" />
    <mtl-layout v-if="$store.state.navMobile" />
    <mtl-sidebar-mobile
      :navigation="datas"
      :open="$store.state.navMobile"
      @openNav="$store.commit('openNavMobile')"
      :currentRoute="currentRoute"
    />
    <nuxt />
    <mtl-footer :navigation="datas" />
  </div>
</template>

<script>
export default {
  data: () => ({
    currentRoute: '',
    datas: {}
  }),
  watch: {
    '$route.query': {
      handler: 'parseRoute',
      immediate: true
    }
  },
  async fetch() {
    const { version } = this.$nuxt.context.env
    const settings = await this.$storyapi.get(
      `cdn/stories/${
        this.$i18n.locale === 'fr' ? '' : this.$i18n.locale
      }/settings`,
      {
        version
      }
    )
    this.datas = settings.data.story.content
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },
  methods: {
    parseRoute() {
      const { name } = this.$route
      if (!name) return
      const finalName = name.split('__')[0]
      this.currentRoute = finalName
    }
  }
}
</script>

<style lang="postcss">
@import '~/assets/css/global.css';
</style>
