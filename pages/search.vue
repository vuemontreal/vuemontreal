<template>
  <div>
    <section id="tags">
      <div v-for="tag in possibleTags" :key="tag.name" class="">
        <span>{{ tag.name }}</span>
        {{ checkedTags.includes(tag.name) }}
        <input
          :checked="checkedTags.includes(tag.name)"
          @click="checked(tag.name, $event.target.checked)"
          :name="tag.name"
          type="checkbox"
        />
      </div>
    </section>

    <section id="events">
      <div v-for="event in events" :key="event.id">
        {{ event.content.title }}
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable camelcase */

import { mapState } from 'vuex'

export default {
  data: () => ({
    events: [],
    checkedTags: []
  }),
  computed: {
    ...mapState({
      possibleTags: (state) => state.search.possibleTags
    })
  },
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    const { with_tag = '', search_term = '' } = this.$route.query
    const lang = this.$store.state.i18n.locale

    this.checkedTags = this.parseUrlTags(with_tag)

    try {
      const events = await this.$storyapi.get('cdn/stories/', {
        version: process.env.STORYBLOK_VERSION || 'draft',
        starts_with: lang + '/events/',
        sort_by: 'sort_by_date:desc',
        with_tag: this.checkedTags,
        search_term
      })
      this.events = events.data.stories
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    isValid(tag) {
      return !!this.possibleTags.find((p) => p.name === tag)
    },
    // get tags from url and parse it without adding bad tags
    parseUrlTags(with_tag) {
      const tmp = []
      const splitTags = with_tag.split(',')
      splitTags.forEach((tag) => (this.isValid(tag) ? tmp.push(tag) : ''))
      return tmp
    },
    checked(val, checked) {
      const { search_term = '', with_tag = '' } = this.$route.query

      let tags = this.parseUrlTags(with_tag)

      if (checked && this.isValid(val)) {
        tags.push(val)
      } else if (!checked) {
        tags = tags.filter((tag) => tag !== val)
      }

      // spread operator important to tell vue no more the same ref
      this.checkedTags = [...tags]

      // push route will be catch by the watch and re fetch data
      this.$router.push({
        path: '/search',
        query: {
          with_tag: tags.join(','),
          search_term
        }
      })
    }
  }
}
</script>

<style></style>
