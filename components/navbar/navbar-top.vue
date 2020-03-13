<template>
  <nav class="mb-5 flex justify-between">
    <div class="flex items-center">
      <a
        class="p-2 icon"
        href="https://app.slack.com/client/TDJE5CKHP/CDJV3SA11"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'slack']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </a>
      <a
        class="p-2 icon"
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
        class="p-2 icon"
        href="https://github.com/vuemontreal/vuemontreal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          :icon="['fab', 'github']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </a>
    </div>
    <div class="flex items-center">
      <input
        v-model="search"
        type="text"
        class="border border-black border-solid rounded-full pl-4"
        placeholder="search"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarTop',
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style>
.icon {
  left: -10px;
  position: relative;
}

.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}
</style>
