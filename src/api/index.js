import axios from 'axios'
import { BASE_URL, TIME_OUT, WITH_CREDENTIALS } from '@/constants/http'

// global loading interceptors

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: WITH_CREDENTIALS
})
const requestInterceptors = instance.interceptors.request
const responseInterceptors = instance.interceptors.response

requestInterceptors.use(
  req => {
    console.log('1')
    return req
  },
  err => Promise.reject(err)
)
requestInterceptors.use(
  req => {
    console.log('2')
    return req
  },
  err => Promise.reject(err)
)
responseInterceptors.use(res => res, err => Promise.reject(err))

export const _createRequest = config => instance(config)
