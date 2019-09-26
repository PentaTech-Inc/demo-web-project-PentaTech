/**
 * Allows the import of CSS files
 */

// next.config.js
const withCSS = require('@zeit/next-css')
// module.exports = withCSS({/* my next config */ })

const withImages = require('next-images')
// module.exports = withImages()

// combine both module exports to make it work
module.exports = withCSS(withImages());