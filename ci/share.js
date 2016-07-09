#!/usr/bin/env node

/**
 * Share this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { share } = require('sugo-ci-middleware')
const pkg = require('../package.json')

share(pkg, {})
