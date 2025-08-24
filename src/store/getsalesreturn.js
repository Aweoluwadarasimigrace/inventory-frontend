import { createsalesReturn, deletesalesReturn, fetchSalesReturn, updateSalesReturn } from "@/services/salesReturnService";
import { create } from "zustand";

const useSalesReturnStore = create((set, get) => ({
  salesReturn: [],
  totalPages: 0,
  totalSalesReturns: 0,
  loading: false,
  error: null,

  fetchAllSalesReturns: async (page) => {
    set({ loading: true , error: null });
    try {
      const data = await fetchSalesReturn(page);
      set({
        salesReturn: data.salesReturns,
        totalPages: data.totalPages,
        totalSalesReturns: data.total,
        loading: false,
      });
    } catch (error) {
        console.log(error.response.data.error, "here");
      set({ error: error.message });
    }
  },


  createSalesReturn: async (salesData) => {
    set({ loading: true, error: null });
    try {
      const newSales = await createsalesReturn(salesData);
        set({ salesReturn: [...get().salesReturn, newSales], loading: false });
    } catch (error) {
        console.log(error.response.data.error, "here");
      set({ error: error.message });
    }
  },

  updatesalesreturn: async (salesReturnId, payload) => {
    set({ loading: true, error: null });
    try {
      const data = await updateSalesReturn(salesReturnId, payload);
      const updatedSalesReturn = get().salesReturn.map((item) =>
        item._id === salesReturnId ? { ...item, ...data } : item
      );
      set({
        salesReturn: updatedSalesReturn,
        loading: false,
      });
    } catch (error) {
      console.log(error.response.data.error, "here");
      set({ error: error.message });
    }
  },

  removeSalesReturn: async (salesReturnId) => {
    set({ loading: true, error: null });
    try {
      await deletesalesReturn(salesReturnId);
      const updatedSalesReturn = get().salesReturn.filter((item) => item.id !== salesReturnId);
      set({ salesReturn: updatedSalesReturn, loading: false, totalSalesReturns: get().totalSalesReturns - 1 });
    } catch (error) {
      console.log(error.response.data.error, "here");
      set({ error: error.message });
    }
  }
}));

export default useSalesReturnStore;