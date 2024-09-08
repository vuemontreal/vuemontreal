<template>
  <aside
    :class="{ open }"
    class="nav-left fixed left-0 inset-y-0 z-40 w-full p-5 bg-white"
  >
    <div class="flex flex-col justify-start items-start w-full">
      <mtl-close-sharp
        class="mr-2 mt-2 top-0 right-0 absolute w-10 h-10 text-mtl-black-400"
        @click.native="$store.commit('closeNavMobile')"
      />
      <mtl-h-4 class="mb-4 text-mtl-green-400"> Navigation </mtl-h-4>
      <mtl-text-button class="p-2">
        <nuxt-link :to="localePath('/')">
          <span class="pb-1">{{ $t('home') }}</span>
        </nuxt-link>
      </mtl-text-button>
      <mtl-text-button class="p-2">
        <nuxt-link :to="localePath('/events')">
          <span class="pb-1">{{ $t('events') }}</span>
        </nuxt-link>
      </mtl-text-button>
      <!-- <mtl-text-button class="p-2">
        <nuxt-link :to="localePath('/companies/contact')">
          <span class="pb-1">{{ $t('who') }}</span>
        </nuxt-link>
      </mtl-text-button> -->
      <hr class="my-4" />
      <mtl-h-4 class="mb-4 text-mtl-green-400">
        {{ $t('lang') }}
      </mtl-h-4>
      <mtl-text-info class="mb-4 pl-4">
        <nuxt-link :to="switchLocalePath($i18n.locale == 'en' ? 'fr' : 'en')">
          {{ $i18n.locale == 'en' ? 'fr' : 'en' }}
        </nuxt-link>
      </mtl-text-info>
      <div
        class="mb-4 p-1 bg-mtl-black-400 text-mtl-white flex absolute bottom-0 left-0 w-full justify-center"
      >
        <a
          class="p-2"
          href="https://discord.gg/PxAeZaphnA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <mtl-logo-slack class="w-6 h-6" />
        </a>
        <a
          class="p-2"
          href="https://github.com/vuemontreal/vuemontreal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <mtl-logo-github class="w-6 h-6" />
        </a>
        <a
          class="p-2"
          href="https://www.linkedin.com/groups/12289604/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <mtl-logo-linkedin class="w-6 h-6" />
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    currentRoute: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.nav-left {
  left: -100%;
  transition: 0.3s ease-out;
}

.nav-left.open {
  display: inherit;
  left: 0;
  transition: 0.3s ease-out;

  @apply bg-mtl-white;
}
</style>
