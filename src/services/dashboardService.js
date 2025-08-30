import { apiClient } from "@/lib/client";

export const fetchDashboardStats = async () => {
  try {
    const response = await apiClient.get('/dashboard/getstats');
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
  }
};
