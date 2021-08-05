const sonic = require('../../loaders/sonic')

const suggest = async ({ collection, bucket, text }) => {
  return await sonic.search.suggest(collection, bucket, text)
}

module.exports = suggest
