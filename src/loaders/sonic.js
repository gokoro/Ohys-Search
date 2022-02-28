import { Search, Ingest } from 'sonic-channel'
import config from '../config/index.js'

let sonicSearchClient = null
let sonicIngestClient = null

const getSearchConnection = () => {
  if (!sonicSearchClient) {
    sonicSearchClient = new Search(config.sonic).connect()
  }
  return sonicSearchClient
}

const getIngestConnection = () => {
  if (!sonicIngestClient) {
    sonicIngestClient = new Ingest(config.sonic).connect()
  }
  return sonicIngestClient
}

export const search = getSearchConnection()
export const ingest = getIngestConnection()
