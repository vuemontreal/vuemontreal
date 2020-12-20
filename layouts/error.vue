<template>
  <div
    class="w-full max-w-screen-xl m-auto flex items-center flex-col justify-center md:px-6 mt-16 px-2"
  >
    <img src="~/assets/error.png" alt="error page" class="mb-4" />
    <mtl-button class="w-24" @click.native="$router.back()">
      {{ $t('back') }}
    </mtl-button>
  </div>
</template>
