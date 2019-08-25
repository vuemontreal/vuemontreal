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
          <h4 v-for="(tag, i) in person.tags" :key="i" class="Tag">
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
  }
};
</script>

<style>
.Person {
  display: flex;
  max-width: 800px;
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

.Tag {
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
  margin-right: 6px;
}
</style>