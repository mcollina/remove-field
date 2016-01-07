# remove-field&nbsp;&nbsp;[![Build Status](https://travis-ci.org/mcollina/remove-field.svg)](https://travis-ci.org/mcollina/remove-field)

Creates a new Object with some field removed.
Every field not listed in the first argument will be deep copied.

## Install

```
npm i remove-field --save
```

## Usage

```js
var remove = require('remove-field')
var original = {
  a: '1',
  hello: 'world',
  b: { an: 'object' },
  some: [{
    something: 'else',
    b: 'aaa'
  }, {
    a: 'aaaa'
  }],
  deep: {
    deep: {
      a: 'to remove',
      answer: 42
    }
  }
}

var result = remove(['a', 'b'], original)

console.log(result)
console.log(result !== original)

// prints
//
// { hello: 'world',
//   some: [ { something: 'else' }, {} ],
//   deep: { deep: { answer: 42 } } }
// true


var result2 = remove('a', original)

console.log(result2)

// prints
//
// { hello: 'world',
//   b: { an: 'object' },
//   some: [ { something: 'else', b: 'aaa' }, {} ],
//   deep: { deep: { answer: 42 } } }

```

## Alternatives

The other best method for achieving similar performance is:

```js
var a = 42
setImmediate(function (b) {
  aa(a, b)
}, 24)

function sum (a, b) {
  console.log(a + b)
}
```

This is 5-10% slower than remove-field. You decide if remove-field is worth it
or not.

## Acknowledgements

remove-field is sponsored by [nearForm](http://nearform.com).

## License

MIT
