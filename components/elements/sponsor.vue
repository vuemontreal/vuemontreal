<template>
  <a :href="link" target="_blank" class="sponsor">
    <img :src="img" alt="" width="80" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.sponsor {
  @apply bg-mtl-black-200 text-mtl-black-400 text-sm font-semibold px-8 py-4;
}
</style>
