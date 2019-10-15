const axios = require('axios')
const config = require('./../constant')
const instance = axios.create(config.request)

const protectedAsyncRoute = (opts, getData) => (req, res, next) =>
  (async (req, res, next) => {
    await instance(opts).then(response => {
      try {
        getData(response, req, res, next)
      } catch (exception) {
        throw new Error(exception)
      }
    })
  })(req, res, next).catch(next)

module.exports = {
  protectedAsyncRoute
}
