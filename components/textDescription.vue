<template>
  <article v-html="richtext"></article>
</template>

<script>
export default {
  name: 'TextDescription',
  props: {
    text: {
      type: [Object, String],
      default: null
    }
  },
  computed: {
    richtext() {
      return this.text ? this.$storyapi.richTextResolver.render(this.text) : ''
    }
  }
}
</script>
