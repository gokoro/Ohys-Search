import * as sonic from '../../loaders/sonic.js'

const suggest = async ({ collection, bucket, text }) => {
  return await sonic.search.suggest(collection, bucket, text)
}

export default suggest
