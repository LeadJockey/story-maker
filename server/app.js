const express = require('express')
const app = express()
const logger = require('morgan')
const axios = require('axios')

app.use(logger('dev'))
app.use(express.json())

app.get(
  '*',
  wrapAsync({ method: 'get', url: 'http://172.27.114.65:3002/api/v1/singers' }, (data, req, res) => {
    res.status(200).json(data)
  })
)

app.use((err, req, res, next) => {
  res.json({ message: err.message })
  next(err)
})

app.listen(3000)

function wrapAsync(apiOptions, callback) {
  const getData = async (req, res, next) =>
    await axios(apiOptions).then(response => {
      try {
        callback(response.data, req, res, next)
      } catch (exception) {
        throw new Error(exception)
      }
    })
  return (req, res, next) => getData(req, res, next).catch(next)
}
