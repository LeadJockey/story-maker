import { _createRequest, _createThrottleRequest, _createDebounceRequest } from '@/api/http'

export const test = () =>
  _createRequest({
    method: 'get',
    url: '/v2/5d355b302e0000df4ea6b96c'
  })

export const testThrottle = (resolve, reject) =>
  _createThrottleRequest(
    {
      method: 'get',
      url: '/v2/5d355b302e0000df4ea6b96c'
    },
    resolve,
    reject
  )

export const testDebounce = (resolve, reject) =>
  _createDebounceRequest(
    {
      method: 'get',
      url: '/v2/5d355b302e0000df4ea6b96c'
    },
    resolve,
    reject
  )
