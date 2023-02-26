import search from './search/index.js'

const handler = (instance) => {
  search(instance)

  return instance
}

export default handler
