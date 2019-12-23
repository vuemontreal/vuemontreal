<template>
  <div class="container">
    <section id="upcoming" class="flex px-20 py-20 pb-40">
      <div class="flex-1">
        <h1 class="text-white text-5xl font-bold">
          {{ story.content.title }}
        </h1>
        <h2 class="text-white text-3xl mt-12">
          Lorem ipsum dolor si amet, consecutor adipiscingn etr. sadasdas
          aasdasd asda as
        </h2>
        <form @submit.prevent="" class="mt-12  pr-6">
          <div class="relative ">
            <input
              type="email"
              class="w-full py-3 rounded-l-lg rounded-r-full pl-4"
              placeholder="Enter your email adress"
            />
            <button
              type="submit"
              class="absolute right-0 p-3 bg-mtl-pink text-white rounded-r-full"
            >
              SIGN UP
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
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories/${context.app.store.state.i18n.locale}/home`, {
        version: 'draft'
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          // console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          // console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>
