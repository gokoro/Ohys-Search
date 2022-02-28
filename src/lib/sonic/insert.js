import * as sonic from '../../loaders/sonic.js'

const insert = async ({ collection, bucket, key, text }) => {
  await sonic.ingest.push(collection, bucket, key, text)
}

export default insert
