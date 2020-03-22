<template>
  <swiper :options="swiperOption" class="swiper">
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1526669754135-c1babeb8c542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1526669754135-c1babeb8c542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        alt=""
      />
    </swiper-slide>

    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperExampleNavigation',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style>
.swiper {
  height: 300px;
  max-width: 100%;
}
</style>
