import { apiClient } from "@/lib/client";
import { create } from "zustand";


const useUserStore = create((set)=>({
user:null,
loading: false,
error: null,

fetchUser: async()=>{
    set({loading: true, error:null})

    try {
        const res = await apiClient.get("/user/getsingleuser", {withCredentials:true})
        console.log(res)
        set({user:res.user, loading:false})
    } catch (error) {
           set({
        error: err.response?.data?.message || 'Failed to fetch user',
        loading: false,
      })
    }
},

updatedUser: (updatedUser)=>set({user: updatedUser})
}))

export default useUserStore