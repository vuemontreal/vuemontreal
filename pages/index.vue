<template>
  <div></div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {},
  asyncData({ app, error }) {
    return app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'events/',
        sort_by: 'content.date:asc'
      })
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
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
