import Suggest from './Suggest.js'
import AnimeModel from '../../models/Animes.js'

const Controller = async (text) => {
  const suggest = new Suggest(AnimeModel)

  if (!text) {
    return []
  }

  return await suggest.find(text)
}

export default Controller
