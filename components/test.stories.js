// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Test from '@/components/test.vue'

storiesOf('tests', module).add('Test', () => ({
  components: { Test },
  template: '<Test />'
}))
