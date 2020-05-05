<template>
  <div class="flex flex-col">
    <label for="" class="text-mtl-grey-500">{{ label }}</label>
    <input v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
input {
  @apply border border-mtl-green-500 rounded-lg h-12 px-8 text-mtl-grey-500;
}

input:disabled {
  @apply cursor-not-allowed bg-mtl-grey-200;
}
</style>
