<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6 py-8">
    <div class="flex items-start">
      <div class="w-1/2">
        <mtl-h-1 class="mb-4">Formulaire de contact</mtl-h-1>
        <form
          name="company-project"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="flex flex-col items-start"
          @submit.prevent="handleSubmit"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div class="flex mb-4 w-2/3">
            <mtl-text-input
              v-model="form.email"
              required
              label="email"
              class="mr-4 mb-4 lg:mb-0"
              type="email"
            />
          </div>
          <div class="flex mb-4 w-2/3">
            <mtl-text-input
              v-model="form.name"
              required
              label="Company Name"
              class="mr-4 mb-4 lg:mb-0"
              type="email"
            />
          </div>
          <div class="flex mb-4 w-2/3">
            <textarea
              v-model="form.description"
              required
              rows="6"
              placeholder="Project description"
              label="email"
              class="mr-4 mb-4 lg:mb-0 w-full border border-mtl-green-500 rounded-lg p-4 text-mtl-black-400"
            >
            Description
            </textarea>
          </div>
          <mtl-button type="submit">
            {{ $t('newsletter.subscribe') }}
          </mtl-button>
        </form>
      </div>
      <div class="w-1/2">
        <div class="side-right">asda</div>
      </div>
    </div>
  </div>
</template>

<script>
import head from '~/utils/head'
export default {
  async asyncData({ app, store, env }) {
    const lang = app.i18n.locale === 'fr' ? '' : 'en/'
    const { version } = env
    try {
      const content = await app.$storyapi.get(`cdn/stories/${lang}home`, {
        version,
      })
      return {
        ...content.data.story.content,
      }
    } catch (e) {
      console.error(e)
    }
  },
  data() {
    return {
      form: {
        email: '',
        description: '',
        name: '',
      },
      error: '',
      success: '',
    }
  },
  mounted() {
    this.$store.commit('closeNavMobile')
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      this.$axios
        .post(
          '/',
          this.encode({
            'form-name': 'company-project',
            ...this.form,
          }),
          axiosConfig
        )
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log('all good', result)
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('error', err)
        })
    },
  },
  head,
}
</script>

<style lang="postcss">
.side-right {
  @apply rounded-lg p-4 shadow-lg;
  min-height: 300px;
}
</style>
