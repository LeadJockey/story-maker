const state = {
  progress: 0
}
const mutations = {
  startLoading(state) {
    state.progress++
  },
  finishLoading(state) {
    state.progress--
  }
}
const getters = {
  progress: state => state.isLoading
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
