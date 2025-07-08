import axios from "axios";
import { useState } from "react";
import { apiClient } from "../../lib/client";
import { toast } from "sonner";

export const useRegister = () => {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    setisLoading(true);
    e.preventDefault();
    try {
      const res = await apiClient.post("/auth/register", formData,{
        withCredentials:true
      });
      console.log(res);
      if (res.data) {
        toast.success("registration successful");
      }
    } catch (error) {
      toast.success(error);
    } finally {
      setisLoading(false);
    }
  };
  return {
    changeFormDetails,
    submitForm,
    isLoading,
  };
};
