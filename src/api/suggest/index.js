import SuggestController from '../../services/suggest/index.js'

export default (instance) => {
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

  instance.get('/suggest', { schema }, handler)
}
