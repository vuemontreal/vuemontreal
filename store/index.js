import * as events from '~/events'

export const state = () => ({})

export const actions = {
  nuxtServerInit() {
    console.log(events)
  }
}
