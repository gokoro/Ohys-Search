const sonic = require('../../lib/sonic')

class Suggest {
  async find(text) {
    const searchedList = await sonic.suggest({
      collection: 'anime',
      bucket: 'default',
      text: text,
    })

    return await searchedList
  }
}

module.exports = Suggest
