<template>
  <div
    class=" bg-mtl-white px-4 py-8 rounded-full flex justify-center items-center"
  >
    <a :href="link" target="_blank" class="sponsor">
      <img :src="img" alt="" width="80" height="80" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.sponsor {
  @apply text-sm font-semibold  max-w-full;
}
</style>
