<template>
  <div class="flex items-end w-full lg:px-8 pb-2">
    <div class="w-2/3 flex justify-start items-center">
      <mtl-text-info class="p-2">
        <a
          :class="currentRoute == 'index' ? 'nuxt-link-active' : ''"
          href=""
          @click.prevent="$router.push(localePath('/'))"
        >
          <span class="pb-1">{{ $t('home') }}</span>
        </a>
      </mtl-text-info>
      <mtl-text-info class="p-2">
        <a
          :class="currentRoute == 'search' ? 'nuxt-link-active' : ''"
          href=""
          @click.prevent="$router.push(localePath('/events'))"
        >
          <span class="pb-1">{{ $t('events') }}</span>
        </a>
      </mtl-text-info>
      <mtl-text-info class="p-2">
        <nuxt-link
          :to="switchLocalePath($i18n.locale == 'en' ? 'fr' : 'en')"
          class="text-mtl-green-500"
        >
          {{ $i18n.locale == 'en' ? 'fr' : 'en' }}
        </nuxt-link>
      </mtl-text-info>
    </div>
    <div class="w-1/3 text-mtl-black flex items-center justify-end">
      <a
        class="p-2"
        href="https://join.slack.com/t/vuemontreal/shared_invite/zt-6cmiy7iv-izbVijXeeDNcQOREPo8tWA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-logo-slack class="w-6 h-6" />
      </a>
      <a
        class="p-2"
        href="https://github.com/vuemontreal/vuemontreal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-logo-github class="w-6 h-6" />
      </a>
      <a
        class="p-2"
        href="https://www.youtube.com/channel/UC16FJzwOFy72EYpDP20Etqw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-logo-youtube class="w-6 h-6" />
      </a>
      <a
        class="p-2"
        href="https://www.linkedin.com/groups/12289604/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-logo-linkedin class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>
