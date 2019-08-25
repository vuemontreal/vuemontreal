<template>
  <div v-if="jsonValues">
    <ul>
      <li v-for="tag in jsonValues.tags" :key="tag" @click="addFilter(tag)">{{tag}}</li>
    </ul>
    <pre class="white">{{ filters}}</pre>

    <ul>
      <li v-for="(elem, i) in filteredDatas" :key="i">{{elem.old.title}}</li>
    </ul>
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
    jsonValues: null,
    filters: []
  }),
  computed: {
    filteredDatas() {
      if (!this.jsonValues.elems) return;
      let retDatas = {};
      for (let pagePath in this.jsonValues.elems) {
        const page = this.jsonValues.elems[pagePath];
        if (this.isIncluded(page.tags)) retDatas[pagePath] = page;
      }
      return retDatas;
    }
  },
  methods: {
    addFilter(filter) {
      if (!this.filters.includes(filter)) this.filters.push(filter);
      else {
        let tmp = [];
        this.filters.forEach(e => {
          if (e !== filter) tmp.push(e);
        });
        this.filters = tmp;
      }
    },
    isIncluded(from) {
      let isFound = false;

      this.filters.forEach(f => {
        if (from.includes(f)) isFound = true;
      });
      return isFound;
    }
  },
  mounted() {
    this.jsonValues = JSON.parse(this.values);
  }
};
</script>