<template>
  <div class="card-block">
    <header class="card-header">
      <slot name="card-header" />
    </header>
    <main class="card-body">
      <slot name="card-body" />
    </main>
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
  @apply flex justify-between mb-8 items-center;
}

.card-body {
  @apply mb-6 flex;
}
</style>
