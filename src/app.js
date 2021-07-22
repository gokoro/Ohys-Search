const fastify = require('./loaders/fastify')
const loader = require('./loaders')
const api = require('./api')

const start = async () => {
  api()
  await loader()

  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
