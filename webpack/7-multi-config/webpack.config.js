const merge = require('webpack-merge')
const common = require('./webpack.common')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  plugins: [
    new WebpackBundleAnalyzer()
  ]
})
