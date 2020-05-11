<template>
  <div class="card-block">
    <header class="card-header">
      <slot name="card-header" />
    </header>
    <section class="card-hero">
      <slot name="card-hero" />
    </section>
    <main class="card-body">
      <slot name="card-body" />
    </main>
    <footer class="card-actions">
      <slot name="card-actions" />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.card-block {
  box-shadow: 0 8px 42px rgba(0, 0, 0, 0.08);

  @apply px-4 pb-2 border border-mtl-grey-200 rounded-lg relative;
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
