const { nodeExternalsPlugin } = require('esbuild-node-externals')
const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')
const { commonjs } = require('@hyrious/esbuild-plugin-commonjs')

module.exports = [nodeExternalsPlugin(), pnpPlugin(), commonjs()]
