<template>
  <nav class="flex flex-col mt-16 w-full">
    <div class="mb-4 p-1 icons lg:hidden flex">
      <a
        class="p-2 icon"
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
    <button
      @click="openNav"
      class="lg:hidden p-6 mr-1 top-0 right-0 absolute icon"
    >
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="fill-current text-mtl-primary"
      />
    </button>
    <a
      @click="$router.push(localePath('/'))"
      :class="currentRoute == 'index' ? 'nuxt-link-active' : ''"
      class="mb-2 p-1 font-semibold cursor-pointer"
    >
      <span class="pb-1">{{ $t('home') }}</span>
    </a>
    <a
      @click="$router.push(localePath('/search'))"
      :class="currentRoute == 'search' ? 'nuxt-link-active' : ''"
      class="mb-2 p-1 font-semibold cursor-pointer"
    >
      <span class="pb-1">{{ $t('archives') }}</span>
    </a>
    <div class="mt-16 p-1">
      <div>
        <button
          v-for="locale in availableLocales"
          :key="locale"
          @click="$i18n.setLocale(locale)"
          :class="
            $i18n.locale === locale || !$i18n
              ? 'border-mtl-green-500 focus:border-mtl-green-500 focus:outline-mtl-green-500'
              : 'border-mtl-black-500 focus:border-mtl-black-500'
          "
          class="mr-2 px-2 py-2 border-2 uppercase"
        >
          {{ locale }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarLeft',
  data: () => ({
    currentRoute: ''
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  },
  watch: {
    '$route.query': 'parseRoute'
  },
  mounted() {
    this.parseRoute()
  },
  methods: {
    openNav() {
      this.$store.commit('openNavMobile')
    },
    parseRoute() {
      const { name } = this.$route
      const finalName = name.split('__')[0]
      this.currentRoute = finalName
    }
  }
}
</script>

<style scoped>
.nuxt-link-active span {
  border-bottom: 0.2rem solid #42b983;
}

img {
  max-width: 2.5rem;
}

.icons {
  left: -10px;
  position: relative;
}

.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}
</style>
