import { apiClient } from "@/lib/client";

export const fetchallProduct = async(page)=>{
    console.log(page)
  try {
    const response = await apiClient.get(`/product/getallproduct?page=${page}&limit=10`);
    console.log(response, "response from product service")
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const deleteProduct = async (productId) => {
  try {
    const response = await apiClient.delete(`/product/deleteproduct/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editProduct = async (productId, payload) => {
  try {
    const response = await apiClient.patch(`/product/updateproduct/${productId}`, payload, {
        headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
