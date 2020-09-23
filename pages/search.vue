<template>
  <div class="mt-16 px-4">
    <mtl-button
      v-for="tag in possibleTags"
      :key="tag.name"
      secondary
      :active="isInsideCheckedTags(tag)"
      class="inline-block"
      @click.native="checked(tag)"
    >
      {{ tag.name }}
    </mtl-button>

    <mtl-h-2 class="mt-3"> Events </mtl-h-2>
    <div class="flex flex-wrap -mx-1 mt-1">
      <div v-for="event in events" :key="event.id" class="w-full md:w-1/2 px-1">
        <mtl-card-event class="mt-4">
          <template #card-header>
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
          </template>
          <template #card-body>
            <mtl-paragraph class="text-mtl-black-400">
              <mtl-sb-text :text="event.content.short_description" />
            </mtl-paragraph>
          </template>
          <template #card-actions>
            <mtl-button class="mr-2" tertiary>More Infos</mtl-button>
            <mtl-button>Join</mtl-button>
          </template>
        </mtl-card-event>
      </div>
    </div>
  </div>
</template>

<script>
import head from '~/utils/head'
/* eslint-disable no-console */

export default {
  name: 'SearchPage',
  async fetch() {
    // eslint-disable-next-line no-unused-vars
    const { withTag = '', searchTerm = '' } = this.$route.query
    const lang = this.$i18n.locale
    const { version } = this.$nuxt.context.env
    try {
      const dataTags = await this.$storyapi.get('cdn/tags', {
        version,
        starts_with: 'events/',
      })
      this.possibleTags = [...dataTags.data.tags]

      const urlTags = this.parseUrlTags(withTag)

      const tmp = []
      this.possibleTags.forEach((t) => {
        if (urlTags.includes(t.name)) {
          tmp.push(t)
        }
      })
      this.checkedTags = [...tmp]

      const events = await this.$storyapi.get('cdn/stories/', {
        version,
        starts_with: lang + '/events/',
        sort_by: 'sort_by_date:desc',
        with_tag: withTag,
        search_term: searchTerm,
      })
      this.events = [...events.data.stories]
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  data: () => ({
    events: [],
    checkedTags: [],
    possibleTags: [],
  }),
  watch: {
    '$route.query': '$fetch',
  },
  mounted() {
    this.$nextTick(async () => {
      await this.$fetch()
    }, 0)
  },
  methods: {
    isInsideCheckedTags(tag) {
      if (this.checkedTags.find((t) => tag.name === t.name)) return true
      return false
    },
    parseUrlTags(withTag) {
      const tmp = []
      const splitTags = withTag.split(',').filter((e) => e.length)

      splitTags.forEach((tag) => {
        if (!tmp.includes(tag)) tmp.push(tag)
      })
      return tmp
    },
    checked(val) {
      const { searchTerm = '', withTag = '' } = this.$route.query
      let urlTags = this.parseUrlTags(withTag)

      if (!urlTags.includes(val.name)) urlTags = [...urlTags, val.name]
      else urlTags = urlTags.filter((t) => t !== val.name)

      const tmp = []
      this.possibleTags.forEach((t) => {
        if (urlTags.includes(t.name)) {
          tmp.push(t)
        }
      })
      this.checkedTags = [...tmp]

      // push route will be catch by the watch and re fetch data
      this.$router.push({
        path: this.switchLocalePath('/search'),
        query: {
          withTag: urlTags.join(','),
          searchTerm,
        },
      })
    },
  },
  head,
}
</script>
