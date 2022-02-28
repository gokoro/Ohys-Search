import fastify from '../../loaders/fastify.js'
import SearchController from '../../services/search/index.js'

export default () => {
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
