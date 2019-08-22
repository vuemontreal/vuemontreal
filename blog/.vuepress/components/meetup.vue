<template>
  <div>
    <div v-if="canFetch">fetch ok</div>
    <div v-else-if="error">error with fetch</div>
    <div v-else>fetch not present</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    canFetch: false,
    error: false,
    // meetupUrl: "https://api.meetup.com/js-montreal/events?page=1"
    meetupUrl:
      "https://api.meetup.com/js-montreal/events?&sign=true&photo-host=public&page=1"
  }),
  beforeMount() {
    if (typeof fetch !== "function") return;
    this.canFetch = true;

    fetch(this.meetupUrl)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
      });
  }
};
</script>