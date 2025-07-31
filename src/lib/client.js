import axios from "axios"
const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL
export const apiClient = axios.create({
    baseURL,
    withCredentials:true
})

// 🔹 apiClient.interceptors.response.use(...)
// This sets up an interceptor to watch all responses coming from the server.
apiClient.interceptors.request.use((Response)=>Response, (error) => {
    if(error?.response?.status === 401 || error?.response?.status === 403) {
        window.location.href = "auth/login"
    }
})