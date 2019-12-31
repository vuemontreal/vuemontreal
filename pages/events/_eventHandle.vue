<template>
  <div>
    <div class="bg-mtl-grey flex-wrap flex py-20">
      <div class="w-full lg:w-1/2 text-white px-20">
        <h1 class=" text-5xl font-bold">{{ story.content.title }}</h1>
        <div
          class="border-b-2 border-white border-t-2 mt-4 py-4 font-bold text-2xl"
        >
          {{ story.content.start }}
        </div>
        <div class="mt-4 font-bold text-2xl">
          {{ story.content.location }}
        </div>
        <div class="mt-8">
          <a
            :href="story.content.eventLink"
            target="_blank"
            class=" mr-6 text-white bg-mtl-pink rounded-full px-4 py-2"
          >
            MORE DETAILS
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 px-20 mt-20 lg:mt-0">
        <iframe
          :src="story.content.gmapIframe"
          class=" border-0 w-full"
          height="250"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div>
      <h1 class="text-center mt-20 text-5xl font-bold">PAST EVENTS</h1>
      <p class="text-center px-10 lg:px-64">
        sdada askldjasdlk alksdj alskdjalskdjadlkaj ldkajslkaj sdada askldjasdlk
        alksdj alskdjalskdjadlkaj ldkajslkaj sdada askldjasdlk alksdj
        alskdjalskdjadlkaj ldkajslkaj sdada askldjasdlk alksdj
        alskdjalskdjadlkaj ldkajslkaj
      </p>

      <div class="md:px-20 mt-24">
        <ul class="flex flex-wrap">
          <li class=" h-56 w-full lg:w-1/3 p-2">
            <div class="bg-gray-500 w-full h-full"></div>
          </li>
          <li class=" h-56 w-full lg:w-1/3 p-2">
            <div class="bg-gray-500 w-full h-full"></div>
          </li>
          <li class=" h-56 w-full lg:w-1/3 p-2">
            <div class="bg-gray-500 w-full h-full"></div>
          </li>
          <li class=" h-56 w-full lg:w-1/3 p-2">
            <div class="bg-gray-500 w-full h-full"></div>
          </li>
          <li class=" h-56 w-full lg:w-1/3 p-2">
            <div class="bg-gray-500 w-full h-full"></div>
          </li>
          <li class=" h-56 w-full lg:w-1/3 p-2">
            <div class="bg-gray-500 w-full h-full"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const eventHandle = context.params.eventHandle
    return context.app.$storyapi
      .get(
        `cdn/stories/${context.app.store.state.i18n.locale}/events/${eventHandle}`,
        {
          version: 'draft'
        }
      )
      .then((res) => res.data)
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  }
}
</script>

<style></style>
