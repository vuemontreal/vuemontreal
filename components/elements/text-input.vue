<template>
  <div class="flex flex-col">
    <label class="text-mtl-black-400">
      {{ label }}
      <input v-bind="$attrs" />
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
input {
  @apply border border-mtl-green-500 rounded-lg h-10 px-8 text-mtl-black-400;
}

input:disabled {
  @apply cursor-not-allowed bg-mtl-black-200;
}
</style>
