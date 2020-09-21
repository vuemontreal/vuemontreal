export const state = () => ({
  navMobile: false,
})

export const mutations = {
  openNavMobile(state) {
    state.navMobile = !state.navMobile
  },
}
