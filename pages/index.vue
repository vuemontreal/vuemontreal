<template>
  <section class="events">
    <article v-for="event in events" class="event">
      <header>
        <time>{{ event.sort_by_date }}</time>
        <h1>{{ event.content.title }}</h1>

        <div
          v-if="event.content.sponsors && event.content.sponsors.length"
          class="sponsor"
        >
          <p>Sponsors:</p>
          <ul>
            <li v-for="sponsor in event.content.sponsors">
              <a :href="sponsor.link.url" target="_blank">
                <img :src="sponsor.image" :alt="sponsor.name" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <p>{{ event.content.preview }}</p>
      </main>
      <footer>
        <a
          v-if="event.content.inscription.url"
          :href="event.content.inscription.url"
          target="_blank"
          >Register</a
        >
        <nuxt-link :to="event.full_slug" class="button">
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
    return app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'events/',
        sort_by: 'sort_by_date:asc'
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
.events {
  display: flex;
  flex-direction: column;
}

.event {
  border: 1px solid black;
  margin-bottom: 2rem;
  padding: 2rem;
}
</style>
