import { apiClient } from "@/lib/client";

export const fetchUserData = async () => {
  const res = await apiClient.get("/user/getsingleuser", {
    withCredentials: true,
  });
  
  return res.data.user
};


export const updateUser = async(formdata)=>{
    const response = await apiClient.patch("/user/updateUser", {profilepicture: formdata.profilepicture}, {withCredentials:true})
return response.data.user
}


export const fetchUserCreatedByadmin = async () => {
     const apiresponse = await apiClient.get("/user/getuser",{withCredentials: true})
     console.log(apiresponse.data, 'api')
     return apiresponse.data.salesusers
}