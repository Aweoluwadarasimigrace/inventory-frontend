import useSalesStore from "@/store/getsales";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useCreateSales = () => {
  const { createSale } = useSalesStore();
  const [loading, setLoading] = useState(false);
  const [errors, seterrors] = useState({});
  const [formData, setformData] = useState({
    sku: "",
    productName: "",
    quantity: 0,
    customer: "",
    salesPrice: 0,
    date: "",
    fulfilled: false,
  });
  const navigate = useNavigate();
  const changeFormDetails = (e) => {
    const { name, value } = e.target;

    const newValue = name === "fulfilled" ? value === "true" : value === "false";
    setformData((prev) => ({ ...prev, [name]: newValue }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !formData.sku ||
      !formData.productName ||
      !formData.quantity ||
      !formData.customer ||
      !formData.salesPrice ||
      !formData.date
    ) {
      seterrors({ message: "All fields are required" });
      return;
    }
    setLoading(true);
    console.log(formData)
    try {
      await createSale(formData);
      navigate("/dashboard/sales");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, errors, changeFormDetails , formData};
};
