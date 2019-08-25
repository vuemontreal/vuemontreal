<template>
  <div class="Mtl" v-if="endValues">
    <div class="Mtl-left">
      <img :src="endValues.backgroundImg" class="Left-img" />
      <person v-for="person in endValues.datas" :key="person.author" :person="person" />
    </div>
    <div class="Mtl-right Right">
      <div class="Right-content Content white--dark bg-dark">
        <div class="Place-info Info">
          <vp-icon name="clock" />
          <span class="Title">
            {{endValues.date}}
            {{endValues.hour}}
          </span>
        </div>
        <div class="Place-info Info">
          <vp-icon name="map" />
          <span class="Title">{{endValues.location}}</span>
        </div>
        <iframe :src="endValues.gmapIframe" height="250" frameborder="0" class="Place-map"></iframe>
        <div class="Place-action">
          <a
            v-if="endValues.done"
            class="Btn Btn--3d white bg-green"
            :href="endValues.eventLink"
            target="_blank"
          >Check more</a>
          <a
            v-else
            class="Btn Btn--3d white bg-green"
            :href="endValues.eventLink"
            target="_blank"
          >Inscription</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: String,
      required: true
    }
  },
  data: () => ({
    endValues: null
  }),
  mounted() {
    this.endValues = JSON.parse(this.values);
  }
};
</script>

<style>
.theme-default-content:not(.custom) {
  margin: 0;
  min-width: 100%;
}

.Mtl {
  display: flex;
  flex-wrap: wrap;
}

.Mtl-left {
  flex-grow: 1;
}

.Left-img {
  width: 100%;
  max-width: 800px !important;
}

.Mtl-right {
  max-width: 350px;
  padding-bottom: 20px;
}

.Right {
  padding-left: 8px;
  padding-right: 8px;
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
}

.Info {
  padding-left: 30px;
  padding-right: 12px;
}

.Title {
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
  .theme-default-content:not(.custom) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 80% !important;
    margin: auto !important;
    min-width: inherit;
  }

  .Mtl {
    flex-flow: column-reverse;
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