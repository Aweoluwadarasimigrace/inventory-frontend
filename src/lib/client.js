import axios from "axios"


const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL
console.log(baseURL)
export const apiClient = axios.create({
    baseURL,
    withCredentials:true
})
