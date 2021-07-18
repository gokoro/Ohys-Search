const mongooseLoader = require('./mongoose')

const loaders = async () => {
  await mongooseLoader.connect()
}

module.exports = loaders
