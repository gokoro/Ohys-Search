import * as Instance from './loaders/fastify.js'
import loader from './loaders/index.js'

const fastify = Instance.get()

const start = async () => {
  await loader()

  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
