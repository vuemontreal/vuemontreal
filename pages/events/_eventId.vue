<template>
  <div></div>
</template>

<script>
export default {
  name: 'EventPage',
  asyncData({ app, error }) {
    return app.$storyapi
      .get(
        // 'cdn/stories/en/events/008-strategies-de-tdd-pour-tester-vos-applications-vuejs',
        'cdn/stories/en/events/008-from-tdd-strategies-to-tdd-for-testing-you-vuejs-application',
        {
          version: 'draft'
          // starts_with: 'events/007-strat'
        }
      )
      .then((res) => {
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
