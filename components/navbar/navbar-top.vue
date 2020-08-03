<template>
  <nav class="mb-5 flex justify-between">
    <div class="flex items-center icons">
      <button @click="openNav" class="lg:hidden p-2 icon">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="fill-current text-mtl-primary w-4 h-4"
        />
      </button>
      <div class="hidden lg:block">
        <social-links />
      </div>
    </div>
    <form @submit.prevent="submitSearch" class="flex items-center relative">
      <input
        v-model="search"
        type="text"
        class="border border-black border-solid pl-8"
        placeholder="search"
      />
      <button
        v-show="search"
        @click="clearSearch"
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
import SocialLinks from '~/components/social-links'

export default {
  name: 'NavBarTop',
  components: { SocialLinks },
  data() {
    return {
      search: ''
    }
  },

  created() {
    this.search = this.$route.query.searchTerm
  },

  methods: {
    clearSearch() {
      this.search = ''
      const query = Object.assign({}, this.$route.query)
      if (!query.searchTerm) return

      delete query.searchTerm
      this.$router.push({ query })
    },

    submitSearch() {
      const { withTag } = this.$route.query
      const lang = this.$store.state.i18n.locale

      const query = {
        searchTerm: this.search
      }
      if (withTag) query.withTag = withTag

      this.$router.push({
        path: '/' + lang + '/search',
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

.plus-icon {
  @apply absolute;
  right: 5px;
}

.close-icon {
  @apply absolute;
  left: 5px;
}
</style>
