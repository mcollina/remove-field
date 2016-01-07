'use strict'

var remove = require('./')
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

var result2 = remove('a', original)

console.log(result2)
