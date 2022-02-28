import fastify from '../../loaders/fastify.js'
import SuggestController from '../../services/suggest/index.js'

export default () => {
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
