sugo-middleware-noop
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-middleware-noop
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-middleware-noop
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-middleware-noop.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-middleware-noop
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-middleware-noop.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-middleware-noop/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-middleware-noop
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-middleware-noop.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-middleware-noop.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-middleware-noop
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-middleware-noop.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-middleware-noop
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-middleware-noop.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Noop middleware for SUGOS

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


This is stub middleware for testing purpose. ("noop" stands for "No-Operation")
Just call next and do nothing.


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.Requirements.md.hbs" Start -->

<a name="section-doc-guides-00-requirements-md"></a>
Requirements
-----

<a href="https://nodejs.org">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/nodejs-banner.png"
       alt="Node.js"
       height="40"
       style="height:40px"
  /></a>
<a href="https://docs.npmjs.com/">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/npm-banner.png"
       alt="NPM"
       height="40"
       style="height:40px"
  /></a>

+ [Node.js ( >=6 )][node_download_url]
+ [npm ( >=3 )][npm_url]

[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/


<!-- Section from "doc/guides/00.Requirements.md.hbs" End -->

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sugo-middleware-noop --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------

Apply middleware to sg-server, which is internally use by sugo-cloud.

```javascript
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


```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Signature.md.hbs" Start -->

<a name="section-doc-guides-03-signature-md"></a>
Signature
-------

#### sugoMiddlewareNoop(options) -> function

Noop middleware for SUGOS

##### Args

| Name | Type | Default | Description |
| --- | ---- | --- | --- |
| options | object  |  | Optional settings. |


<!-- Section from "doc/guides/03.Signature.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-middleware-noop/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->
