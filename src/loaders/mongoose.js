const mongoose = require('mongoose')
const config = require('../config')

module.exports.connect = async () => {
  return await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    dbName: config.databaseName,
  })
}

module.exports.close = async () => {
  return await mongoose.connection.close()
}
