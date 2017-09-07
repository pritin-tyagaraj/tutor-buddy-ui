/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  pages: ['index'],
  additionalWebpackConfig: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'static/**/*.min.*',
        },
        {
          from: 'static/**/fonts/*.*',
        },
      ]),
    ],
  },
}
