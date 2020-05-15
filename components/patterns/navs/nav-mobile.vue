<template>
  <nav
    class="bg-mtl-black-500 fixed top-0 left-0 w-full h-12 flex justify-between items-center px-2"
  >
    <IconMenuOutline
      @click.native="$store.commit('openNavMobile')"
      size="1x"
      class="text-mtl-white w-6 h-6"
    />
    <IconNotifications v-if="true" size="1x" class="text-mtl-white w-6 h-6" />
    <IconNotificationsActive v-else size="1x" class="text-mtl-white w-6 h-6" />
  </nav>
</template>

<script>
import {
  IconMenuOutline,
  IconNotificationsActive,
  IconNotifications
} from '@/components/index'

export default {
  components: {
    IconMenuOutline,
    IconNotificationsActive,
    IconNotifications
  }
}
</script>
