const Fastify = require('fastify').default
const fastify = Fastify()
const fastifyCors = require('fastify-cors')

fastify.register(fastifyCors)

module.exports = fastify
