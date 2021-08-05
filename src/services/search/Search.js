const sonic = require('../../lib/sonic')

class Search {
  constructor(Model) {
    this.Model = Model
  }
  async find(title) {
    const Model = this.Model

    const searchedList = await sonic.search({
      collection: 'anime',
      bucket: 'default',
      text: title,
    })

    const animeList = searchedList.map(
      async (id) => await Model.findById(id).exec()
    )

    return await Promise.all(animeList)
  }
}

module.exports = Search
