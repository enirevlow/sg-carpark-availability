import axios from "axios";

const env = process.env;

const API = axios.create({
  baseURL: env.REACT_APP_AVAILABLE_API_URL,
});

export default API;
