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
        <mtl-button class="mb-6">Primary Button</mtl-button>
        <mtl-button secondary class="mb-6">Secondary Button</mtl-button>
        <mtl-button tertiary class="mb-6">Tertiary Button</mtl-button>

        <h1 class="mt-10 mb-4">Example Button</h1>
        <mtl-button :tertiary="tertiary" :secondary="secondary"> Playground button</mtl-button>
    </div>
  `
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs]
}
