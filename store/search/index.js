// mergeTagsOrTypes = (arrayOfTagsOrTypes, possibleOptions) {

// }

// const possibleTags = []

export const state = () => ({
  search: '',
  types: [],
  tags: [],
  possibleTags: [],
  possibleTypes: ['articles', 'events'],
})

export const mutations = {
  setTags(state, tags) {
    state.possibleTags = tags
  },
}

export const actions = {
  buildSearchState(_, { types, tags, search }) {
    // console.log(tags)
    // console.log(types)
    // console.log(search)
    // const tps = types.split(',')
    // const tgs = tags.split(',')
  },
}
