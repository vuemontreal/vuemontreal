<template>
  <footer
    class="py-4 bg-black text-white flex justify-center items-center flex-col"
  >
    <p class="flex">
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
    </p>
    <p class="text-sm font-light text-center" v-html="$t('netlify')"></p>
  </footer>
</template>

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
