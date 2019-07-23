// constants for axios instance
export const BASE_URL = process.env.NODE_ENV === 'production' ? 'http://www.mocky.service.io' : 'http://www.mocky.io'
export const TIME_OUT = 3000
export const WITH_CREDENTIALS = false
// _.throttle , _.debounce 용 딜레이 타임
export const API_CALL_DELAY = 3000
