<template>
  <section id="upcoming" class="px-40">
    <div class="flex bg-mtl-grey px-20 py-20 pb-40">
      <div class="flex-1">
        <h1 class="text-white text-5xl font-bold">
          {{ content.upcoming_title }}
        </h1>
        <h2 class="text-white text-3xl mt-12">
          {{ content.upcoming_subtitle }}
        </h2>
        <form @submit.prevent="" class="mt-12  pr-6">
          <div class="relative w-2/3">
            <input
              :placeholder="content.upcoming_placeholder"
              type="email"
              class="w-full py-3 rounded-l-lg rounded-r-full pl-4"
            />
            <button
              type="submit"
              class="absolute right-0 p-3 bg-mtl-pink text-white rounded-r-full"
            >
              {{ content.upcoming_signup }}
            </button>
          </div>
        </form>
      </div>
      <div class="flex-1 p-4">
        <div class="bg-white pt-6 text-mtl-black relative">
          <h3
            class="text-2xl font-medium border-b-2 border-b-grey-100 px-6 pb-6"
          >
            #4: Inner working of a javascript framework
          </h3>
          <div class="separator"></div>
          <div class="p-6">
            <div class="font-bold">4th January: 6h - 9h pm</div>
            <p class="text-sm mt-6">
              asdasdsdasd asdasdsdasd
              asdasdsdasdasdasdsdasdasdasdsdasdasdasdsdasd
              asdasdsdasdasdasdsdasdasdasdsdasd asdasdsdasdasdasdsdasd
              asdasdsdasd
            </p>
          </div>
          <div class="flex mt-16">
            <a
              href=""
              class="text-mtl-blue w-full text-center border-grey-200 border-t-2 p-5"
              >Learn more</a
            >
            <a
              href=""
              class="text-mtl-blue w-full text-center border-grey-200 border-2 p-5"
              >Register</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Upcoming',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
