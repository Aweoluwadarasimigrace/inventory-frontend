import { apiClient } from "@/lib/client";
import { useState } from "react";

export const useCreateProduct = () => {
  const [formData, setformData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    quantity: 0,
    sku: "",
  });
  const [image, setimage] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setimage(e.target.files[0]);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.category ||
      !formData.quantity ||
      !formData.sku
    ) {
      seterrors({
        name: !formData.name ? "field is required" : "",
        description: !formData.description ? "field is required" : "",
        price: !formData.price ? "field is required" : "",
        category: !formData.category ? "field is required" : "",
        quantity: !formData.quantity ? "field is required" : "",
        sku: !formData.sku ? "field is required" : "",
      });
      return;
    }

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("quantity", formData.quantity);
    data.append("sku", formData.sku);
    data.append("image", image);

    try {
      setisLoading(true);
      const response = await apiClient.post("/product/createproduct", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const result = await response.data;
      console.log("Product created:", result);
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setisLoading(false);
    }
  };

  return {
    changeFormDetails, 
    submitForm,
    isLoading,
    handleFileChange
  };
};
