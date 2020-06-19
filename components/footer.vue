<template>
  <footer>
    <div id="subscribe" class=" bg-mtl-black-400 py-6">
      <mtl-h-2 class="mb-2 text-mtl-white pl-10">
        Subscribe to our newsletter
      </mtl-h-2>
      <mtl-paragraph class="text-mtl-white pl-10 mb-10">
        Get the best of our listings into your inbox. Issued weekly.
      </mtl-paragraph>

      <mtl-text-small class="text-mtl-white text-center mb-4">
        ✋️ We promise to respect your inbox. Subscribe!
      </mtl-text-small>

      <form @submit.prevent="" class="px-10 mb-8">
        <mtl-text-input label="name" placeholder="name" />
        <mtl-text-input label="email" placeholder="email" class="mb-4" />
        <div class="flex justify-end">
          <mtl-button>
            SUBSCRIBE
          </mtl-button>
        </div>
      </form>

      <mtl-paragraph class="text-mtl-white px-10">
        Thank's to Netlify Open Source program for hosting us!
      </mtl-paragraph>
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
        ©Vue Montreal - All rights reserved
      </mtl-text-small>
    </div>
  </footer>
</template>

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
