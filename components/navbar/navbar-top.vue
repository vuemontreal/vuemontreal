<template>
  <nav class="mb-5 flex justify-between z-30">
    <div class="flex items-center icons">
      <button class="lg:hidden p-2 icon" @click="openNav">
        <mtl-burger-menu class="w-4 h-4" />
      </button>
      <a
        class="p-2 icon hidden lg:block"
        href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <mtl-logo-slack class="w-4 h-4" />
      </a>
      <a
        class="p-2 icon hidden lg:block"
        href="https://www.linkedin.com/groups/12289604/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <mtl-logo-linkedin class="w-4 h-4" />
      </a>
      <a
        class="p-2 icon hidden lg:block"
        href="https://github.com/vuemontreal/vuemontreal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <mtl-logo-github class="w-4 h-4" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarTop',
  methods: {
    openNav() {
      this.$store.commit('openNavMobile')
    },
  },
}
</script>

<style scoped>
.icons {
  left: -10px;
  position: relative;
}

.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}

.plus-icon {
  @apply absolute;

  right: 5px;
}

.close-icon {
  @apply absolute;

  left: 5px;
}
</style>
