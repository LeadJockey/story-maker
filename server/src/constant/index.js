const env = process.env

const request = {
  baseURL:
    env.NODE_ENV === 'production'
      ? 'http://172.27.114.65:3002/api/v1/singers'
      : 'http://172.27.114.65:3002/api/v1/singers',
  timeout: 3000,
  headers: {},
  withCredentials: true
}

const server = {
  port: env.PORT || 3000
}

const customEvent = {}

const message = {}

module.exports = {
  request,
  server,
  customEvent,
  message
}
