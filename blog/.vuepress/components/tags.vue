<template>
  <div v-if="tags">
    <ul class="Tags">
      <li
        class="Tag"
        v-for="tag in tags"
        :key="tag"
        @click="addFilter(tag)"
        :class="{
          activeTag: activeFilters.includes(tag)
      }"
      >
        <vp-icon name="tag" />
        {{tag}}
      </li>
    </ul>
    <hr class="Tags-hr" />
    <ul v-if="activeFilters.length">
      <li v-for="(event, i) in filteredEvents" :key="i" class="Preview-block">
        <preview :meetup="event" />
      </li>
    </ul>
    <div v-else class="noFilter">No filters selected</div>
  </div>
</template>


<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    events: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    activeFilters: [],
  }),
  computed: {
    filteredEvents() {
      // if (!this.events) return;

      return this.events.filter(event => {
        return event.datas.some(d => d.tags.some(tag => this.activeFilters.includes(tag)));
      });
    }
  },
  methods: {
    addFilter(filter) {
      const filtersSet = new Set(this.activeFilters);
      if (filtersSet.has(filter)) {
        filtersSet.delete(filter);
      } else {
        filtersSet.add(filter);
      }
      this.activeFilters = Array.from(filtersSet);

      this.updateRoute();
    },
    updateRoute() {
      window.location.hash = "filters=" + this.activeFilters.toString();
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
      this.activeFilters = filters;
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