import useProductStore from "@/store/getproduct";
import useSalesStore from "@/store/getsales";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

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
    console.log(products, "all products");
    const product = products.find((p) => p.sku === formData.sku);
    console.log(formData.sku);
    console.log(product, "sku product");
    if (!product) {
      toast.error("Selected product not found, wrong SKU");
      return;
    }

    if (formData.quantity > product.quantity) {
      toast.error("Insufficient stock available");
      return;
    }

    await createSale(formData);
    toast.success("Sale created successfully");
    navigate("/dashboard/sales");
  } catch (error) {
    console.error(error);
    toast.error(error.message || "Failed to create sale");
  } finally {
    setLoading(false);
  }
};

  return { submitForm, loading, errors, changeFormDetails, formData };
};
