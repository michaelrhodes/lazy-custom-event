var test = require('tape')
var ce = require('./index')
var body = document.body

test('events don’t bubble by default', function (assert) {
  var container = document.createElement('div')
  var element = document.createElement('p')
  var bubbled = false

  container.appendChild(element)
  body.appendChild(container)

  container.addEventListener('hi', function () {
    bubbled = true
  })

  element.dispatchEvent(ce('hi', 'how are you?'))

  setTimeout(function () {
    body.removeChild(container)
    assert.ok(!bubbled, 'yep')
    assert.end()
  })
})

test('events can be made to bubble', function (assert) {
  var container = document.createElement('div')
  var element = document.createElement('p')
  var bubbled = false

  container.appendChild(element)
  body.appendChild(container)

  container.addEventListener('hi', function () {
    bubbled = true
  })

  element.dispatchEvent(ce('hi', 'how are you?', {
    bubbles: true
  }))

  setTimeout(function () {
    body.removeChild(container)
    assert.ok(bubbled, 'yep')
    assert.end()
  })
})

test('events don’t require detail', function (assert) {
  assert.plan(1)

  var container = document.createElement('div')
  var element = document.createElement('p')

  container.appendChild(element)
  body.appendChild(container)

  element.addEventListener('hi', function (e) {
    assert.ok(!e.detail)
  })

  element.dispatchEvent(ce('hi'))
})
