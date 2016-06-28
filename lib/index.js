/**
 * Noop middleware for SUGOS
 * @module sugo-middleware-noop
 * @version 1.0.1
 */

'use strict'

const create = require('./create')
const pkg = require('../package.json')

let lib = create.bind(this)

Object.assign(lib, create, {
 create,
 version: pkg.version
})

module.exports = lib
