import { fallbackUrl } from './path'
import axios from 'axios'

const WP_API_URL = process.env.WP_API_URL || fallbackUrl

const GraphQlClient = async (query, variables = {}) => {
  try {
    const headers = { 'Content-Type': 'application/json' }
    const response = await axios.post(WP_API_URL, { query, variables }, { headers })

    return response.data.data

  } catch(err) {
    return null
  }
}

export default GraphQlClient
