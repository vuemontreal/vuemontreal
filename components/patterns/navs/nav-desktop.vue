<template>
  <div class="flex flex-wrap">
    <div
      class="border-b border-mtl-black-200 text-mtl-black-400 flex justify-end items-center w-full lg:px-20 py-4"
    >
      <a
        href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="px-2">{{ $t('contribute') }}</div>
      </a>
      <div class="border-l-2 border-mtl-black-400 px-2">
        <nuxt-link
          :to="switchLocalePath($i18n.locale == 'en' ? 'fr' : 'en')"
          class="uppercase"
        >
          {{ $i18n.locale == 'en' ? 'fr' : 'en' }}
        </nuxt-link>
      </div>
    </div>
    <div class="flex items-end w-full md:px-6 xl:px-24 py-2">
      <div class="w-2/3 flex justify-start items-center">
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
        <mtl-text-button class="p-2">
          <nuxt-link :to="localePath('/companies/contact')">
            <span class="pb-1">{{ $t('who') }}</span>
          </nuxt-link>
        </mtl-text-button>
      </div>
      <div class="w-1/3 text-mtl-black flex items-center justify-end">
        <a
          class="p-2"
          href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
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
  </div>
</template>

<script>
export default {}
</script>
