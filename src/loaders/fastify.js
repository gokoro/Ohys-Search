import fastifyFactory from 'fastify'
import fastifyCors from 'fastify-cors'
import route from '../api/index.js'

export const get = () => {
  const fastify = fastifyFactory()

  fastify.register(fastifyCors)

  route(fastify)

  return fastify
}
