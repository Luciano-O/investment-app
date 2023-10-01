import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-invest.onrender.com'
})