import search from './search/index.js'
import suggest from './suggest/index.js'

const handler = (instance) => {
  search(instance)
  suggest(instance)

  return instance
}

export default handler
