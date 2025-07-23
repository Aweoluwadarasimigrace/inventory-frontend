import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { apiClient } from "@/lib/client";

export const useLoginUser = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [errors, seterrors] = useState({});
  const navigate = useNavigate();

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!formData.email || !formData.password){
      seterrors({
        email: !formData.email ? "please enter a valid email address" : "",
         password: !formData.password ? "password cannot be fewer than 8 characters" : "",
      })
      return
    }
   seterrors({}); // clear previous errors
    setisLoading(true);
    console.log("is loading is laoding")
    try {
      const res = await apiClient.post("/auth/login", formData, {
        withCredentials: true,
      });
      console.log(res)
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
    errors
  };
};
