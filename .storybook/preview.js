import Vue from 'vue'
import { configure } from '@storybook/vue'

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})


configure(require.context('../components', true, /\.stories\.js$/), module);
