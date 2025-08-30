// const { create } = require("zustand");

import { fetchDashboardStats } from "@/services/dashboardService";
import { create } from "zustand";


const useDashboardStore = create((set) => ({
 data: null,
  isLoading: false,
  error: null,
  fetchDashboardStats: async () => {
    set({ isLoading: true });
    try {
      const dataStats = await fetchDashboardStats();
      set({ data: dataStats, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));


export default useDashboardStore;