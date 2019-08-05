import store from '@/stores'

export const loadingMiddleware = {
  reqSuccess: req => {
    store.commit('loading/startLoading')
    return req
  },
  reqError: error => {
    store.commit('loading/finishLoading')
    return Promise.reject(error)
  },
  resSuccess: res => {
    store.commit('loading/finishLoading')
    return res
  },
  resError: error => {
    store.commit('loading/finishLoading')
    return Promise.reject(error)
  }
}
