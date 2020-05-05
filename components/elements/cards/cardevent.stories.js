import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import {
  MtlCardevent,
  MtlButton,
  Mtlparagraph,
  MtlTextinfo,
  IconCalendarSharp,
  IconTimeOutline,
  MtlH4
} from '@/components/index'

export const CardEvent = () => ({
  components: {
    MtlCardevent,
    Mtlparagraph,
    MtlButton,
    MtlTextinfo,
    IconCalendarSharp,
    IconTimeOutline,
    MtlH4
  },
  template: `
    <div class="m-auto container mt-8 w-1/2">
        <mtl-cardevent>
          <template #card-header>
            <MtlH4 class="mb-2 text-mtl-grey-500">009 - ORGA - Presentation of the new website vuemontreal.org</MtlH4>
            <div class="flex text-mtl-grey-200">
              <div class="flex  items-center">
              <IconCalendarSharp class="mr-4 w-6 h-6"/><MtlTextinfo class="mr-6">April 10, 2020</MtlTextinfo>
              </div>
              <div class="flex  items-center">
                <IconTimeOutline class="mr-4 w-6 h-6"/><MtlTextinfo>20:00</MtlTextinfo>
              </div>
            </div>
          </template>
          <template #card-body>
            <Mtlparagraph class="text-mtl-grey-500">
              The "orga" type meetings deal with topics about the organization of the
              Vue.js Montreal community. The goal of this meeting is to present the
              new vuemontreal.org website ...
            </Mtlparagraph>
          </template>
          <template #card-actions>
            <MtlButton class="mr-2" tertiary>More Infos</MtlButton>
            <MtlButton>Join</MtlButton>
          </template>
        </mtl-cardevent>
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
