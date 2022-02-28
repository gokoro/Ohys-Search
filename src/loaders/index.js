import * as mongooseLoader from './mongoose.js'

const loaders = async () => {
  await mongooseLoader.connect()
}

export default loaders
