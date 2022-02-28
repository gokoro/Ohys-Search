import * as sonic from '../../loaders/sonic.js'

const search = async ({ collection, bucket, text }) => {
  return await sonic.search.query(collection, bucket, text)
}

export default search
