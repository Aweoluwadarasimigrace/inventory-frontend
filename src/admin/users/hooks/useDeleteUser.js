import { apiClient } from "@/lib/client";
import { toast } from "sonner";

export const useDeleteUser = () => {
  const deleteUser = async (userId) => {
    try {
      const response = await apiClient.delete(`/user/deleteuser/${userId}`, {withCredentials: true});
      if (response.status === 200) {
        toast.success("User deleted successfully");
      }
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return {
    deleteUser,
  };
};
