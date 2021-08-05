const Suggest = require('./Suggest')
const AnimeModel = require('../../models/Animes')

const Controller = async (text) => {
  const suggest = new Suggest(AnimeModel)

  if (!text) {
    return []
  }

  return await suggest.find(text)
}

module.exports = Controller
