<template>
  <div class="card-block">
    <header class="mb-2">
      <div class="flex flex-wrap">
        <a
          v-for="speaker in event.content.speakers"
          :key="speaker.id"
          rel="noopener noreferrer"
          :href="
            speaker.content && speaker.content.social
              ? speaker.content.social
              : ''
          "
          target="_blank"
          class="mr-2"
          @click="
            $ga.event({
              eventCategory: 'speaker',
              eventAction: 'click',
              eventLabel: speaker.content.name,
              eventValue: 1,
            })
          "
        >
          <popover :name="speaker.id.toString()" event="hover">
            {{ speaker.content.name }}
          </popover>
          <img
            v-if="speaker.content"
            v-popover.top="{ name: speaker.id.toString() }"
            class="w-12 h-12 xl:w-16 xl:h-16 rounded-full object-cover"
            :src="
              speaker.content.picture.filename.replace(
                '//a.storyblok.com',
                '//img2.storyblok.com',
              )
            "
            :alt="speaker.content.picture.alt"
          />
        </a>
      </div>
    </header>
    <main class="card-body flex-1 mb-2">
      <mtl-h-3 class="text-mtl-black-400 mb-2">{{
        event.content.title
      }}</mtl-h-3>
      <mtl-paragraph class="text-mtl-black-400">
        <mtl-sb-text v-clampy="4" :text="event.content.description" />
      </mtl-paragraph>
    </main>
    <footer class="card-actions">
      <div class="flex items-center text-mtl-black-300">
        <mtl-calendar-sharp class="mr-4 w-6 h-6" />
        <mtl-text-info class="mr-6">
          {{ event.sort_by_date }}
        </mtl-text-info>
      </div>
      <a
        v-if="event.content.inscription && event.content.inscription.url.length"
        class="rounded px-6 py-3 text-sm font-semibold uppercase bg-mtl-green-500 text-mtl-white"
        :href="event.content.inscription.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('more') }}
      </a>
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
}
</script>

<style lang="postcss" scoped>
.card-block {
  box-shadow: 0 8px 42px rgba(0, 0, 0, 0.08);
  min-height: 300px;
  max-height: 300px;

  @apply px-4 py-2 border border-mtl-black-200 rounded-lg flex flex-col justify-between;
}

.card-body {
  overflow-y: hidden;
}

.card-actions {
  @apply justify-between items-center flex;
}
</style>
