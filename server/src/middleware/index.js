const moment = require('moment')

const datetime = config => (req, res, next) => {
  const requestDatetime = moment().format(config)
  req.requestDatetime = requestDatetime
  console.log(requestDatetime)
  next()
}

const errorHandler = (err, req, res, next) => {
  res.json({ message: err.message })
  next(err)
}

module.exports = {
  datetime,
  errorHandler
}
