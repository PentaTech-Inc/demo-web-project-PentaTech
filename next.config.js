/**
 * Allows the import of CSS files
 */

// next.config.js
const withCSS = require('@zeit/next-css')
// module.exports = withCSS({/* my next config */ })

const withImages = require('next-images')
// module.export = withImages()

module.exports = withCSS(withImages());

// module.exports = withCSS({
//     // withImages: () => {}
//     // withImages() {}
// })