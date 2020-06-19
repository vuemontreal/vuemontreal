<template>
  <footer>
    <div id="subscribe" class=" bg-mtl-black-400 py-6">
      <mtl-h-2 class="mb-2 text-mtl-white pl-10">
        {{ navigation.subscribe_title }}
      </mtl-h-2>
      <mtl-paragraph class="text-mtl-white pl-10 mb-10">
        {{ navigation.subscribe_text }}
      </mtl-paragraph>

      <mtl-text-small class="text-mtl-white text-center mb-4">
        {{ navigation.subscribe_promise }}
      </mtl-text-small>

      <form @submit.prevent="" class="px-10 mb-8">
        <mtl-text-input :placeholder="navigation.subscribe_name" class="mb-4" />
        <mtl-text-input
          :placeholder="navigation.subscribe_email"
          class="mb-4"
        />
        <div class="flex justify-end">
          <mtl-button>
            {{ navigation.subscribe_button }}
          </mtl-button>
        </div>
      </form>
    </div>
    <div id="social" class="text-center py-8 text-mtl-black-400">
      <ul class="flex m-auto justify-center mb-4">
        <li class="mr-4">
          <icon-logo-linkedin class="w-10 h-10" />
        </li>
        <li class="mr-4">
          <icon-logo-github class="w-10 h-10" />
        </li>
        <li>
          <icon-logo-youtube class="w-10 h-10" />
        </li>
      </ul>
      <mtl-text-small>
        {{ navigation.copyright }}
      </mtl-text-small>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.icons {
  left: -10px;
  position: relative;
}

.icon svg {
  height: 1.5rem !important;
  width: 1.5rem !important;
}

.plus-icon {
  @apply absolute;

  right: 5px;
}

.close-icon {
  @apply absolute;

  left: 5px;
}
</style>
