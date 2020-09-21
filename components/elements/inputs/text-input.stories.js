import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { MtlTextInput } from '@/components/index'

export const TextInput = () => ({
  components: {
    MtlTextInput,
  },
  props: {
    label: {
      default: text('Label', 'Label of the input'),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
  },
  template: `
    <div class="m-auto container mt-8">
        <mtl-text-input :label="label" placeholder="placeholder..." :disabled="disabled" />
    </div>
  `,
})

export default {
  title: 'Elements',
  decorators: [withA11y, withKnobs],
}
