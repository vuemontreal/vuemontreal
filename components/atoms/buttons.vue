<template>
  <button
    :class="{
      tertiary,
      primary,
      secondary
    }"
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
.tertiary {
}

.primary {
}

.secondary {
}
</style>
