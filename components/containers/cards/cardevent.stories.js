import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import {
  MtlCardEvent,
  MtlButton,
  MtlParagraph,
  MtlTextInfo,
  IconCalendarSharp,
  IconTimeOutline,
  MtlH4
} from '@/components'

export const CardEvent = () => ({
  components: {
    MtlCardEvent,
    MtlParagraph,
    MtlButton,
    MtlTextInfo,
    IconCalendarSharp,
    IconTimeOutline,
    MtlH4
  },
  template: `
    <div class="m-auto container mt-8 w-1/2">
        <mtl-card-event>
          <template #card-header>
            <mtl-h4 class="mb-2 text-mtl-grey-500">009 - ORGA - Presentation of the new website vuemontreal.org</mtl-h4>
            <div class="flex text-mtl-grey-200">
              <div class="flex  items-center">
              <IconCalendarSharp class="mr-4 w-6 h-6"/><mtl-text-info class="mr-6">April 10, 2020</mtl-text-info>
              </div>
              <div class="flex  items-center">
                <icon-time-outline class="mr-4 w-6 h-6"/><mtl-text-info>20:00</mtl-text-info>
              </div>
            </div>
          </template>
          <template #card-body>
            <mtl-paragraph class="text-mtl-grey-500">
              The "orga" type meetings deal with topics about the organization of the
              Vue.js Montreal community. The goal of this meeting is to present the
              new vuemontreal.org website ...
            </mtl-paragraph>
          </template>
          <template #card-actions>
            <mtl-button class="mr-2" tertiary>More Infos</mtl-button>
            <mtl-button>Join</mtl-button>
          </template>
        </mtl-card-event>
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
