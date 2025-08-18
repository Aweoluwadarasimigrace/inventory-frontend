import { apiClient } from "@/lib/client";

export const fetchallProduct = async(page)=>{
    console.log(page)
  try {
    const response = await apiClient.get(`/product/getallproduct?page=${page}&limit=10`, {withCredentials: true});
    console.log(response, "response from product service")
    if (!response.ok) { 
       return console.log("Failed to fetch products");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}