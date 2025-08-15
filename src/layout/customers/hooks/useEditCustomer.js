import useCustomerStore from "@/store/getCustomers";
import { toast } from "sonner";
import { useCreateCustomer } from "./useCreateCustomer";
import { useState } from "react";

export const useEditCustomer = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    number: "",
    countrycode: "",
    address: "",
    city: "",
  });
  const { updateCustomer } = useCustomerStore();
  const { selectedCountry, selectedState } = useCreateCustomer();
  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      if (updated.number && updated.countrycode) {
        updated.contact = updated.countrycode + updated.number;
      }
    });
    return updated;
  };

  const submitForm = async (e, customerId) => {
    e.preventDefault();
    const payload = {
      contact: formData.contact,
      number: formData.number,
      countrycode: formData.countrycode,
      address: formData.address,
      city: formData.city,
      state: selectedState,
      country: selectedCountry,
    };

    try {
      await updateCustomer(payload, customerId);
      toast.success("customer updated succesfully");
    } catch (error) {
      console.log("error updating customer", error);
      toast.error("failed to update customer, try again later");
    }
  };
  return {
    changeFormDetails,
    submitForm,
    formData,
    setFormData,
  };
};
