import {fetchUserData, updateUser } from "@/services/userService";
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const userData = await fetchUserData();
      set({ user: userData, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch user",
        loading: false,
      });
      console.log(error)
    }
  },
  updateUser: async (formdata) => {
    set({ loading: true, error: null });
    try {
      const result = await updateUser(formdata);
      set({ user: result, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch user",
        loading: false,
      });
    }
  },
}));

export default useUserStore;
