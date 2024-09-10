<template>
  <div>
    <div v-html="richtext"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [Object, String],
      required: true,
    },
  },
  computed: {
    richtext() {
      return typeof this.text !== 'object'
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text)
    },
  },
}
</script>
