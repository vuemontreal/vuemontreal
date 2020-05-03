<template>
  <div
    class="flex max-w-screen-lg container mx-auto p-4 md:p-10 justify-between flex-col"
  >
    <div class="flex">
      <div
        :class="{ open: openNav }"
        class="nav-left fixed left-0 inset-y-0 z-10 w-full lg:w-3/12 p-5 bg-white"
      >
        <mtl-navbar-left />
      </div>
      <div class="w-full lg:w-9/12 p-0 lg:p-5">
        <mtl-navbar-top />
        <nuxt />
      </div>
    </div>

    <mtl-footer />
  </div>
</template>

<script>
export default {
  components: {
    MtlNavbarTop: () => import('~/components/navbar/navbar-top'),
    MtlNavbarLeft: () => import('~/components/navbar/navbar-left'),
    MtlFooter: () => import('~/components/footer')
  },
  computed: {
    openNav() {
      return this.$store.state.navMobile
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
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  outline: none;
}

.nav-left {
  left: -100%;
  transition: 0.3s ease-out;
}

.nav-left.open {
  display: inherit;
  left: 0;
  transition: 0.3s ease-out;
}

@media (min-width: 1024px) {
  .nav-left {
    position: inherit;
  }
}
</style>
