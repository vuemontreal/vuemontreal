<template>
  <div class="card-block">
    <img
      class="max-w-full rounded-full h-24 w-24"
      :src="speaker.picture.filename"
      :alt="speaker.picture.alt"
    />
    <mtl-h4 class="mb-2 text-mtl-green-500 pt-4">{{ speaker.name }}</mtl-h4>
    <div>{{ speaker.job }}</div>
    <div>En savoir plus</div>
  </div>
</template>

<script>
export default {
  props: {
    speaker: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.card-block {
  @apply w-48 p-4 border border-mtl-black-200 rounded-lg flex flex-col items-center shadow;
}

.card-header {
  @apply mb-8;
}
</style>
