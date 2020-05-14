<template>
  <button
    :class="{
      primary,
      secondary,
      tertiary
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
      default: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    tertiary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
button {
  @apply rounded flex items-center px-6 py-3 text-sm font-semibold text-mtl-black-500 uppercase;
}

.primary {
  @apply bg-mtl-green-500 text-mtl-white;
}

.secondary {
  @apply bg-mtl-black-500 text-mtl-white;
}

.tertiary {
  @apply bg-mtl-black-200 text-mtl-black-400;
}
</style>
