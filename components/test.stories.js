// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Test from '@/components/test.vue'

console.log(Test)

storiesOf('tests', module).add('Test', () => ({
  components: { Test },
  template: '<Test />'
}))
