import dotenv from 'dotenv'

dotenv.config()

export default {
  env: process.env.NODE_ENV || 'production',

  databaseURL: process.env.DATABASE_URL || '',
  databaseName: process.env.DATABASE_NAME || '',

  meilisearch: {
    host: process.env.MEILISEARCH_HOST || '',
    key: process.env.MEILISEARCH_KEY || '',
  },
}
