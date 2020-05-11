import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import {
  MtlCardJob,
  MtlButton,
  MtlParagraph,
  MtlTextInfo,
  IconCalendarSharp,
  IconTimeOutline,
  MtlH4,
  MtlH3
} from '@/components'

export const CardJob = () => ({
  components: {
    MtlCardJob,
    MtlParagraph,
    MtlButton,
    MtlTextInfo,
    IconCalendarSharp,
    IconTimeOutline,
    MtlH4,
    MtlH3
  },
  template: `
    <div class="m-auto container mt-8 w-1/2">
        <mtl-card-job>
          <template #card-header>
            <mtl-h4 class="mb-2 text-mtl-green-500 pt-4">New</mtl-h4>
            <mtl-text-info class="bg-mtl-grey-200 absolute top-0 right-0 text-mtl-grey-500 rounded-bl-lg px-4 py-2">Full-time</mtl-text-info>
          </template>
          <template #card-hero>
            <div class="w-10 h-10 bg-mtl-grey-400 rounded-lg mr-6 mt-1">
            </div>
            <div class="flex-grow">
                <mtl-h3 class="text-mtl-grey-500">Senior Front-End Developer</mtl-h3>
                <mtl-text-info class="text-mtl-grey-200">At <span class="text-mtl-black-500">Sigma</span> San Francisco, CA, USA</mtl-text-info>
            </div>
          </template>
          <template #card-body>
            <mtl-paragraph class="text-mtl-grey-500">
            The "orga" type meetings deal with topics about the organization of the Vue.js Montreal community. The goal of this meeting is to present the new vuemontreal.org website ...
            </mtl-paragraph>
          </template>
          <template #card-actions>
            <mtl-button>apply</mtl-button>
          </template>
        </mtl-card-job>
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
