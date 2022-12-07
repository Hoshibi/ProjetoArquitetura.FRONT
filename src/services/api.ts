import axios from "axios";

export const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  baseURL: "http://localhost:2202",
});

export default api;
