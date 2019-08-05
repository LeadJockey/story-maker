import { _ } from 'vue-underscore'
import instance from '@/api/http/instance'
import { API_CALL_DELAY } from '@/constant'

export const _createRequest = config => {
  return instance(config)
}

export const _createThrottleRequest = (config, resolve, reject) =>
  _.throttle(function() {
    return instance(config)
      .then(resolve)
      .catch(reject)
  }, API_CALL_DELAY)

export const _createDebounceRequest = (config, resolve, reject) =>
  _.debounce(function() {
    return instance(config)
      .then(resolve)
      .catch(reject)
  }, API_CALL_DELAY)
