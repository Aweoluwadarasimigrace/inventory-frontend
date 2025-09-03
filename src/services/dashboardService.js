import { apiClient } from "@/lib/client";

export const fetchDashboardStats = async () => {
  try {
    const response = await apiClient.get('/dashboard/getstats');
    console.log(response.data, "Fetched dashboard stats");
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
  }
};


export const fetchTotalProductAvailable = async()=>{
  try {
    const response = await apiClient.get('/dashboard/gettotalproduct');
    console.log(response.data, "Fetched total product available");
    return response.data;
  } catch (error) {
    console.log(error, "Error fetching total product available");
  }
}