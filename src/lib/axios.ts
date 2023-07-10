import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.maquinare.com.br'

export const api = axios.create({
  baseURL,
  withCredentials: true,
})
