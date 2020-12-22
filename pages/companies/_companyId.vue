<template>
  <div class="w-full">
    <header
      class="w-full imgDefine"
      :style="{
        backgroundImage: `url(${imgUrl})`,
      }"
    ></header>
    <div class="h-12 bg-mtl-black-200">
      <ul class="max-w-screen-xl m-auto md:px-6 flex h-12 items-end">
        <li class="mr-4 relative">
          <div
            class="h-48 w-48 lole"
            :style="{
              backgroundImage: `url(${loleUrl})`,
            }"
          ></div>
        </li>
        <li class="mr-4">Profile</li>
        <li>Projects</li>
        <!-- <li>Jobs</li> -->
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

<style lang="postcss">
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
