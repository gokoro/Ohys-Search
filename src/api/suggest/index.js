const fastify = require('../../loaders/fastify')
const SuggestController = require('../../services/suggest')

module.exports = () => {
  const schema = {
    querystring: {
      keyword: { type: 'string' },
    },
  }

  const handler = async (req, rep) => {
    const { keyword } = req.query

    const data = await SuggestController(keyword)

    rep.send({ data })
  }

  fastify.get('/suggest', { schema }, handler)
}
