import { MeiliSearch } from 'meilisearch'
import config from '../config/index.js'

export const client = new MeiliSearch({
  host: config.meilisearch.host,
  apiKey: config.meilisearch.key,
})
