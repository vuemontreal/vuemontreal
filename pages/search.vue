<template>
  <div>
    <section id="tags" class="flex flex-wrap border-mtl-primary border px-6">
      <div
        v-for="tag in possibleTags"
        :key="tag.name"
        class="p-4 container w-full md:w-1/3 lg:w-1/3 lg:mb-4"
      >
        <label class="text-base relative">
          <span class="pl-2">
            {{ tag.name }}
          </span>

          <input
            :checked="checkedTags.includes(tag.name)"
            @click="checked(tag.name, $event.target.checked)"
            :name="tag.name"
            type="checkbox"
            class="checkbox"
          />
          <span class="checkmark"></span>
        </label>
      </div>
    </section>

    <section id="events" class="mt-5">
      <div v-if="$fetchState.pending">
        <eventPreviewSkeleton v-for="Skel in 4" :key="Skel" />
      </div>
      <p v-else-if="$fetchState.error">
        Error while fetching event
      </p>
      <event-preview
        v-else
        v-for="event in events"
        :key="event.uuid"
        :event="event"
      />
    </section>
  </div>
</template>

<script>
/* eslint-disable no-console */
/* eslint-disable camelcase */

import eventPreviewSkeleton from '@/components/eventPreviewSkeleton'
import eventPreview from '@/components/eventPreview'

export default {
  components: {
    eventPreview,
    eventPreviewSkeleton
  },
  data: () => ({
    events: [],
    checkedTags: [],
    possibleTags: []
  }),
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    const { with_tag = '', search_term = '' } = this.$route.query
    const lang = this.$store.state.i18n.locale

    try {
      const dataTags = await this.$storyapi.get('cdn/tags', {
        version: process.env.STORYBLOK_VERSION || 'draft',
        starts_with: 'events/'
      })
      this.possibleTags = [...dataTags.data.tags]
      this.checkedTags = this.parseUrlTags(with_tag)

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
  mounted() {
    this.$fetch()
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
        path: this.switchLocalePath('/search'),
        query: {
          with_tag: tags.join(','),
          search_term
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container label {
  display: flex;
  justify-content: space-between;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

span.checkmark {
  position: relative;
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: #eee;
  cursor: pointer;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  @apply bg-mtl-primary;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 8px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
