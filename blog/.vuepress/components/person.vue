<template>
  <div>
    <h2 :id="person.title" v-html="person.title"></h2>
    <div class="person">
      <div class="person-img-block">
        <a :href="person.profile" target="_blank">
          <img :src="person.img" width="100px;" alt="Giraud Florent" />
          <br />
          <sub>
            <b>{{person.author}}</b>
          </sub>
        </a>
      </div>
      <div class="person-description-block">
        <div class="person-infos-block">
          <a v-if="person.video" :href="person.video" target="_blank" class="mr-6">
            <vp-icon name="eye" />
            <span class="person-text">Movie</span>
          </a>
          <a v-if="person.slide" :href="person.slide" target="_blank">
            <vp-icon name="qianbao" />
            <span class="person-text">Slide</span>
          </a>
        </div>
        <p v-html="person.description"></p>
        <div class="tag-container">
          <h4 v-for="(tag, i) in person.tags" :key="i" class="tag mr-6">
            <span class="person-text">{{tag}}</span>
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
  }
};
</script>

<style>
.mr-6 {
  margin-right: 6px;
}

.tag-container {
  display: flex;
}

.tag {
  background: rgba(0, 0, 0, 0.05);
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px;
}
</style>