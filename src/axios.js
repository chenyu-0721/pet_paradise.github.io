// src/axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pet-back.onrender.com',
  timeout: 1000,
})

export default instance
