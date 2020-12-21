<template>
  <div
    class="bg-mtl-black-400 flex flex-col items-center py-8 text-mtl-white md:px-0"
  >
    <mtl-h-2 class="mb-4 text-2xl">
      {{ $t('newsletter.subscribe_text') }}
    </mtl-h-2>
    <div class="mb-4 text-center">
      {{ $t('newsletter.subscribe_subtext') }}
    </div>
    <form
      name="newsletter"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="flex flex-col justify-center items-center"
      @submit.prevent=""
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <div class="flex mb-4 flex-wrap justify-center">
        <mtl-text-input required label="email" class="mr-4 mb-4" type="email" />
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
