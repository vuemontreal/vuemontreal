<template>
  <div class="w-full">
    <header
      class="w-full imgDefine"
      :style="{
        backgroundImage: `url(${imgUrl})`,
      }"
    ></header>
    <div class="h-12 bg-mtl-black-200">
      <ul class="max-w-screen-xl m-auto md:px-6 flex h-12 items-center">
        <li class="mr-4 relative self-end">
          <div
            class="h-48 w-48 lole"
            :style="{
              backgroundImage: `url(${loleUrl})`,
            }"
          ></div>
        </li>
        <li class="mr-4">
          <nuxt-link :to="localePath(`/companies/${$route.params.companyId}`)">
            Profil
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="localePath(`/companies/${$route.params.companyId}/projects`)"
          >
            Projets
          </nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import imgUrl from '~/assets/example.jpg'
import loleUrl from '~/assets/lole.jpeg'
export default {
  data: () => ({
    imgUrl,
    loleUrl,
  }),
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply border-b-2 border-mtl-green-500 py-2;
}

.imgDefine {
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
}

.lole {
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
}
</style>
