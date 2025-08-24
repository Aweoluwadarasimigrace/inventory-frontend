import { apiClient } from "@/lib/client";

export const fetchSalesReturn = async (page) => {
  try {
    const response = await apiClient.get(
      `/returns/getsalesreturns?page=${page}&limit=10`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createsalesReturn = async (payload) => {
  try {
    const response = await apiClient.post(`/returns/createsalesreturn`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const deletesalesReturn = async (salesReturnId) => {
  try {
    const response = await apiClient.delete(`/returns/deletesalesreturn/${salesReturnId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const updateSalesReturn = async (salesReturnId, payload) => {
  try {
    const response = await apiClient.patch(`/returns/updatesalesreturn/${salesReturnId}`, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};