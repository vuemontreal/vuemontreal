import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { MtlButton } from '@/components/index'

export const Button = () => ({
  components: {
    MtlButton
  },
  props: {
    secondary: {
      default: boolean('secondary', false)
    },
    tertiary: {
      default: boolean('tertiary', false)
    }
  },
  template: `
    <div class="m-auto container mt-8">
        <MtlButton class="mb-6">Primary Button</MtlButton>
        <MtlButton secondary class="mb-6">Secondary Button</MtlButton>
        <MtlButton tertiary class="mb-6">Tertiary Button</MtlButton>

        <h1 class="mt-10 mb-4">Example Button</h1>
        <MtlButton :tertiary="tertiary" :secondary="secondary"> Playground button</MtlButton>
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
