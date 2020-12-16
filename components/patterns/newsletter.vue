<template>
  <div class="bg-mtl-black-400 flex flex-col items-center py-8 text-mtl-white">
    <mtl-h2 class="mb-4 text-2xl">Subscribe to our newsletter</mtl-h2>
    <div class="mb-4">Get the best of our listings into your inbox.</div>
    <form class="flex flex-col justify-center items-center" @submit.prevent="">
      <div class="flex items-center mb-4">
        <mtl-text-input label="email" class="mr-4" />
        <mtl-button>Subscribe</mtl-button>
      </div>
      <div class="text-xs text-right">
        ✋️ We promise to respect your inbox.
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
