import axios from 'axios'
import { BASE_URL, TIME_OUT, WITH_CREDENTIALS } from '@/constant'
import { loader } from '@/api/http/interceptor'

const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: WITH_CREDENTIALS
})

http.interceptors.request.use(
  req => {
    loader.start()
    return req
  },
  error => {
    loader.finish()
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  res => {
    loader.finish()
    return res
  },
  error => {
    loader.finish()
    return Promise.reject(error)
  }
)

export default http
