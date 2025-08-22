// const { create } = require("zustand");

import { createSales, fetchAllSales } from "@/services/salesService";
import { create } from "zustand";

const useSalesStore = create((set, get) => ({
  sales: [],
  totalPages: 0,
  totalsales: 0,
  loading: false,
  error: null,

  fetchAllSales: async (page) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchAllSales(page);
      console.log(data, "fetched sales data");
      set({
        sales: data.sales,
        totalPages: data.totalPages,
        totalsales: data.total,
        loading: false,
      });
      console.log(sales, "sales from store");
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  createSale: async (formData) => {
    set({ loading: true, error: null });
    try {
      const data = await createSales(formData);
      set({ sales: [...get().sales, data], loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useSalesStore;
