import { apiClient } from "@/lib/client";

export const fetchDashboardStats = async () => {
  try {
    const response = await apiClient.get('/dashboard/getstats');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
  }
};


export const fetchTotalProductAvailable = async()=>{
  try {
    const response = await apiClient.get('/dashboard/gettotalproduct');
    return response.data;
  } catch (error) {
    console.log(error, "Error fetching total product available");
  }
}

export const fetchOutOfStockProducts = async () => {
  try {
    const response = await apiClient.get('/dashboard/getoutofstockproducts');
    console.log(response.data, "Fetched out of stock products");
    return response.data;
  } catch (error) {
    console.error('Error fetching out of stock products:', error);
  }
};