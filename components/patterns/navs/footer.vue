<template>
  <footer
    class="h-40 bg-black text-white flex justify-center items-center flex-col"
  >
    <p class="flex">
      <a
        class="p-2 icon hidden lg:block"
        href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'slack']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </a>
      <a
        class="p-2 icon hidden lg:block"
        href="https://www.linkedin.com/groups/12289604/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </a>
      <a
        class="p-2 icon hidden lg:block"
        href="https://github.com/vuemontreal/vuemontreal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </a>
    </p>
    <p class="text-sm font-light text-center">
      Thank's to
      <a
        href="https://www.netlify.com/open-source/"
        target="_blank"
        class="cursor-pointer underline"
        >Netlify Open Source program</a
      >
      for hosting us and give us full access<br />
      Copyright © 2020 Vue Montreal
    </p>
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
