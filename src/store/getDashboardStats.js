// const { create } = require("zustand");

import {
  fetchDashboardStats,
  fetchOutOfStockProducts,
  fetchTotalCustomer,
  fetchTotalProductAvailable,
  getTotalProductAvailable,
} from "@/services/dashboardService";
import { create } from "zustand";

const useDashboardStore = create((set) => ({
  salesData: [],
  purchaseData: [],
  totalSales: [], // default object
  totalPurchases: [], // default object
  revenue: 0,
  totalProductAvailable: [],
  outOfStockProducts: [],
  customerCount: 0,
  productCount: 0,
  count: 0,
  isLoading: false,
  error: null,
  fetchDashboardStats: async () => {
    set({ isLoading: true });
    try {
      const dataStats = await fetchDashboardStats();
      set({
        salesData: dataStats.salesOvertime,
        purchaseData: dataStats.purchaseOvertime,
        totalSales: dataStats.totalSales,
        totalPurchases: dataStats.totalPurchases,
        totalquantitysold: dataStats.totalQuantitySold || 0,
        totalquantityPurchased: dataStats.totalQuantityPurchased,
        isLoading: false,
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  fetchtotalProductAvailable: async () => {
    set({ isLoading: true });
    try {
      const data = await fetchTotalProductAvailable();
      console.log(data, "Data in store");
      set({
        totalProductAvailable: data.totalProductsInStock,
        isLoading: false,
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  fetchOutOfStockProduct: async () => {
    set({ isLoading: true });
    try {
      const data = await fetchOutOfStockProducts();
      set({
        outOfStockProducts: data.items,
        count: data.count,
        isLoading: false,
      });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  fetchTotalCustomerAvailable: async () => {
    set({ isLoading: true });
    try {
      const data = await fetchTotalCustomer();
      set({ customerCount: data.count, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
  fetchTotalProduct: async () => {
    set({ isLoading: true });

    try {
      const data = await getTotalProductAvailable();
      set({ productCount: data.count, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useDashboardStore;
