import { Router } from 'worktop'
import * as Cache from 'worktop/cache'

const API = new Router()

API.add('GET', '/search', async (req, res) => {
  res.send(200, {
    hello: 'world',
  })
})

Cache.listen(API.run)
