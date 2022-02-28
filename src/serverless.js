import awsLambdaFastify from 'aws-lambda-fastify'
import * as Instance from './loaders/fastify.js'

const app = Instance.get()

export const handler = awsLambdaFastify(app)
await app.ready()
