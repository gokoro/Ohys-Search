const fastify = require('./loaders/fastify')
const loader = require('./loaders')
const api = require('./api')

const start = async () => {
  api()
  loader()

  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
