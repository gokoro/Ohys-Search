import fastify from './loaders/fastify.js'
import loader from './loaders/index.js'
import api from './api/index.js'

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
