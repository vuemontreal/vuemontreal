<template>
  <div class="card-block">
    <header class="card-header">
      <mtl-h-4 class="mb-2 text-mtl-black-400">{{
        event.content.title
      }}</mtl-h-4>
      <div class="flex text-mtl-black-200">
        <div class="flex items-center">
          <icon-calendar-sharp class="mr-4 w-6 h-6" /><mtl-text-info
            class="mr-6"
            >{{ event.sort_by_date }}</mtl-text-info
          >
        </div>
        <div class="flex items-center">
          <icon-time-outline class="mr-4 w-6 h-6" /><mtl-text-info
            >20:00</mtl-text-info
          >
        </div>
      </div>
    </header>
    <main class="card-body">
      <mtl-paragraph class="text-mtl-black-400">
        <mtl-sb-text :text="event.content.short_description" />
      </mtl-paragraph>
    </main>
    <footer class="card-actions">
      <nuxt-link :to="localePath(`/events/${event.slug}`)">
        <mtl-button class="mr-2" tertiary>More Infos</mtl-button>
      </nuxt-link>
      <mtl-button
        v-if="event.content.inscription && event.content.inscription.url.length"
        @click.native="navigate"
        >Join</mtl-button
      >
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigate() {
      if (
        !this.event.content.inscription ||
        !this.event.content.inscription.url.length
      )
        return
      window.location.href = this.event.content.inscription.url
    },
  },
}
</script>

<style lang="postcss" scoped>
.card-block {
  box-shadow: 0 8px 42px rgba(0, 0, 0, 0.08);
  min-height: 300px;
  max-height: 300px;

  @apply px-4 py-2 border border-mtl-black-200 rounded-lg flex flex-col justify-between;
}

.card-header {
  @apply w-2/3 mb-8;
}

.card-body {
  max-height: 100px;

  @apply mb-6;

  overflow-y: hidden;
}

.card-actions {
  @apply justify-end flex;
}
</style>
