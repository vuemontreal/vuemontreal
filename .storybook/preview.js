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

Vue.prototype.$t = t => {
  return `{{${t}}}`
}

Vue.prototype.$i18n = {
  locale: 'en',
  setLocale: lang => {
    console.info('set locale called on', lang)
  }
}


