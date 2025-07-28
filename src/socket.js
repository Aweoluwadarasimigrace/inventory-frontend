import { io } from "socket.io-client"


const socket = io(VITE_PUBLIC_BASE_URL, {withCredentials:true})

export default socket