export const state = () => ({
  navMobile: false,
})

export const mutations = {
  openNavMobile(state) {
    state.navMobile = true
    document.body.style.overflow = 'hidden'
  },
  closeNavMobile(state) {
    state.navMobile = false
    document.body.style.overflow = ''
  },
}
