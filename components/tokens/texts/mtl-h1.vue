<template>
  <h1 :class="smaller ? 'smaller' : 'normal'"><slot /></h1>
</template>

<script>
export default {
  props: {
    smaller: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply font-bold;
}

.normal {
  @apply text-4xl;
}

.smaller {
  @apply text-xl;
}
</style>
