import mongoose from 'mongoose'
import config from '../config/index.js'

export const connect = async () => {
  return await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    dbName: config.databaseName,
  })
}

export const close = async () => {
  return await mongoose.connection.close()
}
