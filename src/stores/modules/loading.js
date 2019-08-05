const state = {
  percent: 0,
  isLoading: false
}

const mutations = {
  startLoading(state) {
    state.percent = 0
    state.isLoading = true
  },
  finishLoading(state) {
    state.percent = 100
    state.isLoading = false
  },
  setPercent(state, percent) {
    state.percent = percent
  }
}

const getters = {
  percent: state => state.percent,
  isLoading: state => state.isLoading
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
