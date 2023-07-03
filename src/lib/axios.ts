import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.example.com'

export const api = axios.create({
  baseURL,
  withCredentials: true,
})
