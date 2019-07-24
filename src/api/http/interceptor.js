import store from '@/stores'

export const loader = {
  start: () => {
    store.commit('loading/startLoading')
    console.log('loading start')
  },
  finish: () => {
    store.commit('loading/finishLoading')
    console.log('loading finish')
  }
}
