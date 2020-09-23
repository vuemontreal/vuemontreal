export const state = () => ({
  navMobile: false,
})

export const mutations = {
  openNavMobile(state) {
    state.navMobile = !state.navMobile
    if (state.navMobile === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
}
