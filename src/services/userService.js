import { apiClient } from "@/lib/client";

export const fetchUserData = async () => {
 try {
   const res = await apiClient.get("/user/getsingleuser", {
    withCredentials: true,
  });
  
  return res.data.user
 } catch (error) {
   console.error("Error fetching user data:", error);
 }
};


export const updateUser = async(formdata)=>{
    const response = await apiClient.patch("/user/updateUser", {profilepicture: formdata.profilepicture}, {withCredentials:true})
return response.data.user
}


export const updateAdminUUser = async(formdata, userId)=>{
    const response = await apiClient.patch(`/user/updateuserbyadmin/${userId}`, {formdata}, {withCredentials:true})
    return response.data.user
}

export const fetchUserCreatedByadmin = async () => {
     const apiresponse = await apiClient.get("/user/getuser",{withCredentials: true})
     return apiresponse.data.salesusers
}


export const deleteAdminUser = async (userId) => {
  const apiRes = await apiClient.delete(`/user/deleteuser/${userId}`, {withCredentials: true})
  console.log(apiRes)
  return apiRes
}