import { io } from "socket.io-client"
const baseURL = import.meta.env.VITE_PUBLIC_BASE_URL

const socket = io(baseURL,  {withCredentials:true,  transports: ["polling"]})

export default socket