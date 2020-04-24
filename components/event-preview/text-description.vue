<template>
  <div v-html="richtext"></div>
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
