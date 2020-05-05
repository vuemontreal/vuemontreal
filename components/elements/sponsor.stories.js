import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text } from '@storybook/addon-knobs'

import { MtlSponsor } from '@/components/index'

export const Sponsor = () => ({
  components: {
    MtlSponsor
  },
  props: {
    name: {
      default: text('Name', 'Chromatic')
    }
  },
  template: `
    <div class="m-auto container mt-8 flex justify-around">
        <mtl-sponsor :name="name" />
        <mtl-sponsor :name="name" />
        <mtl-sponsor :name="name" />
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
