import useProductStore from "@/store/getproduct";
import useSalesStore from "@/store/getsales";
import { useState } from "react";
import { useNavigate } from "react-router";

export const useCreateSales = () => {
  const { createSale } = useSalesStore();
  const { products } = useProductStore();
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

    let newValue = value;

    if (name === "fulfilled") {
      // convert string "true"/"false" to boolean
      newValue = value === "true";
    }

    setformData((prev) => ({ ...prev, [name]: newValue }));
  };

  const submitForm = async (e) => {
  e.preventDefault();

  // Validate required fields
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

  try {
    const product = products.find((p) => p.sku === formData.sku);
    console.log(product, "sku product");
    if (!product) {
      seterrors({ message: "Selected product not found" });
      return;
    }

    if (formData.quantity > product.quantity) {
      seterrors({ message: "Insufficient stock available" });
      return;
    }

    await createSale(formData);
    navigate("/dashboard/sales");
  } catch (error) {
    console.error(error);
    seterrors({ message: error.message || "Failed to create sale" });
  } finally {
    setLoading(false);
  }
};

  return { submitForm, loading, errors, changeFormDetails, formData };
};
