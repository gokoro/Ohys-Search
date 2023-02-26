import awsLambdaFastify from '@fastify/aws-lambda'
import * as Instance from './loaders/fastify.js'
import * as Mongoose from './loaders/mongoose.js'

const app = Instance.get()
const proxy = awsLambdaFastify(app)

let connection = null

export const handler = async (event, context) => {
  if (connection === null) {
    connection = await Mongoose.connect()
  }

  await connection

  return proxy(event, context)
}
