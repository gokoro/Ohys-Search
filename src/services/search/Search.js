import * as meilisearch from '../../lib/meilisearch/index.js'

class Search {
  constructor(Model) {
    this.Model = Model
  }
  async find(title) {
    const Model = this.Model

    const searchedList = await meilisearch.search({ text: title })

    const animeList = searchedList.hits.map(
      async ({ _id }) => await Model.findById(_id).exec()
    )

    return await Promise.all(animeList)
  }
}

export default Search
