<template>
  <nav
    class="bg-mtl-black-500 fixed top-0 left-0 w-full h-12 flex justify-between items-center px-2 z-30"
  >
    <icon-menu-outline
      size="1x"
      class="text-mtl-white w-6 h-6"
      @click.native="$emit('openNav')"
    />
    <icon-notifications v-if="true" size="1x" class="text-mtl-white w-6 h-6" />
    <icon-notifications-active
      v-else
      size="1x"
      class="text-mtl-white w-6 h-6"
    />
  </nav>
</template>

<script>
export default {}
</script>
