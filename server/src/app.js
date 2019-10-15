const express = require('express')
const app = express()
const logger = require('morgan')
const config = require('./constant')
const middleware = require('./middleware')

const { protectedAsyncRoute } = require('./api')

app.use(middleware.datetime('YYYY-MM-DD'))
app.use(logger('dev'))
app.use(express.json())

app.get(
  '*',
  protectedAsyncRoute({ method: 'get', url: '/' }, (responseData, req, res) => {
    res.status(200).json(responseData.data)
  })
)

app.use(middleware.errorHandler)

app.listen(config.server.port, () => {
  console.log(`server is listening on port ${config.server.port}`)
})
