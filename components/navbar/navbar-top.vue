<template>
  <nav class="mb-5 flex justify-between">
    <div class="flex items-center icons">
      <button @click="openNav" class="lg:hidden p-2 icon">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </button>
      <a
        class="p-2 icon hidden lg:block"
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
    </div>
    <form @submit.prevent="submitSearch" class="flex items-center relative">
      <input
        v-model="search"
        type="text"
        class="border border-black border-solid pl-8"
        placeholder="search"
      />
      <button
        v-if="search.length"
        @click="search = ''"
        type="button"
        class="close-icon"
      >
        <font-awesome-icon
          :icon="['fa', 'window-close']"
          class="fill-current text-mtl-primary w-4 h-4 cursor-pointer"
        />
      </button>
      <button @click="submitSearch" type="button" class="plus-icon">
        <font-awesome-icon
          :icon="['fa', 'search']"
          class="fill-current text-mtl-primary w-4 h-4 cursor-pointer"
        />
      </button>
    </form>
  </nav>
</template>

<script>
/* eslint-disable camelcase */

export default {
  name: 'NavBarTop',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    submitSearch() {
      const {
        // types = ['events'],
        with_tag
      } = this.$route.query

      const query = {
        search_term: this.search
      }
      if (with_tag) query.with_tag = with_tag

      this.$router.push({
        path: '/search',
        query
      })
    },
    openNav() {
      this.$store.commit('openNavMobile')
    }
  }
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
