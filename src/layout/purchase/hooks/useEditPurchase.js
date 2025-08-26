import usePurchaseStore from "@/store/getPurchase";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useEditPurchase = () => {
  // Custom hook logic for editing a purchase

  const { updatePurchases } = usePurchaseStore();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "recieved") {
      newValue = value === "true";
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const submitForm = async (e, purchaseId) => {
    e.preventDefault();
    const payload = {
      productName: formData.productName,
      supplier: formData.supplier,
      recieved: formData.recieved,
      paymentStatus: formData.paymentStatus,
      paymentMethod: formData.paymentMethod,
    };
    setIsLoading(true);

    try {
      await updatePurchases(purchaseId, payload);
      toast.success("Purchase updated successfully");
      navigate("/dashboard/purchase");
    } catch (error) {
      toast.error("Failed to update purchase");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitForm,
    formData,
    isLoading,
    changeFormDetails,
    setFormData,
  };
};
