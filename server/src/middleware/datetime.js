const moment = require('moment')

const datetime = config => (req, res, next) => {
  const requestDatetime = moment().format(config)
  req.requestDatetime = requestDatetime
  console.log(requestDatetime)
  next()
}
module.exports = datetime
