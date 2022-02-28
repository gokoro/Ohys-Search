import { build } from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'

await build({
  entryPoints: ['src/workers.js'],
  bundle: true,
  outfile: 'dist/workers.js',
  format: 'esm',
  plugins: [pnpPlugin()],
})
