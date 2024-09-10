<template>
  <div class="card-block">
    <header class="card-header">
      <mtl-h4 class="mb-2 text-mtl-green-500 pt-4">New</mtl-h4>
      <mtl-text-info
        class="bg-mtl-black-200 absolute top-0 right-0 text-mtl-black-400 rounded-bl-lg px-4 py-2"
        >Full-time</mtl-text-info
      >
    </header>
    <section class="card-hero">
      <div class="w-10 h-10 bg-mtl-black-400 rounded-lg mr-6 mt-1"></div>
      <div class="flex-grow">
        <mtl-h3 class="text-mtl-black-400">Senior Front-End Developer</mtl-h3>
        <mtl-text-info class="text-mtl-black-200"
          >At <span class="text-mtl-black-500">Sigma</span> San Francisco, CA,
          USA</mtl-text-info
        >
      </div>
    </section>
    <main class="card-body">
      <mtl-paragraph class="text-mtl-black-400">
        The "orga" type meetings deal with topics about the organization of the
        Vue.js Montreal community. The goal of this meeting is to present the
        new vuemontreal.org website ...
      </mtl-paragraph>
    </main>
    <footer class="card-actions">
      <mtl-button>apply</mtl-button>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.card-block {
  box-shadow: 0 8px 42px rgba(0, 0, 0, 0.08);

  @apply px-4 pb-2 border border-mtl-black-200 rounded-lg relative;
}

.card-header {
  @apply flex justify-between mb-8;
}

.card-hero {
  @apply flex  mb-8;
}

.card-body {
  @apply mb-6;
}

.card-actions {
  @apply justify-end flex;
}
</style>
