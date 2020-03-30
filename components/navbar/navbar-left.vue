<template>
  <nav class="flex flex-col mt-16">
    <div class="mb-4 p-1 icons lg:hidden">
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
    <button
      @click="openNav"
      class="lg:hidden p-6 mr-1 top-0 right-0 absolute icon"
    >
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="fill-current text-mtl-primary"
      />
    </button>
    <nuxt-link :to="localePath('/')" class="mb-2 p-1 font-semibold" exact>
      <span class="pb-1">{{ $t('home') }}</span>
    </nuxt-link>
    <nuxt-link :to="localePath('/search')" class="mb-2 p-1 font-semibold" exact>
      <span class="pb-1">{{ $t('archives') }}</span>
    </nuxt-link>
    <nuxt-link :to="localePath('/search')" class="mb-2 p-1 font-semibold" exact>
      <span class="pb-1">Archives</span>
    </nuxt-link>
    <nuxt-link :to="localePath('/search')" class="mb-2 p-1 font-semibold" exact>
      <span class="pb-1">Archives</span>
    </nuxt-link>
    <div class="mt-16 p-1">
      <div class="mb-2 font-semibold">Lang</div>
      <div>
        <button
          v-for="locale in availableLocales"
          :key="locale"
          @click="$i18n.setLocale(locale)"
          :class="
            $i18n.locale === locale ? 'border-green-500' : 'border-gray-500'
          "
          class="mr-2 px-1 pt-2 border-2 "
        >
          <img :src="require(`~/assets/${locale}.png`)" alt="" />
          {{ locale }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarLeft',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  },
  methods: {
    openNav() {
      this.$store.commit('openNavMobile')
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
