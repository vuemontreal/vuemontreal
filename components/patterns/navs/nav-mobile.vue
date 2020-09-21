<template>
  <nav
    class="bg-mtl-black-500 fixed top-0 left-0 w-full h-12 flex justify-between items-center px-2"
  >
    <IconMenuOutline
      size="1x"
      class="text-mtl-white w-6 h-6"
      @click.native="$emit('openNav')"
    />
    <IconNotifications v-if="true" size="1x" class="text-mtl-white w-6 h-6" />
    <IconNotificationsActive v-else size="1x" class="text-mtl-white w-6 h-6" />
  </nav>
</template>

<script>
export default {}
</script>
