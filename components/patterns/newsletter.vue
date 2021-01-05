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
      class="flex flex-col justify-center items-center"
      @submit.prevent="subscribe"
    >
      <input v-model="hidden" type="hidden" />
      <div class="flex mb-4 flex-wrap justify-center">
        <mtl-text-input
          v-model="email"
          required
          label="email"
          class="mr-4 mb-4"
          type="email"
        />
        <div class="flex flex-col">
          <span
            v-if="error"
            class="border-2 border-mtl-red-500 rounded-lg mb-4 p-2"
          >
            {{ $t('newsletter.failure') }}
          </span>
          <span
            v-if="success"
            class="border-2 border-mtl-green-500 rounded-lg mb-4 p-2"
          >
            {{ $t('newsletter.success') }}
          </span>
          <mtl-button>{{ $t('newsletter.subscribe') }}</mtl-button>
        </div>
      </div>
      <div class="text-xs text-right">
        {{ $t('newsletter.subscribe_promise') }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    hidden: 'ask-question',
    error: false,
    success: false,
  }),
  methods: {
    async subscribe() {
      this.error = false
      this.success = false
      if (!this.email) return (this.error = true)
      try {
        await this.$axios.$post('/.netlify/functions/subscribe', {
          email: this.email,
          hidden: this.hidden,
        })
        this.success = true
      } catch (e) {
        this.error = true
      }
    },
  },
}
</script>
