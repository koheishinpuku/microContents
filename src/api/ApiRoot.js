import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://pukupuku.microcms.io/api/v1',
  headers: { 'X-API-KEY': 'b151d8de-dbdd-40b4-91a9-9cfc68857a56' },
  responseType: 'json'
})
