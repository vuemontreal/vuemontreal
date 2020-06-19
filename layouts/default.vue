<template>
  <div
    class="flex max-w-screen-lg container mx-auto md:p-10 justify-between flex-col"
  >
    <mtl-nav-mobile @openNav="$store.commit('openNavMobile', true)" />
    <mtl-sidebar-mobile
      :open="openNav"
      @openNav="$store.commit('openNavMobile')"
      :currentRoute="currentRoute"
    />
    <nuxt />
    <!-- <div class="flex">
      <div
        :class="{ open: openNav }"
        class="nav-left fixed left-0 inset-y-0 z-10 w-full lg:w-3/12 p-5 bg-white"
      >
        <mtl-navbar-left />
      </div>
      <div class="w-full lg:w-9/12 p-0 lg:p-5">
        <mtl-navbar-top />
      </div>
    </div>-->
    <mtl-footer />
  </div>
</template>

<script>
export default {
  data: () => ({
    currentRoute: ''
  }),
  computed: {
    openNav() {
      return this.$store.state.navMobile
    }
  },
  watch: {
    '$route.query': {
      handler: 'parseRoute',
      immediate: true
    }
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
