import axios from "axios"
const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL
export const apiClient = axios.create({
    baseURL,
})

// 🔹 apiClient.interceptors.response.use(...)
// This sets up an interceptor to watch all responses coming from the server.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/auth/login";
    }
    return Promise.reject(error); // make sure to re-throw the error
  }
);
 apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});