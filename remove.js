'use strict'

var traverse = require('traverse')

function remove (fields, object) {
  return traverse.map(object, function (current) {
    map(this, fields, current)
  })
}

function map (node, fields, current) {
  if (Array.isArray(current) || typeof current !== 'object') {
    return
  }

  var toCopy = Object.keys(current).filter(isToSave, fields)
  var state = toCopy.reduce(copy, new State(current))

  node.update(state.updated)
}

function isToSave (key) {
  return this.indexOf(key) < 0
}

function copy (state, key) {
  state.updated[key] = state.current[key]
  return state
}

function State (current) {
  this.current = current
  this.updated = {}
}

module.exports = remove
