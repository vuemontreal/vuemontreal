<template>
  <section id="community" class="px-64">
    <div class="bg-mtl-grey-light px-48 mt-20 py-20">
      <div class="text-center px-48">
        <h1 class="font-bold text-5xl">{{ content.cmt_title }}</h1>
        <p class="pt-6">
          {{ content.cmt_subtitle }}
        </p>
      </div>
      <div class="flex mt-12">
        <div class="flex-1 px-4">
          <a
            :href="item.link"
            v-for="item in content.cmt_items"
            :id="item._uid"
            class="flex bg-white px-4 py-2 justify-between w-full items-center mt-8"
          >
            <div class="w-12 h-12 rounded-full bg-mtl-grey"></div>
            <div class="font-bold text-lg">{{ item.name }}</div>
            <div>></div>
          </a>
          <a
            href=""
            class="rounded-full p-4 bg-mtl-pink text-white mt-10 block w-2/3 text-center font-medium"
            >{{ content.cmt_btn_text }}</a
          >
        </div>
        <div class="flex-1 mt-8 flex justify-center items-center">
          <div class="rounded-full bg-mtl-grey big-circle"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Community',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
