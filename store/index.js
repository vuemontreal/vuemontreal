export const state = () => ({
  navMobile: false
})

export const mutations = {
  openNavMobile(state, val) {
    state.navMobile = val
  }
}
