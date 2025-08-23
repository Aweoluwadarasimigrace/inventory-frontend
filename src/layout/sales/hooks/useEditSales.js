import useSalesStore from "@/store/getsales";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useEditSales = () => {
  const { updateSale } = useSalesStore();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const changeFormDetails = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "fulfilled") {
      newValue = value === "true";
    }
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const submitForm = async (e, salesId) => {
    e.preventDefault();
    const payload = {
      customer: formData.customer,
      date: formData.date,
      fulfilled: formData.fulfilled,
    };
    setIsLoading(true);

    try {
      await updateSale(salesId, payload);
      toast.success("Sale updated successfully");
      navigate("/dashboard/sales");
    } catch (error) {
      toast.error("failed to update sales");
      console.error("Error updating sale:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    changeFormDetails,
    setFormData,
    formData,
    isLoading,
    submitForm,
  };
};
