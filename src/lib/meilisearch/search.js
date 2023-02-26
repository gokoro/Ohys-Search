import { client } from '../../loaders/meilisearch.js'

async function search({ text }) {
  return await client.index('animes').search(text)
}

export default search
