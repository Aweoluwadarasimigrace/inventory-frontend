import useSalesReturnStore from "@/store/getsalesreturn";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useEditSalesReturn = () => {
  const { updatesalesreturn } = useSalesReturnStore();

  const [formData, setformData] = useState({});
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const changeFormDetails = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "processed") {
      newValue = value === "true";
    }
    setformData((prev) => ({ ...prev, [name]: newValue }));
  };

  const submitForm = async (e, salesReturnId) => {
    e.preventDefault();

    const payload = {
      processed: formData.processed,
      reason: formData.reason,
      productName: formData.productName,
      customerName: formData.customerName,
      // Include other fields from formData as needed
    };
    setisLoading(true);
    try {
      await updatesalesreturn(salesReturnId, payload);
      toast.success("Sales return updated successfully");
      navigate("/dashboard/salesreturn");
    } catch (error) {
      toast.error("Failed to update sales return");
      console.log(error, "here");
    } finally {
      setisLoading(false);
    }
  };

  return { changeFormDetails, submitForm , setformData, isLoading, formData };
};
