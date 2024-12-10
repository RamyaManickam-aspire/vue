import { config } from "@vue/test-utils";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      alert("Session expired or unauthorized!");
      localStorage.removeItem("token"); // Clear the token
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
