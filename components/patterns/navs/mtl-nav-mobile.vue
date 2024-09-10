<template>
  <nav
    class="bg-mtl-black-500 fixed top-0 left-0 w-full h-12 flex justify-between items-center px-2 z-30"
  >
    <mtl-burger-menu
      class="text-mtl-white h-6 w-6"
      @click.native="$emit('openNav')"
    />
  </nav>
</template>

<script>
export default {}
</script>
