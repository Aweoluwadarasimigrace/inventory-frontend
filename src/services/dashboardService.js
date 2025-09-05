import { apiClient } from "@/lib/client";

export const fetchDashboardStats = async () => {
  try {
    const response = await apiClient.get("/dashboard/getstats");
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
  }
};

export const fetchTotalProductAvailable = async () => {
  try {
    const response = await apiClient.get("/dashboard/gettotalproduct");
    return response.data;
  } catch (error) {
    console.log(error, "Error fetching total product available");
  }
};

export const fetchOutOfStockProducts = async () => {
  try {
    const response = await apiClient.get("/dashboard/getoutofstockproducts");
    return response.data;
  } catch (error) {
    console.error("Error fetching out of stock products:", error);
  }
};

export const fetchTotalCustomer = async () => {
  try {
    const res = await apiClient.get("/dashboard/gettotalcustomers");
    return res.data;
  } catch (error) {
    console.error("Error fetching total customer", error);
  }
};


export const getTotalProductAvailable = async ()=>{
  try {
    const res = await apiClient.get("/dashboard/gettotalproducts");
    return res.data
  } catch (error) {
     console.error("Error fetching total products", error);
  }
}

export const getSalesPerMonth = async ()=>{
  try {
    const res = await apiClient.get("/dashboard/gettotalsalespermonth");
    return res.data
  } catch (error) {
     console.error("Error fetching total sales per month", error);
  }
}