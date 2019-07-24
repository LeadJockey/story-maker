const state = {
  tick: 100,
  precent: 0,
  isLoading: false
}

const mutations = {
  startLoading(state) {
    state.precent += state.tick
    state.isLoading = true
  },
  finishLoading(state) {
    state.precent -= state.tick
    state.isLoading = false
  }
}

const getters = {
  precent: state => state.precent,
  isLoading: state => state.isLoading
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
