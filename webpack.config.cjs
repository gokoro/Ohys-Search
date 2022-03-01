const path = require('path')

const slsw = require('serverless-webpack')
// const { WebpackPnpExternals } = require('webpack-pnp-externals')
// const PnpWebpackPlugin = require(`pnp-webpack-plugin`)

const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: slsw.lib.entries,
  // target: 'node14.14',
  // target: 'web',

  output: {
    libraryTarget: 'commonjs',
    // chunkFormat: 'module',
    path: path.join(__dirname, '.webpack'),
  },

  target: 'node16',
  experiments: {
    outputModule: true,
  },
  // externalsType: 'module',
  // externalsPresets: { node: true },

  // externals: [WebpackPnpExternals(), nodeExternals()],
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',

  optimization: {
    concatenateModules: false,
  },
}
