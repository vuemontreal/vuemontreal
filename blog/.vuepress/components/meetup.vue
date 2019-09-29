<template>
  <div class="Mtl" v-if="values">
    <div class="Mtl-left">
      <img :src="values.backgroundImg" class="Left-img" />
      <person v-for="person in values.datas" :key="person.author" :person="person" />
    </div>
    <div class="Mtl-right Right">
      <div class="Right-content Content white--dark bg-dark">
        <div class="Place-info Info">
          <div class="icon"><vp-icon name="clock" /></div>
          <div class="Title">{{ computedStartDate }} {{ computedStartHour }} - {{ computedEndHour }}</div>
        </div>
        <div class="Place-info Info">
          <div class="icon"><vp-icon name="map" /></div>
          <div class="Title">{{values.location}}</div>
        </div>
        <iframe :src="values.gmapIframe" height="250" frameborder="0" class="Place-map"></iframe>
        <div class="Place-action">
          <a
            v-if="values.done"
            class="Btn Btn--3d white bg-green"
            :href="values.eventLink"
            target="_blank"
            rel="noopener noreferrer"
          >Registration Page</a>
          <a
            v-else
            class="Btn Btn--3d white bg-green"
            :href="values.eventLink"
            target="_blank"
            rel="noopener noreferrer"
          >Register To Attend</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedStartDate() {
      return `${moment(this.values.startAt).format('MMMM Do, YYYY')}`;
    },
    computedStartHour() {
      return `${moment(this.values.startAt).format('HH:mm')}`;
    },
    computedEndHour() {
      return `${moment(this.values.endAt).format('HH:mm')}`;
    }
  }
};
</script>

<style>
.Mtl {
  display: flex;
  flex-wrap: nowrap;
}

.Mtl-left {
  flex-grow: 1;
  /* max-width: 70%; */
}

.Left-img {
  width: 100%;
  max-width: 800px !important;
}

.Mtl-right {
  flex-grow: 1;
  max-width: 350px;
  min-width: 350px;
  padding-bottom: 20px;
}

.Right {
  padding-left: 1em;
  padding-right: 0;
}

.Right-content {
  top: 60px;
  position: sticky;
  margin-top: 0;
}

.Content {
  box-shadow: 1px 6px 8px -2px rgba(0, 0, 0, 0.51);
  border-radius: 4px;
  padding-top: 16px;
  padding-left: 0;
}

.Place-info {
  margin-top: 12px;
  margin-bottom: 18px;
  display: flex;
}

.Place-info .icon {
  float:left;
}

.Place-info.Info {
  padding-left: 30px;
  padding-right: 12px;
}

.Title {
  float: left;
  padding-left: 18px;
  font-weight: 600;
}

.Place-map {
  border: 0;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
}

.Place-action {
  text-align: center;
  padding-bottom: 12px;
}

.Btn {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
}

.Btn--3d {
  position: relative;
  box-shadow: 0 0 0 1px #103320 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset;
  /* padding: 5px 20px; */
  border-radius: 6px;
  transition: top 0.01s linear;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
}

.Links {
  display: flex;
  justify-content: flex-end !important;
}

@media (max-width: 1160px) {
  .Mtl {
    flex-flow: column-reverse;
  }

  .Mtl-left {
    flex-grow: 1;
    min-width: 100%;
  }

  .Mtl-right {
    margin-left: 0 !important;
    margin-right: 0 !important;
    min-width: 100%;
    margin: auto;
  }

  .Right {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
</style>