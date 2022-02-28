import SearchController from '../../services/search/index.js'

export default (instance) => {
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

  instance.get('/search', { schema }, handler)
}
