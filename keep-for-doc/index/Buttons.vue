<!-- eslint-disable prettier/prettier -->
<template>
  <client-only>
    <markdown>
      # Montreal Buttons

      <div class="flex flex-col my-8">
        <mtl-btn tertiary class="mb-6">Tertiary</mtl-btn>
        <mtl-btn primary class="mb-6">Primary</mtl-btn>
        <mtl-btn secondary class="mb-6">Secondary</mtl-btn>
      </div>

      <h2 class="mb-8">
        DEFINITION
      </h2>
      <p class="mb-8">
        The buttons will take all the witdth available
      </p>


      | Props         | Required      | Type  |
      | ------------- |:-------------:| -----:|
      | tertiary      | false         | bool  |
      | primary       | false         | bool  |
      | secondary     | false         | bool  |

    </markdown>
  </client-only>
</template>

<script>
import {MtlBtn} from '@/components/index'
export default {
  components: {
    MtlBtn
  }
}
</script>
