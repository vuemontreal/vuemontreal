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
  @apply bg-mtl-grey-200 text-mtl-grey-500 text-sm font-semibold px-8 py-4;
}
</style>
