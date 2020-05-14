<template>
  <div class="sponsor">{{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
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
