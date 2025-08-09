import {
  deleteAdminUser,
  fetchUserCreatedByadmin,
  updateAdminUser,
} from "@/services/userService";
import { toast } from "sonner";
import { create } from "zustand";

const useAdminUserStore = create((set, get) => ({
  adminUser: [],
  loading: false,
  error: null,

  fetchAdminUser: async () => {
    set({ loading: true, error: null });

    try {
      const adminUserData = await fetchUserCreatedByadmin();
      set({ adminUser: adminUserData, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch user",
        loading: false,
      });
    }
  },

  removeAdminUser: async (userId) => {
    try {
      await deleteAdminUser(userId);
      toast.success("User deleted successfully");

      const updateUi = get().adminUser.filter((user) => user._id !== userId);
      set({ adminUser: updateUi });
    } catch (error) {
      set({error: "failed to delete user"});
      toast.error("Failed to delete user");
      console.log(error)
    }
  },

  updateUserByAdmin: async (formdata, userId) => {
     set({loading: true, error:null});

     try {
      const result = await updateAdminUser(formdata, userId);
      set({adminUser: get().adminUser.find(user => user._id === userId ? result : user), loading: false });
      console.log(result, adminUser, "this is admin and result ")
      toast.success("User updated successfully");

      return result
     } catch (error) {
       set({error: "failed to update user", loading: false});
       toast.error("Failed to update user");
       console.log(error);
     }
  }
}));

export default useAdminUserStore;
