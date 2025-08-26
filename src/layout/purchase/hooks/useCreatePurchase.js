import usePurchaseStore from "@/store/getPurchase";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useCreatePurchase = () => {
  // Custom hook logic for creating a purchase
  const { createPurchases } = usePurchaseStore();
  const [errors, seterrors] = useState({});
  const [formData, setformData] = useState({
    sku: "",
    productName: "",
    quantity: 0,
    supplier: "",
    purchasePrice: 0,
    date: "",
    received: false,
    paymentStatus: "",
    paymentMethod: "",
  });

  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "received") {
      // convert string "true"/"false" to boolean
      newValue = value === "true";
    }
    setformData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
   
    if (
      !formData.sku ||
      !formData.productName ||
      !formData.quantity ||
      !formData.supplier ||
      !formData.purchasePrice ||
      !formData.date ||
      !formData.paymentStatus ||
      !formData.paymentMethod
    ) {
      seterrors({ message: "All fields are required" });
      return;
    }
    console.log(formData, "formData");
    setloading(true);

    try {
    await createPurchases(formData);
    toast.success("Purchase created successfully");
    navigate("/dashboard/purchase");
    } catch (error) {
      setloading(false);
      toast.error("An error occurred while creating the purchase");
    }finally {
      setloading(false);
    }
  };

  return {
    formData,
    changeFormDetails,
    submitForm,
    loading,
    errors,
  };
};
