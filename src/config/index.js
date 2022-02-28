import dotenv from 'dotenv'

dotenv.config()

export default {
  env: process.env.NODE_ENV || 'production',

  databaseURL: process.env.DATABASE_URL || '',
  databaseName: process.env.DATABASE_NAME || '',

  sonic: {
    host: process.env.SONIC_HOST || '',
    port: Number(process.env.SONIC_PORT) || 1491,
    auth: process.env.SONIC_AUTH,
  },
}
