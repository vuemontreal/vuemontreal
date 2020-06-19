<template>
  <div class="layout"></div>
</template>

<script>
export default {
  mounted() {
    document.body.style.overflow = 'hidden'
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style lang="postcss" scoped>
.layout {
  background: rgba(156, 161, 169, 0.4);

  @apply fixed inset-0;
}
</style>
