import Vue from 'vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/global.css'

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

Vue.prototype.$t = () => {
  return 'Traduction'
}

Vue.prototype.$i18n = {
  locale: 'en',
  setLocale: () => {
    console.log('set locale called')
  }
}


