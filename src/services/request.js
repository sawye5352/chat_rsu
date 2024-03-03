import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const apiService = (options) => {
  return axios.create({
    baseURL: API_URL,
    ...options,
  });
};

export default apiService;
