import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import {
  MtlCardjob,
  MtlButton,
  Mtlparagraph,
  MtlTextinfo,
  IconCalendarSharp,
  IconTimeOutline,
  MtlH4,
  MtlH3
} from '@/components/index'

export const CardJob = () => ({
  components: {
    MtlCardjob,
    Mtlparagraph,
    MtlButton,
    MtlTextinfo,
    IconCalendarSharp,
    IconTimeOutline,
    MtlH4,
    MtlH3
  },
  template: `
    <div class="m-auto container mt-8 w-1/2">
        <mtl-cardjob>
          <template #card-header>
            <MtlH4 class="mb-2 text-mtl-green-500 pt-4">New</MtlH4>
            <MtlTextinfo class="bg-mtl-grey-200 absolute top-0 right-0 text-mtl-grey-500 rounded-bl-lg px-4 py-2">Full-time</MtlTextinfo>
          </template>
          <template #card-hero>
            <div class="w-10 h-10 bg-mtl-grey-400 rounded-lg mr-6 mt-1">
            </div>
            <div class="flex-grow">
                <MtlH3 class="text-mtl-grey-500">Senior Front-End Developer</MtlH3>
                <MtlTextinfo class="text-mtl-grey-200">At <span class="text-mtl-black-500">Sigma</span> San Francisco, CA, USA</MtlTextinfo>
            </div>
          </template>
          <template #card-body>
            <Mtlparagraph class="text-mtl-grey-500">
            The "orga" type meetings deal with topics about the organization of the Vue.js Montreal community. The goal of this meeting is to present the new vuemontreal.org website ...
            </Mtlparagraph>
          </template>
          <template #card-actions>
            <MtlButton>apply</MtlButton>
          </template>
        </mtl-cardjob>
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
