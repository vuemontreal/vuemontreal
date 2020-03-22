<template>
  <nav class="flex flex-col mt-16">
    <nuxt-link
      v-for="n in getNav"
      :to="localePath(n.real_path)"
      class="mb-2 p-1 font-semibold"
      exact
    >
      <span class="pb-1">{{ n.name }}</span>
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
import { mapGetters } from 'vuex'

export default {
  name: 'NavBarLeft',
  computed: {
    ...mapGetters(['getNav']),
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
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
</style>
