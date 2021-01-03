<template>
  <div class="flex flex-col relative w-full">
    <label class="text-mtl-black-400 hidden">
      {{ label }}
    </label>
    <input
      class="w-full"
      :placeholder="label"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="postcss" scoped>
input {
  @apply border border-mtl-green-500 rounded-lg h-10 px-4 text-mtl-black-400;
}

input:disabled {
  @apply cursor-not-allowed bg-mtl-black-200;
}
</style>
