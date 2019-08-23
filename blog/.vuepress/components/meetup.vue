<template>
  <div class="card-wrapper" v-if="endValues">
    <div class="card-meetup-left">
      <img :src="endValues.backgroundImg" />
      <person v-for="person in endValues.datas" :key="person.author" :person="person" />
    </div>
    <div class="card-meetup-right">
      <dir class="card-meetup_body">
        <div class="white block big">
          <vp-icon name="clock" />
          <span class="pl-4">
            {{endValues.date}}
            {{endValues.hour}}
          </span>
        </div>
        <div class="white block">
          <vp-icon name="map" />
          <span class="pl-4">{{endValues.location}}</span>
        </div>
        <iframe
          :src="endValues.gmapIframe"
          height="250"
          frameborder="0"
          style="border:0; width: 100%; margin-top: 12px; margin-bottom: 12px;"
        ></iframe>
        <div class="btn-block">
          <a class="btn-3d green" :href="endValues.eventLink" target="_blank">Inscription</a>
        </div>
      </dir>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: String,
      required: true
    }
  },
  data: () => ({
    endValues: null
  }),
  mounted() {
    this.endValues = JSON.parse(this.values);
  }
};
</script>