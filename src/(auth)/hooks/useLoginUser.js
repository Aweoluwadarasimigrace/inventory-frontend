import { useState } from "react";
import { apiClient } from "../../lib/client";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export const useLoginUser = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    setisLoading(true);
    e.preventDefault();
    try {
      const res = await apiClient.post("/auth/login", formData, {
        withCredentials: true,
      });
      if (res.data) {
        toast.success("login successful, welcome back");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.success("an error occured");
    } finally {
      setisLoading(false);
    }
  };
  return {
    isLoading,
    handleLogin,
    handleChangeForm,
  };
};
