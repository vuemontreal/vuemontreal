<template>
  <article v-html="richtext" class="init"></article>
</template>

<script>
export default {
  name: 'EventDescription',
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

<style scoped>
article {
  height: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
