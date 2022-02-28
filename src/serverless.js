import awsLambdaFastify from 'aws-lambda-fastify'
import * as Instance from './loaders/fastify.js'
import * as Mongoose from './loaders/mongoose'

const app = Instance.get()

let connection

connection = connection ?? (await Mongoose.connect())

export const handler = awsLambdaFastify(app)
await app.ready()
