<template>
  <article class="px-8 py-2 mb-10 border-solid border-4 border-gray-200">
    <header>
      <time class="text-mtl-primary text-sm">
        <Skeleton />
      </time>
      <h1 class="text-2xl font-bold leading-tight">
        <Skeleton />
      </h1>
    </header>
    <main class="my-12">
      <Skeleton :count="4" />
    </main>
    <footer class="border-t py-6 text-right">
      <Skeleton />
    </footer>
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

<style></style>
