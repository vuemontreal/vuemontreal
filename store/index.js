export const state = () => ({
  navMobile: false
})

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
      const dataTags = await app.$storyapi.get('cdn/tags', {
        version: process.env.STORYBLOK_VERSION || 'draft',
        starts_with: 'events/'
      })
      commit('search/setTags', dataTags.data.tags)
    } catch (e) {
      /* eslint-disable-next-line */
      console.error(e)
    }
  }
}
