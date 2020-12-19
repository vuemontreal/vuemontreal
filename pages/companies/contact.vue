<template>
  <form
    name="company-project"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="flex flex-col justify-center items-center"
    @submit.prevent="handleSubmit"
  >
    <p class="hidden">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
    </p>
    <div class="flex mb-4 flex-wrap justify-center">
      <label>
        <mtl-text-input
          v-model="form.email"
          required
          label="email"
          class="mr-4 mb-4 lg:mb-0"
          type="email"
        />
      </label>
    </div>
    <div class="flex mb-4 flex-wrap justify-center">
      <label>
        <mtl-text-input
          v-model="form.name"
          required
          label="email"
          class="mr-4 mb-4 lg:mb-0"
          type="email"
        />
      </label>
    </div>
    <div class="flex mb-4 flex-wrap justify-center">
      <label>
        <textarea
          v-model="form.description"
          required
          label="email"
          class="mr-4 mb-4 lg:mb-0"
        ></textarea>
      </label>
    </div>
    <mtl-button type="submit">{{ $t('newsletter.subscribe') }}</mtl-button>
  </form>
</template>

<script>
export default {
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
}
</script>

<style></style>
