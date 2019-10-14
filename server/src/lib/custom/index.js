const CustomEvent = function() {
  this.event = {}
}
CustomEvent.prototype.on = function(type, handler) {
  this.event[type] = this.event[type] || []
  this.event[type].push(handler)
}
CustomEvent.prototype.fire = function(type) {
  this.event[type].map(handler => {
    handler()
  })
}

module.exports = CustomEvent
