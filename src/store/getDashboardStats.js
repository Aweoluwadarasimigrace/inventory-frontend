// const { create } = require("zustand");

import { fetchDashboardStats } from "@/services/dashboardService";
import { create } from "zustand";


const useDashboardStore = create((set) => ({
salesData:[],

  isLoading: false,
  error: null,
  fetchDashboardStats: async () => {
    set({ isLoading: true });
    try {
      const dataStats = await fetchDashboardStats();
      set({ salesData: dataStats.salesOvertime, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));


export default useDashboardStore;