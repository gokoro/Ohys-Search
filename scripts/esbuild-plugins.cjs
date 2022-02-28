const { nodeExternalsPlugin } = require('esbuild-node-externals')
const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp')

module.exports = [nodeExternalsPlugin(), pnpPlugin()]
