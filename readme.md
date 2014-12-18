# lazy-custom-event
lazy-custom-event creates [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) objects without all the ceremony.

## Install
```sh
$ npm install lazy-custom-event
```

## Usage
```js
var ce = require('lazy-custom-event')
var element = document.querySelector('p')

var greeting = ce('hi', 'how are you?', {
  bubbles: true,
  cancelable: true
})

element.addEventListener('hi', function(e) {
  console.log(e.detail)
  > 'how are you?'
})

element.dispatchEvent(greeting)
```

## API
The only required argument is `name`
```
lazy-custom-event(
  name,
  [payload,]
  [options]
)
```

## Test
```sh
$ git clone git@github.com:michaelrhodes/lazy-custom-event.git
$ cd lazy-custom-event
$ npm install && npm run test
```

## license
[MIT](http://opensource.org/licenses/MIT)
