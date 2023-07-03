import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://maquinare.vercel.app'

export const api = axios.create({
  baseURL,
  withCredentials: true,
})
