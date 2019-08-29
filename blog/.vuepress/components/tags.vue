<template>
  <div v-if="values">
    <ul class="Tags">
      <li
        class="Tag"
        v-for="tag in values.tags"
        :key="tag"
        @click="addFilter(tag)"
        :class="{
          activeTag: filters.includes(tag)
      }"
      >
        <vp-icon name="tag" />
        {{tag}}
      </li>
    </ul>
    <hr class="Tags-hr" />
    <ul v-if="filters.length">
      <li v-for="(elem, i) in filteredDatas" :key="i" class="Preview-block">
        <preview :meetup="elem" />
      </li>
    </ul>
    <div v-else class="noFilter">no filters Selected</div>
  </div>
</template>


<script>
export default {
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    filters: []
  }),
  computed: {
    filteredDatas() {
      if (!this.values.elems) return;
      let retDatas = {};
      for (let pagePath in this.values.elems) {
        const page = this.values.elems[pagePath];
        if (this.isIncluded(page.tags) && page.old.done)
          retDatas[pagePath] = page;
      }
      this.setQuery();
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
    setQuery() {
      window.location.hash = "filters=" + this.filters.toString();
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

    if (window.location.hash.match("filters")) {
      let filters = window.location.hash.split("=")[1];
      filters = filters.split(",");
      if (filters[0] && filters[0].length === 0) return;
      this.filters = filters;
    }
  }
};
</script>

<style >
.noFilter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Tags {
  display: flex;
  flex-wrap: wrap;
}

li.Tag {
  margin: 4px 8px 4px 0;
}

.Tags-hr {
  margin-bottom: 60px;
}

.Tag {
  list-style: none;
}

.Preview-block {
  list-style: none;
  box-shadow: 1px 6px 8px -2px rgba(0, 0, 0, 0.51);
  border-radius: 4px;
}
</style>