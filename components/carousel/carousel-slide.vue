<template>
  <transition :name="transition">
    <div v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      index: 0
    }
  },
  computed: {
    transition() {
      if (!this.$parent.direction) return
      return 'slide-' + this.$parent.direction
    },
    visible() {
      return this.index === this.$parent.index
    }
  }
})
</script>

<style scoped>
.slide-right-enter-active {
  animation: slideRightIn 1s;
}

.slide-right-leave-active {
  animation: slideRightOut 1s;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

@keyframes slideRightIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideRightOut {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.slide-left-enter-active {
  animation: slideLeftIn 1s;
}

.slide-left-leave-active {
  animation: slideLeftOut 1s;
  left: 0;
  position: absolute;
  top: 0;
}

@keyframes slideLeftIn {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes slideLeftOut {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}
</style>
