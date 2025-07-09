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
 const [isloading, setisloading] = useState(false)
 const [Message, setMessage] = useState(second)
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
        navigate("/verify-message")
      }
    } catch (error) {
      toast.success("not successful");
    } finally {
      setisLoading(false);
    }
  };


  const resendEmail = async()=>{
   setisloading(true)
         const email = formData.email
         try {
          const res = await apiClient.post("/auth//resend-verification", {email:email}, {
            withCredentials:true
          })
            setMessage({message:res.message})
         } catch (error) {
            setMessage({message: res.error})
         }finally{
            setisloading(false)
         }
  }
  return {
    changeFormDetails,
    submitForm,
    isLoading,
    formData,
    Message,
    resendEmail,
    isloading
  };
};
