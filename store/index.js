export const state = () => ({
  nav: [],
  navMobile: false
})

export const getters = {
  getNav(state) {
    const ret = []
    Object.keys(state.nav).map((n) => {
      if (state.nav[n].parent_id === 0 && !state.nav[n].is_folder)
        ret.push(state.nav[n])
    })
    return ret
  }
}

export const mutations = {
  setNav(state, nav) {
    state.nav = nav
  },
  openNavMobile(state) {
    state.navMobile = !state.navMobile
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    // TODO: MAke a promise all here instead
    try {
      const dataLinks = await app.$storyapi.get('cdn/links/', {
        version: process.env.STORYBLOK_VERSION || 'draft'
      })
      const dataTags = await app.$storyapi.get('cdn/tags', {
        version: process.env.STORYBLOK_VERSION || 'draft',
        starts_with: 'events/'
      })
      commit('search/setTags', dataTags.data.tags)
      commit('setNav', dataLinks.data.links)
    } catch (e) {
      /* eslint-disable-next-line */
      console.error(e)
    }
  }
}
