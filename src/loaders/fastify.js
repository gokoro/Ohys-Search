import fastifyFactory from 'fastify'
import fastifyCors from 'fastify-cors'

const fastify = fastifyFactory()

fastify.register(fastifyCors)

export default fastify
