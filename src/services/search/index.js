const Search = require('./Search')
const AnimeModel = require('../../models/Animes')

const controller = async (title) => {
  const search = new Search(AnimeModel)

  if (!title) {
    return []
  }

  return await search.find(title)
}

module.exports = controller
