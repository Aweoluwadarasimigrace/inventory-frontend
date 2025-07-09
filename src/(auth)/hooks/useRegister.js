import axios from "axios";
import { useState } from "react";
import { apiClient } from "../../lib/client";
import { toast } from "sonner";
import { useNavigate } from "react-router";


export const useRegister = () => {
    const navigate = useNavigate()
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
      const res = await apiClient.post("/auth/register", formData, {
        withCredentials:true
      });
      console.log(res);
      if (res.data) {
        toast.success("registration successful");
        navigate("/auth/verify-message", {state: {email: formData.email}})
      }
    } catch (error) {
      toast.success("not successful");
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
