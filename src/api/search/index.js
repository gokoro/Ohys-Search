const fastify = require('../../loaders/fastify')
const SearchController = require('../../services/search')

module.exports = () => {
  const schema = {
    querystring: {
      title: { type: 'string' },
    },
  }

  const handler = async (req, rep) => {
    const { title } = req.query

    const data = await SearchController(title)

    rep.send({ data })
  }

  fastify.get('/search', { schema }, handler)
}
