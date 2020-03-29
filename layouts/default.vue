<template>
  <div class="flex max-w-screen-md container mx-auto p-4 md:p-10">
    <div class="hidden lg:block w-3/12 p-5">
      <mtl-navbar-left />
    </div>
    <div class="w-full lg:w-9/12 p-0 lg:p-5">
      <mtl-navbar-top />
      <nuxt />
      <!-- <nuxt :keep-alive-props="{ max: 8 }" keep-alive /> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MtlNavbarTop: () => import('~/components/navbar/navbar-top'),
    MtlNavbarLeft: () => import('~/components/navbar/navbar-left')
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
</style>
