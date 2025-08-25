import { apiClient } from "@/lib/client";

export const getPurchase = async (page) => {
  try {
    const response = await apiClient.get(`/purchase/getallpurchases?page=${page}&limit=10`);
    return response.data;
  } catch (error) {
   console.log(error)
  }
};

export const createPurchase = async (formData) => {
  try {
    const response = await apiClient.post(`/purchase/createpurchase`, formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const updatePurchase = async (purchaseId, payload) => {
  try {
    const response = await apiClient.patch(`/purchase/updatepurchase/${purchaseId}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePurchase = async (purchaseId) => {
  try {
    const response = await apiClient.delete(`/purchase/deletepurchase/${purchaseId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};