/* global require, module, __dirname */
const { override, fixBabelImports } = require('customize-cra')
const path = require('path')

override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
)

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { '@': path.resolve(__dirname, 'src') }
  }
  return config
}