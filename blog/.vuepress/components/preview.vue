<template>
  <div class="Preview">
    <div class="Preview-left">
      <img class="Preview-img" :src="meetup.old.backgroundImg" alt="vue montreal" />
    </div>
    <div class="Preview-right">
      <div class="Preview-intro">
        <a class="pointer" @click="sendToArchives">{{meetup.old.title}}</a>
        <div class="Preview-tags">{{meetup.tags.join(', ')}}</div>
      </div>
      <div>
        <div>{{meetup.old.location}}</div>
        <span v-for="(s, i) in speakers" :key="i" class="Preview-author">
          <a :href="s.profile" target="_blank">{{s.author}}</a>
          <span class="Author-separator">|</span>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    speakers: []
  }),
  mounted() {
    this.meetup.old.datas.map(e => {
      this.speakers.push({
        author: e.author,
        profile: e.profile
      });
    });
  },
  methods: {
    sendToArchives() {
      this.$router.push("/" + this.meetup.old.name + ".html");
    }
  }
};
</script>

<style >
.Preview {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.Preview-img {
  max-width: 200px !important;
}
.pointer {
  cursor: pointer;
  font-weight: 500;
  color: #3eaf7c;
  text-decoration: none;
  font-size: 1.4rem;
}

.Preview-right {
  flex-grow: 1;
}

.Preview-left {
  margin-right: 40px;
}

.Author-separator {
  margin-right: 10px;
  margin-left: 10px;
}

@media (max-width: 870px) {
  .Preview-left {
    display: none;
  }
}
</style>