<template>
  <div>
    <upcoming :content="upcomingData" />
    <community :content="communityData" />
    <talents :content="talentsData" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    upcoming: () => import('~/components/sections/upcoming'),
    talents: () => import('~/components/sections/talents'),
    community: () => import('~/components/sections/community')
  },
  computed: {
    upcomingData() {
      const ret = {}
      Object.keys(this.story.content).forEach((e) => {
        if (e.includes('upcoming_')) {
          ret[e] = this.story.content[e]
        }
      })
      return ret
    },
    communityData() {
      const ret = {}
      Object.keys(this.story.content).forEach((e) => {
        if (e.includes('cmt_')) {
          ret[e] = this.story.content[e]
        }
      })
      return ret
    },
    talentsData() {
      const ret = {}
      Object.keys(this.story.content).forEach((e) => {
        if (e.includes('talents_')) {
          ret[e] = this.story.content[e]
        }
      })
      return ret
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories/${context.app.store.state.i18n.locale}/home`, {
        version: 'draft'
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          // console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          // console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style>
.big-circle {
  width: 25rem;
  height: 25rem;
}
</style>
