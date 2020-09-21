<template>
  <div class="carousel">
    <slot></slot>
    <button class="arrow arrow__left" @click.prevent="prev">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </button>
    <button class="arrow arrow__right" @click.prevent="next">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </button>
    <div class="navigation">
      <button
        v-for="number in slidesCount"
        :key="number"
        :class="{ active: number - 1 === index }"
        class="nav-dot"
        @click="goToSlide(number - 1)"
      ></button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      index: 0,
      slides: [],
      direction: null,
    }
  },
  computed: {
    slidesCount() {
      return this.slides.length
    },
  },
  mounted() {
    this.slides = this.$children
    this.slides.forEach((slide, index) => {
      slide.index = index
    })
  },
  methods: {
    prev() {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    next() {
      this.index++
      this.direction = 'right'
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    goToSlide(index) {
      this.direction = index > this.index ? 'right' : 'left'
      this.index = index
    },
  },
})
</script>

<style scoped>
.carousel {
  overflow: hidden;
  position: relative;
}

.arrow {
  height: 80px;
  position: absolute;
  top: calc(50% - 40px);
  transition: 0.3s;
  width: 60px;
}

.arrow:hover {
  opacity: 1;
}

.arrow__left {
  left: 0;
}

.arrow__left:hover {
  transform: translateX(-5px);
  transition: 0.3s;
}

.arrow__right {
  right: 0;
}

.arrow__right:hover {
  transform: translateX(5px);
  transition: 0.3s;
}

.arrow svg {
  color: #42b983;
  height: 50px;
  opacity: 1;
  width: 50px;
}

.navigation {
  bottom: 5px;
  position: absolute;
  text-align: center;
  width: 100%;
}

.nav-dot {
  background: white;
  border-radius: 100%;
  border: 1px solid #0a87bc;
  height: 10px;
  margin: 5px;
  opacity: 0.8;
  width: 10px;
}

.nav-dot:hover {
  background: #42b983;
}

.nav-dot.active {
  background: #42b983;
  opacity: 1;
}
</style>
