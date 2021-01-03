<template>
  <div class="w-full max-w-screen-xl m-auto md:px-6 mt-16 md:mt-0">
    <div class="flex flex-wrap items-start">
      <div class="w-full text-right lg:w-1/2 px-2 md:px-2">
        <mtl-h-1 class="mb-4">Formulaire de contact</mtl-h-1>
        <form
          name="company-project"
          method="post"
          data-netlify="true"
          class="flex flex-col items-end"
          action="/success"
        >
          <input type="hidden" name="form-name" value="company-project" />
          <div class="flex mb-4 w-full md:w-2/3">
            <mtl-text-input
              required
              label="email"
              class="mr-4 mb-4 lg:mb-0"
              type="email"
              name="email"
            />
          </div>
          <div class="flex mb-4 w-full md:w-2/3">
            <mtl-text-input
              required
              label="Company Name"
              class="mr-4 mb-4 lg:mb-0"
              type="text"
              name="name"
            />
          </div>
          <div class="flex mb-4 w-full md:w-2/3">
            <textarea
              required
              name="description"
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
    </div>
    <div class="w-full">
      <mtl-h-1 class="mb-4">FAQ</mtl-h-1>
      <mtl-h-2>Why you should do it?</mtl-h-2>
      <mtl-paragraph class="mb-4">
        As you may know VueJS ecosystem is growing very fast and developers want
        to work with it more and more. Sometime you don't know how communicate
        that you are working with VueJS.
        <ul>
          <li>We will give you advice to communicate about your project.</li>
          <li>We will communicate in our community.</li>
        </ul>
      </mtl-paragraph>
      <mtl-h-2>Give us more infos about you</mtl-h-2>
      <mtl-paragraph class="mb-4">
        We are all busy so save time for you and for us. When we will meet we
        will have enough infos to go faster.
      </mtl-paragraph>
      <mtl-h-2>We will contact you</mtl-h-2>
      <mtl-paragraph class="mb-4">
        As we are working full time. If we need a meeting, we will schedule a
        meeting depend on our agenda. It will be mostly after work or bettwen
        12h and 13h. We will try to not exceed 30 min.
      </mtl-paragraph>
      <mtl-h-2>We put your project on the website</mtl-h-2>
      <mtl-paragraph>
        When we have validate with you all the infos and we are ready to
        communicate about it. We will publish it on the website.
      </mtl-paragraph>
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
  mounted() {
    this.$store.commit('closeNavMobile')
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
