/**
 * Noop middleware for SUGOS
 * @function sugoMiddlewareNoop
 * @param {object} [options] - Optional settings.
 * @returns {function} - Defined app function.
 */

'use strict'

const co = require('co')
const debug = require('debug')('sugo:middleware:noop')

/** @lends sugoMiddlewareNoop */
function create (options = {}) {
  let middleware = co.wrap(function * middleware (ctx, next) {
    yield next()
  })

  Object.assign(middleware, {
    /**
     * Description of this middleware.
     */
    $desc: 'Do nothing'
  })

  return middleware
}

module.exports = create
