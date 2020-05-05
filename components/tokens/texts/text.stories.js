import { withA11y } from '@storybook/addon-a11y'

import {
  MtlH1,
  MtlH2,
  MtlH3,
  MtlH4,
  MtlTextInfo,
  MtlTextButton,
  MtlTextSmall
} from '@/components/index'

export const Texts = () => ({
  components: {
    MtlH1,
    MtlH2,
    MtlH3,
    MtlH4,
    MtlTextInfo,
    MtlTextButton,
    MtlTextSmall
  },
  template: `
    <div class="m-auto container mt-10">
      <mtl-h1 class="mb-6">I am an H1 title</mtl-h1>
      <mtl-h2 class="mb-6">I am an h2 title</mtl-h2>
      <mtl-h3 class="mb-6">I am an H3 title</mtl-h3>
      <mtl-h4 class="mb-6">I am an H4 title</mtl-h4>
      <mtl-text-info class="mb-6">I am an text info</mtl-text-info>
      <mtl-text-button class="mb-6">I am a text button</mtl-text-button>
      <mtl-text-small class="mb-6">I am a verysmall text</mtl-text-small>
    </div>
  `
})

export default {
  title: 'Tokens',
  decorators: [withA11y]
}
