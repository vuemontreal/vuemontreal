<template>
  <nav class="flex justify-around items-center text-white pt-12">
    <ul class="flex-1 flex justify-around">
      <li class="font-bold text-xl">
        <a href="">EVENTS</a>
      </li>
      <li class="font-bold text-xl">
        <a href="">COMMUNITY</a>
      </li>
    </ul>
    <img
      src="~/assets/vue-logo-transparent.png"
      alt="vue montreal logo"
      class="max-w-full"
      width="280"
      height="280"
    />
    <ul class="flex-1 flex justify-around text-white">
      <li class="font-bold text-xl">
        <a href="">REPERTOIRE</a>
      </li>
      <li class="font-bold text-xl">
        <a href="">GET IN TOUCH</a>
      </li>
      <li @click="$i18n.setLocale('en')" class="cursor-pointer">
        English
      </li>
      <li @click="$i18n.setLocale('fr')" class="cursor-pointer">
        French
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>
