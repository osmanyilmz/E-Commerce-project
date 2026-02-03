import axios from "axios";

const isProd = import.meta.env.PROD;

const axiosInstance = axios.create({
  baseURL: isProd
    ? "https://e-commerce-backend-ruby-seven.vercel.app"
    : "http://localhost:8080",
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
