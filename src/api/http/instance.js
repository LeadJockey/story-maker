import axios from 'axios'
import store from '@/stores'
import { BASE_URL, TIME_OUT, WITH_CREDENTIALS } from '@/constant'
import { calculatePercentage } from '@/utils/math'
import { loadingMiddleware } from '@/api/http/middleware'

// 인스턴스 옵션
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: WITH_CREDENTIALS,
  onUploadProgress: progressEvent => {
    store.commit('loading/setPercent', calculatePercentage(progressEvent.loaded, progressEvent.total))
    console.log('onUploadProgress', calculatePercentage(progressEvent.loaded, progressEvent.total))
  },  
  onDownloadProgress: progressEvent => {
    store.commit('loading/setPercent', calculatePercentage(progressEvent.loaded, progressEvent.total))
    console.log('onUploadProgress', calculatePercentage(progressEvent.loaded, progressEvent.total))
  }
})

// 인스턴스 인터셉터
instance.interceptors.request.use(loadingMiddleware.reqSuccess, loadingMiddleware.reqError)
instance.interceptors.response.use(loadingMiddleware.resSuccess, loadingMiddleware.resError)

export default instance
