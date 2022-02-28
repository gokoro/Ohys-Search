import * as sonic from '../../lib/sonic/index.js'

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

export default Suggest
