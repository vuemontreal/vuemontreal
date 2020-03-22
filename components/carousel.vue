<template>
  <swiper :options="swiperOption" class="swiper my-6">
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="" />
    </swiper-slide>

    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        effect: 'fade',
        keyboard: {
          enabled: true
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        spaceBetween: 10
      }
    }
  }
}
</script>

<style>
.swiper {
  height: 400px;
  max-width: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  color: #42b983;
}

.swiper-pagination-bullet {
  background: #42b983;
}
</style>
