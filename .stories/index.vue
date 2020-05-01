<template>
  <div>
    <div class="bg-mtl-black-400 w-full flex justify-between">
      <button
        class="text-white py-8 px-10 hover:bg-mtl-primary"
        @click="showStoriesNav = !showStoriesNav"
      >
        {{ showStoriesNav ? 'HIDE' : 'SHOW' }} STORIES
      </button>
      <nuxt-link to="/"  class="text-white py-8 px-10 hover:bg-mtl-primary">BACK TO APP</nuxt-link>
    </div>
    <div class="flex relative">
        <nav v-show="showStoriesNav" class="bg-mtl-black-500 text-white w-1/6 flex-col px-4 py-4 overflow-y-scroll h-screen hidden md:flex">
            <div
              v-for="story in storyRoutes"
              :key="story.name"
              class="mb-2"
            >
              <div @click="switchParent(story)" class="cursor-pointer">
                {{story.path}}
                </div>
              <div class="pl-4 cursor-pointer" v-for="sub in story.children" :key="sub.name" @click="switchSubcomponent(story, sub)">
                . {{sub.path}}
              </div>
            </div>
        </nav>
        <nav v-show="showStoriesNav" class="bg-mtl-black-500 text-white flex-col px-4 py-4 overflow-y-scroll h-screen w-48 absolute top-0 left-0 md:hidden">
            <div
              v-for="story in storyRoutes"
              :key="story.name"
              class="mb-2"
            >
              <div @click="switchParent(story)" class="cursor-pointer">
                {{story.path}}
                </div>
              <div class="pl-4 cursor-pointer" v-for="sub in story.children" :key="sub.name" @click="switchSubcomponent(story, sub)">
                . {{sub.path}}
              </div>
            </div>
        </nav>
        <main role="main" class="flex-grow container px-4 pt-4 overflow-y-scroll">
          <component :is="currentComponent"/>
          <component :is="subComponent"/>
        </main>
      </div>
    </div>
</template>

<script>
export default {
  layout: 'storybook',
  data() {
    return {
      stories: [],
      storyCfg: {},
      showStoriesNav: true,
      currentComponent: null,
      subComponent: null,
      storyRoutes: []
    }
  },
  mounted() {
    Object.assign(this.storyCfg, this.$nuxtStories({}).options)
    const { storiesAnchor } = this.storyCfg
    this.buildStories({ routeRoot: storiesAnchor })
  },
  methods: {
    buildStories({ routeRoot }) {
      this.storyRoutes = this.$router.options.routes.find(
        ({ name }) => name === routeRoot
      ).children
    },
    switchParent(story) {
      this.subComponent = null;
      this.currentComponent = story.component
    },
    switchSubcomponent(story, child){
      const find = story.children ? story.children.find(c => c.name === child.name) : false;
      this.subComponent = child.component;
      if (typeof find === "undefined") this.currentComponent = null 
      else this.currentComponent = story.component
    }
  }
}
</script>

