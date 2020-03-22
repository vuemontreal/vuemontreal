<template>
  <section class="flex flex-col">
    <article
      v-for="event in events"
      :key="event.uuid"
      class="px-8 py-2 mb-10 border-solid border-4 border-gray-200"
    >
      <header>
        <time class="text-mtl-primary text-sm">{{ event.sort_by_date }}</time>
        <h1 class="text-2xl font-bold leading-tight">
          {{ event.content.title }}
        </h1>

        <div
          v-if="event.content.sponsors && event.content.sponsors.length"
          class="flex items-center"
        >
          <p class="text-mtl-infos">Sponsors:</p>
          <ul>
            <li
              v-for="sponsor in event.content.sponsors"
              :key="sponsor._uid"
              class="py-2 px-4"
            >
              <a :href="sponsor.link.url" target="_blank">
                <img
                  :src="sponsor.image"
                  :alt="sponsor.name"
                  :href="event.content.inscription.url"
                  class="w-10"
                />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main class="my-12">
        <p>{{ event.content.preview }}</p>
      </main>
      <footer class="border-t py-6 text-right">
        <a
          v-if="event.content.inscription.url"
          href="#"
          target="_blank"
          class="button button-green"
          >Register</a
        >
        <nuxt-link :to="event.full_slug" class="button button-blue">
          <span class="pb-1">More</span>
        </nuxt-link>
      </footer>
    </article>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  asyncData({ app, error }) {
    const lang = app.store.state.i18n.locale
    return app.$storyapi
      .get('cdn/stories/', {
        version: 'draft',
        starts_with: lang + '/events/',
        sort_by: 'sort_by_date:desc'
      })
      .then((res) => {
        return { events: res.data.stories }
      })
      .catch((res) => {
        if (!res.response) {
          // eslint-disable-next-line
          console.error(res)
          error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          // eslint-disable-next-line
          console.error(res.response.data)
          error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  }
}
</script>

<style scoped>
.button {
  @apply bg-mtl-primary px-6 py-2 ml-4 text-mtl-white rounded-full;
}

.button-green {
  @apply bg-mtl-primary;
}

.button-blue {
  @apply bg-mtl-accent;
}
</style>
