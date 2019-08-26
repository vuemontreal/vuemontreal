<template>
  <div>
    <h2 :id="person.title" v-html="person.title"></h2>
    <div class="Person">
      <div class="Person-img Img">
        <a :href="person.profile" target="_blank">
          <img :src="person.img" width="100" alt="Giraud Florent" />
          <br />
          <sub>
            <b>{{person.author}}</b>
          </sub>
        </a>
      </div>
      <div class="Person-description">
        <div class="Description-infos">
          <a v-if="person.video" :href="person.video" target="_blank">
            <vp-icon name="eye" />
            <span class="Infos-text">Movie</span>
          </a>
          <a v-if="person.slide" :href="person.slide" target="_blank">
            <vp-icon name="qianbao" />
            <span class="Infos-text">Slide</span>
          </a>
        </div>
        <p v-html="person.description"></p>
        <div class="Infos-tags Tags">
          <h4 v-for="(tag, i) in person.tags" :key="i" class="Tag" @click="goTo(tag)">
            <vp-icon name="tag" />
            <span class="Infos-text">{{tag}}</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  methods: {
    goTo(tag) {
      this.$router.push("/tags/index.html#filters=" + tag);
    }
  }
};
</script>

<style>
.Person {
  display: flex;
  max-width: 800px;
  margin-bottom: 30px;
}
.Person-img {
  width: 150px;
}

.Person-description {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.Description-infos h4 {
  margin: 0;
  margin-right: 8px;
  display: inline-block;
}

.Infos-text {
  margin-left: 4px;
}

.Infos-tags {
  display: flex;
}
</style>