<template>
  <swiper :options="swiperOption" class="swiper my-6">
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :data-src="image" alt="" class="swiper-lazy" />
      <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    </swiper-slide>

    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/css/swiper.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

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
        lazy: {
          loadPrevNext: true
        },
        preloadImages: false,
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

<style scoped>
.swiper-slide {
  background: white;
}

.swiper-slide img {
  width: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  color: #42b983;
}

.swiper-pagination-bullet {
  background: #42b983;
}
</style>
