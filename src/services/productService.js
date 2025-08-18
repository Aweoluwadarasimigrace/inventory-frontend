import { apiClient } from "@/lib/client";

export const fetchallProduct = async(page)=>{
  try {
    const response = await apiClient(`/api/products?page=${page}&limit=10`);
    if (!response.ok) { 
       return console.log("Failed to fetch products");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
}