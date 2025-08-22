import { apiClient } from "@/lib/client";


export const fetchAllSales = async (page) => {
  try {
    const response = await apiClient.get(`/sales/getallsales?page=${page}&limit=10`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching sales data:', error);
  }
};

export const createSales = async(formData)=>{
  try {
    const response = await apiClient.post('/sales/createsale', formData);
    return response.data;
  } catch (error) {
    console.error('Error creating sales data:', error);
  }
}

export const deleteSales = async (salesId) =>{
  try {
    const response = await apiClient.delete(`/sales/deletesale/${salesId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting sales data:', error);
  }
}

export const editSales = async (salesId, payload) => {
  try {
    const response = await apiClient.patch(`/sales/updatesale/${salesId}`, payload);

    return response.data;
  } catch (error) {
    console.error('Error editing sales data:', error);
  }
};
