<template>
  <div class="bg-mtl-black-400 flex flex-col items-center py-8 text-mtl-white">
    <mtl-h-2 class="mb-4 text-2xl px-2 md:px-0">
      {{ $t('newsletter.subscribe_text') }}
    </mtl-h-2>
    <div class="mb-4 text-center px-2 md:px-0">
      {{ $t('newsletter.subscribe_subtext') }}
    </div>
    <form class="flex flex-col justify-center items-center" @submit.prevent="">
      <div class="flex mb-4 flex-wrap justify-center">
        <mtl-text-input label="email" class="mr-4 mb-4 lg:mb-0" type="email" />
        <mtl-button>{{ $t('newsletter.subscribe') }}</mtl-button>
      </div>
      <div class="text-xs text-right">
        {{ $t('newsletter.subscribe_promise') }}
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
