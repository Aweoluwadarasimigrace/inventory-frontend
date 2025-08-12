import { apiClient } from "@/lib/client";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await apiClient.post("/auth/logout");
      console.log(res.data)
      toast.success(res.data.message);
      navigate("/auth/login");
    } catch (error) {
      toast.error("Failed to logout, Try Again Later");
    }
  };

  return {
    handleLogout
  };
};
