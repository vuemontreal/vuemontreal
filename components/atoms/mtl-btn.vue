<template>
  <button
    :class="{
      tertiary,
      primary,
      secondary
    }"
    class="mtl-btn"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    tertiary: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.mtl-btn {
  @apply px-3 py-2 rounded-md font-bold uppercase;
}

.tertiary {
  @apply bg-mtl-grey-200 text-mtl-grey-500;
}

.primary {
  @apply bg-mtl-green-500 text-mtl-white;
}

.secondary {
  @apply bg-mtl-grey-500 text-mtl-white;
}
</style>
