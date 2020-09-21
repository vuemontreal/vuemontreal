<template>
  <div class="card-block">
    <header class="card-header">
      <slot name="card-header" />
    </header>
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

  @apply px-4 py-2 border border-mtl-black-200 rounded-lg;
}

.card-header {
  @apply w-2/3 mb-8;
}

.card-body {
  min-height: 100px;

  @apply mb-6;

  overflow-y: hidden;
}

.card-actions {
  @apply justify-end flex;
}
</style>
