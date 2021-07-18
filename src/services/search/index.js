const sonic = require('../../lib/sonic')
const Search = require('./Search')
const AnimeModel = require('../../models/Animes')

const controller = async (title) => {
  const search = new Search(AnimeModel)

  if (!title) {
    return []
  }

  const searchedList = await sonic.search({
    collection: 'anime',
    bucket: 'default',
    text: title,
  })

  const animeList = []

  for await (const animeId of searchedList) {
    animeList.push(await search.find(animeId))
  }

  return animeList
}

module.exports = controller
