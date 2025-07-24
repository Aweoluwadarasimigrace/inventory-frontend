import { apiClient } from "@/lib/client";

export const fetchUser = async () => {
  const res = await apiClient.get("/user/getsingleuser", {
    withCredentials: true,
  });
  console.log(res.data.user);

  return res.data.user
};


export const updateUser = async(formdata)=>{
    const response = await apiClient.patch("/user/updateUser", formdata, {withCredentials:true})
return response.data.user
}
