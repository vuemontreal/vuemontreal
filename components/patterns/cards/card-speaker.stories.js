import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import {
  MtlCardSpeaker,
  MtlButton,
  MtlParagraph,
  MtlTextInfo,
  IconCalendarSharp,
  IconTimeOutline,
  MtlH4,
  MtlH3,
  IconLogoYoutube,
  IconDocumentOutline,
} from '@/components'

export const CardSpeaker = () => ({
  components: {
    MtlCardSpeaker,
    MtlParagraph,
    MtlButton,
    MtlTextInfo,
    IconCalendarSharp,
    IconTimeOutline,
    MtlH4,
    MtlH3,
    IconLogoYoutube,
    IconDocumentOutline,
  },
  template: `
    <div class="m-auto container mt-8 w-1/2">
        <mtl-card-speaker>
          <template #card-header>
            <div>
                <mtl-h4 class="mb-2 text-mtl-green-500 pt-4">Speaker Name</mtl-h4>
                <mtl-text-info class="text-mtl-black-400">Introductory workshop to NuxtJS</mtl-text-info>
            </div>
            <div class="text-mtl-black-400 flex">
                <IconLogoYoutube class="w-8 h-8 mr-2"/>
                <IconDocumentOutline class="w-8 h-8"/>
            </div>
          </template>
          <template #card-body>
            <div class="hidden w-1/4 md:block">
                <img class="max-w-full h-auto" src="https://lh3.googleusercontent.com/proxy/lDqEWL0qe0k9aVNHAFGaGWtedpVsoBVyXveByfySxIdI2OmIvDRe4tsVqAr9mOy1BvB2DuRZtqtCHbskFuzdsyDP9KMFIJivA1FEfFByuCGV" />
            </div>
            <mtl-paragraph class="w-full text-mtl-black-400 md:w-3/4 pl-4">
            The "orga" type meetings deal with topics about the organization of the Vue.js Montreal community. The goal of this meeting is to present the new vuemontreal.org website ...
            </mtl-paragraph>
          </template>
        </mtl-card-speaker>
    </div>
  `,
})

export default {
  title: 'Patterns',
  decorators: [withA11y, withKnobs],
}
