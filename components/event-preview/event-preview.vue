<template>
  <article
    :class="
      isIncoming
        ? 'px-8 py-2 mb-10 border-solid border-8 border-mtl-green-500'
        : 'px-8 py-2 mb-10 border-solid border-4 border-grey-border-200'
    "
  >
    <header>
      <time class="text-mtl-primary text-sm">{{ event.sort_by_date }}</time>
      <nuxt-link :to="'/' + event.full_slug">
        <h1 class="text-2xl font-bold leading-tight">
          {{ event.content.title }}
        </h1>
      </nuxt-link>

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
                rel="noopener noreferrer"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
    <main class="my-12">
      <text-description :text="event.content.description" />
    </main>
    <footer class="border-t py-6 text-right">
      <a
        v-if="event.content.inscription && isIncoming"
        :href="event.content.inscription.url"
        target="_blank"
        class="button button-green"
        rel="noopener noreferrer"
        >{{ $t('register') }}</a
      >
      <nuxt-link :to="'/' + event.full_slug" class="button button-blue">
        <span class="pb-1">{{ $t('more') }}</span>
      </nuxt-link>
    </footer>
  </article>
</template>

<script>
import TextDescription from '@/components/event-preview/text-description'

export default {
  components: {
    TextDescription
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    isIncoming: {
      type: Boolean
    }
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
