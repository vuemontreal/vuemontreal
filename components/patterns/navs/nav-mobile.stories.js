import { withA11y } from '@storybook/addon-a11y'

import {
  IconMenuOutline,
  IconNotificationsActive,
  IconNotifications,
  MtlNavMobile,
  MtlSideBarMobile
} from '@/components/index'
export const NavMobile = () => ({
  components: {
    IconMenuOutline,
    IconNotificationsActive,
    IconNotifications,
    MtlNavMobile,
    MtlSideBarMobile
  },
  data: () => ({
    open: false
  }),
  methods: {
    toggleNav() {
      // eslint-disable-next-line no-console
      console.info('toggle nav')
      this.open = !this.open
    }
  },
  template: `
    <div>
        <mtl-nav-mobile @openNav="toggleNav" />
        <mtl-side-bar-mobile  @openNav="toggleNav" :open="open"/>
    </div>
  `
})

export default {
  title: 'Navigations',
  decorators: [withA11y]
}
