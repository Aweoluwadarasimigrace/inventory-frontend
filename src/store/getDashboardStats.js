// const { create } = require("zustand");

import { fetchDashboardStats } from "@/services/dashboardService";
import { create } from "zustand";

const useDashboardStore = create((set) => ({
  salesData: [],
  purchaseData: [],
  totalSales: [], // default object
  totalPurchases: [], // default object
  revenue: 0,
  isLoading: false,
  error: null,
  fetchDashboardStats: async () => {
    set({ isLoading: true });
    try {
      const dataStats = await fetchDashboardStats();
      set({
        salesData: dataStats.salesOvertime,
        purchaseData: dataStats.purchaseOvertime,
        totalSales: dataStats.totalSales || [],
        totalPurchases: dataStats.totalPurchases || [],
        totalquantitysold: dataStats.totalQuantitySold || 0,
        totalquantityPurchased: dataStats.totalQuantityPurchased || 0,
        isLoading: false,
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useDashboardStore;
