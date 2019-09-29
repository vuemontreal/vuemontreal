<template>
  <div class="Preview">
    <div class="Preview-left">
      <img class="Preview-img" :src="meetup.backgroundImg" alt="vue montreal" />
    </div>
    <div class="Preview-right">
      <div class="Preview-intro">
        <a class="pointer" @click="sendToArchives">{{meetup.title}}</a>
        <div class="Preview-tags">{{meetupTags(meetup).join(', ')}}</div>
        <div class="Infos-tags Tags">
          <h4 v-for="(tag, i) in meetupTags(meetup)" :key="i" class="Tag">
            <vp-icon name="tag" />
            <span class="Infos-text">{{tag}}</span>
          </h4>
        </div>
      </div>
      <div>
        <div>{{meetup.location}}</div>
        <span v-for="(s, i) in speakers" :key="i" class="Preview-author">
          <a :href="s.profile" target="_blank" rel="noopener noreferrer">{{s.author}}</a>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import moment from 'moment';

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
    this.meetup.datas.map(e => {
      this.speakers.push({
        author: e.author,
        profile: e.profile
      });
    });
  },
  methods: {
    sendToArchives() {
      // TODO:
      const startAt = moment(this.meetup.startAt);
      const path = startAt.isBefore(moment())? 'archives' : 'upcoming';
      const eventName = startAt.format('YYYY-MM-DD');
      this.$router.push(`/${path}/${eventName}.html`);
    },
    meetupTags(meetup) {
      if (!meetup.datas) {
        return [];
      }
      const tags = meetup.datas.reduce((acc, curr) => {
        curr.tags.map(tag => acc.add(tag));
        return acc;
      }, new Set());
      return Array.from(tags);
    }
  }
};
</script>

<style scoped>
.Preview {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 30px;
  padding: 6px;
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

h4.Tag {
  cursor: default;
  margin: 4px 8px 4px 0;
}

.Tag:hover {
  background-color: rgba(0,0,0,0.05);
  color: #2c3e50;
}

.Preview-right {
  flex-grow: 1;
}

.Preview-left {
  margin-right: 10px;
}

.Preview-author + .Preview-author:before {
  content: "|";
  margin-right: 10px;
  margin-left: 10px;
}

@media (max-width: 870px) {
  .Preview-left {
    display: none;
  }
}
</style>