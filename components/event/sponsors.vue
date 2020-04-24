<template>
  <div class="flex items-center mb-2">
    <p class="text-mtl-infos">Sponsor:</p>
    <ul>
      <li v-for="sponsor in sponsors" :key="sponsor._uid" class="px-4 py-2">
        <a :href="sponsor.link.url" target="_blank">
          <img :src="sponsor.image" :alt="sponsor.name" class="w-10" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sponsors: {
      type: Array,
      required: true
    }
  }
}
</script>
