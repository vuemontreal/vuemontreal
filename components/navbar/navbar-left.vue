<template>
  <nav class="flex flex-col mt-16">
    <nuxt-link class="mb-2 p-1 font-semibold" to="/">
      <span class="pb-1">Home</span>
    </nuxt-link>
    <nuxt-link class="mb-2 p-1 font-semibold" to="/#">
      <span class="pb-1">Sponsoring us</span>
    </nuxt-link>
    <nuxt-link class="mb-2 p-1 font-semibold" to="/#">
      <span class="pb-1">Gallery</span>
    </nuxt-link>
    <div class="mt-16 p-1">
      <div class="mb-2 font-semibold">Lang</div>
      <div>
        <button class="mr-2 px-1 pt-2 border-2 border-gray-500">
          <img src="~/assets/flag-us.png" alt="" />
          US
        </button>
        <button class="mr-2 px-1 pt-2 border-2 border-gray-500">
          <img src="~/assets/flag-fr.png" alt="" />
          FR
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarLeft'
}
</script>

<style scoped>
.nuxt-link-active span {
  border-bottom: 0.2rem solid #42b983;
}

img {
  max-width: 2.5rem;
}
</style>
