module.exports = function (name, payload, options) {
  options = options || {}
  options.detail = payload
  return new CustomEvent(name, options)
}
