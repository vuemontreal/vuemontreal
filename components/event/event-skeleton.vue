<template>
  <article>
    <h1 class="mb-2 text-2xl font-bold leading-tight">
      <Skeleton />
    </h1>

    <div class="flex items-center mb-2">
      <p class="text-mtl-infos">
        <Skeleton width="140px" />
      </p>
    </div>

    <div>
      <h2 class="mb-4"><Skeleton width="140px" /></h2>
      <div
        v-for="Skel in 4"
        :key="Skel"
        class="w-full p-4 mb-4 overflow-hidden border-2 border-gray-200 shadow-md"
      >
        <div class="flex flex-col sm:flex-row">
          <div class="flex flex-col">
            <Skeleton height="100px" width="120px" />
            <div><Skeleton /></div>
          </div>
          <div class="flex flex-col w-full ml-4">
            <p><Skeleton :count="4" /></p>
          </div>
        </div>

        <div class="mt-8">
          <span> <Skeleton width="80px" /> </span>
          <Skeleton width="100px" />
        </div>
      </div>
    </div>

    <div>
      <h3 class="mb-4"><Skeleton width="80px" /></h3>
      <div><Skeleton height="440px" /></div>
    </div>
  </article>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton'

export default {
  components: {
    Skeleton
  }
}
</script>
