import { apiClient } from "@/lib/client";
import { useEffect, useState } from "react";

export const useGetSalesReport = () => {
  const [overview, setOverview] = useState(null);
  const [dailySales, setDailySales] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);
  const [yearlySales, setYearlySales] = useState([]);

  const getSalesOverview = async () => {
    // Logic to get sales overview

    try {
      // Fetch sales overview data
      const { data } = await apiClient.get("/reports/overview");
      setOverview(data);
    } catch (error) {
      console.error("Error fetching sales overview:", error);
    }
  };


  const getDailySales = async () => {
    // Logic to get daily sales data
    try {
      // Fetch daily sales data
      const { data } = await apiClient.get("/reports/daily-sales");
      setDailySales(data.dailySales);
    } catch (error) {
      console.error("Error fetching daily sales:", error);
    }
  };

  const getMonthlySales = async () => {
    // Logic to get monthly sales data
    try {
      // Fetch monthly sales data
      const { data } = await apiClient.get("/reports/monthly-sales");
      setMonthlySales(data.monthlySales);
    } catch (error) {
      console.error("Error fetching monthly sales:", error);
    }
  };

  const getYearlySales = async () => {
    // Logic to get yearly sales data
    try {
      // Fetch yearly sales data
      const { data } = await apiClient.get("/reports/yearly-sales");
      setYearlySales(data.yearlySales);
    } catch (error) {
      console.error("Error fetching yearly sales:", error);
    }
  };

  useEffect(() => {
    getSalesOverview();
    getDailySales();
    getMonthlySales();
    getYearlySales();
  }, []);

  return {
    overview,
    dailySales,
    monthlySales,
    yearlySales,
  };
};
