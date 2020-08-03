<template>
  <footer
    class="h-40 bg-black text-white flex justify-center items-center flex-col"
  >
    <p class="flex">
      <social-links />
    </p>

    <p class="text-sm font-light text-center">
      Thank's to
      <a
        href="https://www.netlify.com/open-source/"
        target="_blank"
        class="cursor-pointer underline"
        >Netlify Open Source program</a
      >
      for hosting us and give us full access<br />
      Copyright © 2020 Vue Montreal
    </p>
  </footer>
</template>

<script>
import SocialLinks from '~/components/social-links'

export default {
  components: { SocialLinks }
}
</script>
