import { _createRequest } from '@/api'
import { _ } from 'vue-underscore'
import { API_CALL_DELAY } from '@/constants/http'

export const getTestData = (s, f) =>
  _.throttle(function() {
    return _createRequest({
      method: 'get',
      url: '/v2/5d355b302e0000df4ea6b96c'
    })
      .then(s)
      .catch(f)
  }, API_CALL_DELAY)
