<template>
  <section id="talents" class="px-64">
    <div class="bg-mtl-grey-light px-48 mt-20 py-20">
      <div class="text-center px-48">
        <h1 class="font-bold text-5xl">{{ content.talents_title }}</h1>
        <p class="pt-6">
          {{ content.talents_subtitle }}
        </p>
      </div>
      <div class="flex justify-between mt-10">
        <div
          v-for="item in content.talents_items"
          :key="item._uuid"
          class="flex-1 text-center"
        >
          <div
            class="rounded-full w-64 h-64 bg-mtl-grey flex justify-center items-center m-auto"
          >
            <div class="text-white text-2xl font-bold">{{ item.title }}</div>
          </div>
          <p class="mt-8">{{ item.subtitle }}</p>
        </div>
      </div>
      <div class="flex justify-center">
        <a
          href=""
          class="rounded-full  p-4 bg-mtl-pink text-white mt-10 block w-64 text-center font-medium"
          >{{ content.talents_btn_text }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Talents',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
