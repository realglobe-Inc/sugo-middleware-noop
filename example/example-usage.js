/** This is an example to use sugo-middleware-noop */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    require('sugo-middleware-noop')({
      // Options
    })
  ],
  endpoints: {
    /* ... */
  }
})

server.listen(3000)

