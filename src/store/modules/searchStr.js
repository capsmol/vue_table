export default {
  state: {
    searchString: ''
  },
  mutations: {
    setSearchString: (state, str) => {
      state.searchString = str
    }
  },
  action: {},
  getters: {
    searchStringGetter: state => state.searchString
  }
}