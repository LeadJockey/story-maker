const CustomEvent = require('./../lib/custom')
const { CUSTOM_EVENT, ERROR_MESSAGE } = require('./../constant')
const eventBus = new CustomEvent()

const errorHandler = (req, res, next) => {
  eventBus.on(CUSTOM_EVENT.ERROR, () => {
    const datetime = req.requestDatetime || ''
    throw new Error(ERROR_MESSAGE.ERROR_500 + `::${datetime}`)
  })
  next()
}

module.exports = errorHandler
