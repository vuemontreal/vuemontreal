import { withA11y } from '@storybook/addon-a11y'

import {
  IconCalendarSharp,
  IconChevronBack,
  IconChevronForward,
  IconCloseSharp,
  IconLogoGithub,
  IconLogoLinkedin,
  IconLogoYoutube,
  IconMenuOutline,
  IconNotifications,
  IconTimeOutline
} from '@/components/index'

export const Icons = () => ({
  components: {
    IconCalendarSharp,
    IconChevronBack,
    IconChevronForward,
    IconCloseSharp,
    IconLogoGithub,
    IconLogoLinkedin,
    IconLogoYoutube,
    IconMenuOutline,
    IconNotifications,
    IconTimeOutline
  },
  template: `
    <div class="m-auto flex flex-wrap container mt-10">
        <div class="flex mb-10 mr-10 items-center text-mtl-green-500">
            <icon-calendar-sharp class="w-24 h-24 mr-4"/>
            <icon-calendar-sharp class="w-12 h-12 mr-4"/>
            <icon-calendar-sharp class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center text-mtl-grey-300">
            <icon-chevron-back class="w-24 h-24 mr-4"/>
            <icon-chevron-back class="w-12 h-12 mr-4"/>
            <icon-chevron-back class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-chevron-forward class="w-24 h-24 mr-4"/>
            <icon-chevron-forward class="w-12 h-12 mr-4"/>
            <icon-chevron-forward class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-close-sharp class="w-24 h-24 mr-4"/>
            <icon-close-sharp class="w-12 h-12 mr-4"/>
            <icon-close-sharp class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-logo-github class="w-24 h-24 mr-4"/>
            <icon-logo-github class="w-12 h-12 mr-4"/>
            <icon-logo-github class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-logo-linkedin class="w-24 h-24 mr-4"/>
            <icon-logo-linkedin class="w-12 h-12 mr-4"/>
            <icon-logo-linkedin class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-logo-youtube class="w-24 h-24 mr-4"/>
            <icon-logo-youtube class="w-12 h-12 mr-4"/>
            <icon-logo-youtube class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-menu-outline class="w-24 h-24 mr-4"/>
            <icon-menu-outline class="w-12 h-12 mr-4"/>
            <icon-menu-outline class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-notifications class="w-24 h-24 mr-4"/>
            <icon-notifications class="w-12 h-12 mr-4"/>
            <icon-notifications class="w-6 h-6 mr-4"/>
        </div>
        <div class="flex mb-10 mr-10 items-center">
            <icon-time-outline class="w-24 h-24 mr-4"/>
            <icon-time-outline class="w-12 h-12 mr-4"/>
            <icon-time-outline class="w-6 h-6 mr-4"/>
        </div>
    </div>
  `
})

export default {
  title: 'Tokens',
  decorators: [withA11y]
}
