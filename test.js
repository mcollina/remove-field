'use strict'

var test = require('tap').test
var remove = require('./')

test('removes first level fields', function (t) {
  t.plan(2)

  var source = {
    hello: 'world',
    name: 'matteo'
  }
  var result = remove(['hello'], source)

  t.deepEqual(result, {
    name: 'matteo'
  })
  t.notEqual(result, source)
})

test('removes a single field', function (t) {
  t.plan(2)

  var source = {
    hello: 'world',
    name: 'matteo'
  }
  var result = remove('hello', source)

  t.deepEqual(result, {
    name: 'matteo'
  })
  t.notEqual(result, source)
})

test('removes multiple fields', function (t) {
  t.plan(2)

  var source = {
    hello: 'world',
    a: 'b',
    name: 'matteo'
  }
  var result = remove(['hello', 'a'], source)

  t.deepEqual(result, {
    name: 'matteo'
  })
  t.notEqual(result, source)
})

test('removes deep fields', function (t) {
  t.plan(2)

  var source = {
    my: {
      hello: 'world'
    },
    name: 'matteo'
  }
  var result = remove(['hello'], source)

  t.deepEqual(result, {
    my: {},
    name: 'matteo'
  })
  t.notEqual(result, source)
})

test('removes fields in an array', function (t) {
  t.plan(2)

  var source = {
    my: [{
      hello: 'world'
    }],
    name: 'matteo'
  }
  var result = remove(['hello'], source)

  t.deepEqual(result, {
    my: [{}],
    name: 'matteo'
  })
  t.notEqual(result, source)
})
