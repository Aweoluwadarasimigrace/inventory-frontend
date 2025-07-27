import { fetchUserCreatedByadmin } from "@/services/userService";
import { create } from "zustand";


const useAdminUserStore = create((set) => ({
  adminUser: [],
  loading: false,
  error: null,

  fetchAdminUser: async () => {
    set({ loading: true, error: null });

    try {
      const adminUserData = await fetchUserCreatedByadmin();
      set({adminUser: adminUserData, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch user",
        loading: false,
      });
    }
  },
}));


export default useAdminUserStore