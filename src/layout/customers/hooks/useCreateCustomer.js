import { apiClient } from "@/lib/client";
import useCustomerStore from "@/store/getCustomers";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useCreateCustomer = () => {
  const [formData, setformData] = useState({});
  const [errors, seterrors] = useState({});
  const { fetchAllCustomer } = useCustomerStore();
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    setformData((prev) => {
      const updated = { ...prev, [name]: value };
      if (updated.number && updated.countrycode) {
        updated.contact = updated.countrycode + updated.number;
      }
      return updated;
    });
  };

  const createCustomer = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.address ||
      !formData.number ||
      !formData.city ||
      !formData.country ||
      !formData.state
    ) {
      seterrors({
        firstname: !formData.firstname ? "field is required" : "",
        lastname: !formData.lastname ? "field is required" : "",
        email: !formData.email ? "field is required" : "",
        address: !formData.address ? "field is required" : "",
        number: !formData.number ? "field is required" : "",
        city: !formData.city ? "field is required" : "",
        country: !formData.country ? "field is required" : "",
        state: !formData.state ? "field is required" : "",
      });
      return;
    }

    setisLoading(true);
    try {
      console.log("ilsoajdjd");
      const res = await apiClient.post("/customer/createcustomer", formData, {
        withCredentials: true,
      });

      if (res.data) {
        toast.success("customer created successfullly");
        setformData({});
        await fetchAllCustomer();
        navigate("/dashboard/customer");
      }
    } catch (error) {
      toast.error("error creating customer, try again later");
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  
  return {
    errors,
    formData,
    changeFormDetails,
    createCustomer,
    isLoading,

  };
};
