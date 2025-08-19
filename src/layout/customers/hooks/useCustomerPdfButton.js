import { apiClient } from "@/lib/client";
import { toast } from "sonner";

export const useCustomerPdfButton = () => {
  const downloadUserPdf = async () => {
    try {
      const res = await apiClient.get("/customer/getpdfdownload", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(res.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "customer.pdf";
      a.click();
    } catch (error) {
      toast.error("Failed to download PDF");
      console.error("Error downloading PDF:", error);
    }
  };

  return {
    downloadUserPdf,
  };
};
