<template>
  <div class="card-wrapper">
    <div class="card-meetup-left">
      <img :src="img" />
      <!-- <person />
      <person />-->
    </div>
    <div class="card-meetup-right">
      <dir class="card-meetup_body">
        <div class="white block big">
          <vp-icon name="clock" />
          <span class="pl-4">
            jeudi 11 avril 2019
            18:00 à 21:00
          </span>
        </div>
        <div class="white block">
          <vp-icon name="map" />
          <span class="pl-4">5455 Avenue de Gaspé #200, Montréal, QC H2T 3B3</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.1378394634535!2d-73.59829758408372!3d45.527431679101745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a5740d5d2ab%3A0x35e48bb19907f03!2sATECNA+Montr%C3%A9al+%7C+Service+conseil+et+agence+int%C3%A9gr%C3%A9e+num%C3%A9rique!5e0!3m2!1sfr!2sca!4v1566523634638!5m2!1sfr!2sca"
          height="250"
          frameborder="0"
          style="border:0; width: 100%; margin-top: 12px; margin-bottom: 12px;"
        ></iframe>
        <div class="btn-block">
          <a
            class="btn-3d green"
            href="https://www.meetup.com/fr-FR/Vue-js-Montreal/events/"
            target="_blank"
          >Inscription</a>
        </div>
        <!-- Register on <img :src="meetup" width="115" /> -->
      </dir>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "/vue-logo-website-big-city.png"
    },
    values: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    console.log(this.values);
  }
};
</script>