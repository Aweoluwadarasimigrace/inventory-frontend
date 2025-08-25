import { createPurchase, deletePurchase, getPurchase, updatePurchase } from "@/services/purchaseService";
import { create } from "zustand";

const usePurchaseStore = create((set, get) => ({
  purchases: [],
  totalPages: 0,
  totalpurchases: 0,
  loading: false,
  error: null,

  fetchPurchases: async (page) => {
    set({ loading: true });
    try {
        const data = await getPurchase(page);
    set({
      purchases: data.purchases,
      totalPages: data.totalPages,
      totalSales: data.total,
      loading: false,
    });
    } catch (error) {
        set({ error: error.message, loading: false });
    }
  },

  createPurchases: async (formData) => {
    set({ loading: true });
    try {
      const data = await createPurchase(formData);
      set({
        purchases: [...get().purchases, data],
        loading: false,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  updatePurchases: async (purchaseId, formData) => {
    set({ loading: true });
    try {
      const data = await updatePurchase(purchaseId, formData);
      set({
        purchases: get().purchases.map((purchase) =>
          purchase._id === purchaseId ? { ...purchase, ...data } : purchase
        ),
        loading: false,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  deletePurchases: async (purchaseId) => {
    set({ loading: true });
    try {
      await deletePurchase(purchaseId);
      set({
        purchases: get().purchases.filter((purchase) => purchase._id !== purchaseId),
        loading: false,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default usePurchaseStore;
