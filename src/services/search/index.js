import Search from './Search.js'
import AnimeModel from '../../models/Animes.js'

const controller = async (title) => {
  const search = new Search(AnimeModel)

  if (!title) {
    return []
  }

  return await search.find(title)
}

export default controller
