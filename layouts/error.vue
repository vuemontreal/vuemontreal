<template>
  <div class="flex flex-wrap items-start justify-center">
    <div class="mb-8">
      <img src="~assets/notfound.png" alt="" />
    </div>
    <div class="flex justify-center w-full mb-12">
      <mtl-button @click.native="$router.back()">GO BACK</mtl-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$ga.event({
    //   eventCategory: 'error',
    //   eventAction: 'navigation',
    //   eventLabel: window.location.href
    // })
  }
}
</script>
