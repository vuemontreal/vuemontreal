<template>
  <article
    class="w-full p-4 mb-4 overflow-hidden border-2 border-gray-200 shadow-md"
  >
    <div class="flex flex-col sm:flex-row">
      <div class="flex flex-col">
        <img
          :src="filterImageQuality(speaker.image, '65')"
          :alt="speaker.name"
          class="w-48 mx-auto"
        />
        <div class="mt-4 text-center flex justify-center">
          <a
            v-if="speaker.github.url"
            :href="speaker.github.url"
            class="p-2 icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="w-4 h-4 fill-current text-mtl-primary"
            />
          </a>
          <a
            v-if="speaker.linkedin.url"
            :href="speaker.linkedin.url"
            class="p-2 icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="w-4 h-4 fill-current text-mtl-primary"
            />
          </a>
        </div>
      </div>
      <div v-if="speaker.description" class="flex flex-col w-full ml-4">
        <text-description :text="speaker.description" />
      </div>
    </div>

    <div v-if="speaker.video.url" class="mt-4">
      <h3 class="text-mtl-infos">Video:</h3>
      <div class="relative mt-2 embed-responsive aspect-ratio-16/9">
        <iframe
          :src="speaker.video.url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute w-full h-full pin"
        ></iframe>
      </div>
    </div>

    <div v-if="speaker.slides.url" class="mt-8">
      <a
        :href="speaker.slides.url"
        target="_blank"
        class="font-bold underline text-mtl-primary "
        >{{ $t('slides') }}</a
      >
    </div>
  </article>
</template>

<script>
import TextDescription from '@/components/event-preview/text-description'

export default {
  components: {
    TextDescription
  },
  props: {
    speaker: {
      type: Object,
      required: true
    }
  },
  methods: {
    filterImageQuality(image, quality) {
      if (!image) return ''
      if (!quality) return ''

      const imageService = '//img2.storyblok.com/'
      const path = image.replace('//a.storyblok.com', '')
      const option = `filters:quality(${quality})`
      return imageService + option + path
    }
  }
}
</script>

<style scoped>
.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}
</style>
