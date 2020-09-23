<template>
  <button
    :class="{
      primary,
      secondary,
      tertiary,
      active,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    tertiary: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
button {
  @apply rounded px-6 py-3 text-sm font-semibold text-mtl-black-500 uppercase;
}

.primary {
  @apply bg-mtl-green-500 text-mtl-white;
}

.secondary {
  @apply border-2 border-mtl-black-500 text-mtl-black-500 bg-mtl-white;
}

.secondary.active {
  @apply border-2 border-mtl-green-500 !important;
}

.tertiary {
  @apply bg-mtl-black-200 text-mtl-black-400;
}
</style>
