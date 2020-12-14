<template>
  <div class="flex pb-4 justify-between flex-wrap">
    <mtl-nav-mobile
      class="md:hidden"
      @openNav="$store.commit('openNavMobile')"
    />
    <mtl-nav-desktop class="hidden md:flex w-full" />
    <mtl-sidebar-mobile
      :open="openNav"
      class="md:hidden"
      :current-route="currentRoute"
    />
    <nuxt />
    <mtl-footer class="w-full" />
  </div>
</template>

<script>
export default {
  data: () => ({
    currentRoute: '',
  }),
  computed: {
    openNav() {
      return this.$store.state.navMobile
    },
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
}
</script>

<style lang="postcss">
@import '~/assets/css/global.css';
</style>
