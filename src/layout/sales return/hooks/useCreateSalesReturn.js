import useSalesStore from "@/store/getsales";
import useSalesReturnStore from "@/store/getsalesreturn";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useCreateSalesReturn = () => {
  const { createSalesReturn } = useSalesReturnStore();
  const { sales } = useSalesStore();
  const [formData, setformData] = useState({
    quantityReturned: 0,
    reason: "",
    invoiceNo: "",
    sku: "",
    productName: "",
    customerName: "",
    salesPrice: 0,
    returnDate: "",
    processed: false,
  });
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState({});

  const navigate = useNavigate();

  const changeFormDetails = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "processed") {
      // convert string "true"/"false" to boolean
      newValue = value === "true";
    }
    setformData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !formData.sku ||
      !formData.invoiceNo ||
      !formData.customerName ||
      !formData.quantityReturned ||
      !formData.reason ||
      !formData.salesPrice ||
      !formData.returnDate
    ) {
      seterror({ message: "Please fill in all fields." });
      return;
    }
    console.log(formData, "formData");
    setisLoading(true);
    try {
      console.log(sales)
      const Sales = sales.find((sale) => sale.invoiceNo === formData.invoiceNo);
      console.log(Sales);

      if (!Sales) {
        toast.error("Selected invoice number does not match any sales record.");
        return;
      }

      if (formData.quantityReturned > Sales.quantity) {
        toast.error("Quantity returned exceeds the original sale quantity.");
        return;
      }
      await createSalesReturn(formData);
      toast.success("Sales return created successfully.");
      navigate("/sales-returns");
    } catch (err) {
      seterror(err);
      toast.error("Failed to create sales return.");
    } finally {
      setisLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    error,
    changeFormDetails,
    submitForm,
  };
};
