<template>
  <div>asdad</div>
</template>

<script>
export default {
  fetch() {
    const lang = this.$store.state.i18n.locale
    this.$nuxt.context.redirect('/' + lang)
  }
}
</script>

<style></style>
