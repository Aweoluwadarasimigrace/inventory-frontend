// const { create } = require("zustand");

import { fetchDashboardStats } from "@/services/dashboardService";
import { create } from "zustand";

const useDashboardStore = create((set) => ({
  salesData: [],
  purchaseData: [],
  totalSales: { totalSales: 0, totalQuantity: 0 }, // default object
  totalPurchases: { totalPurchases: 0, totalQuantity: 0 }, // default object
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
        totalSales: dataStats.totalSales || { totalSales: 0, totalQuantity: 0 },
        totalPurchases: dataStats.totalPurchases || {
          totalPurchases: 0,
          totalQuantity: 0,
        },
        revenue: dataStats.revenue || 0,
        isLoading: false,
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useDashboardStore;
