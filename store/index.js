export const state = () => ({
  nav: [],
  navMobile: false
})

export const getters = {
  getNav(state) {
    /* eslint-disable-next-line */
    let ret = []
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
    try {
      const { data } = await app.$storyapi.get('cdn/links/', {
        version: 'draft'
      })
      commit('setNav', data.links)
    } catch (e) {
      /* eslint-disable-next-line */
      console.error(e)
    }
  }
}
