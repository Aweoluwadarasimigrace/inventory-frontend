import useProductStore from "@/store/getproduct";
import { useState } from "react";
import { toast } from "sonner";

export const useEditProduct = () => {
  const { updateProduct } = useProductStore();
  const [formData, setformData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    quantity: 0,
    sku: "",
  });
  const [image, setimage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
  };



  const submitForm = async (e, productId) => {
    e.preventDefault();
    console.log(productId, "from params")
    const payload = new FormData();

    payload.append("name", formData.name);
    payload.append("description", formData.description);
    payload.append("price", formData.price);
    payload.append("category", formData.category);
    payload.append("quantity", formData.quantity);
    payload.append("sku", formData.sku);
    payload.append("image", image);
    setisLoading(true);

    try {
     await updateProduct(productId, payload);
     toast.success("Product updated successfully");
    } catch (error) {
      toast.error("Failed to update product");
      console.error(error);
    }finally{
      setisLoading(false);
    }
  };

  return { formData, changeFormDetails, handleFileChange, submitForm , setformData, isLoading, setimage, image};
};
