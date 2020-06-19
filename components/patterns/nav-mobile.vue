<template>
  <nav
    class="bg-mtl-black-500 fixed top-0 left-0 w-full pt-4 pb-2 flex justify-between items-center px-2"
  >
    <icon-menu-outline
      @click.native="$emit('openNav')"
      class="text-mtl-white w-8 h-8"
    />
    <icon-notifications v-if="true" class="text-mtl-white w-8 h-8" />
    <icon-notifications-active v-else class="text-mtl-white w-8 h-8" />
  </nav>
</template>

<script>
export default {}
</script>
