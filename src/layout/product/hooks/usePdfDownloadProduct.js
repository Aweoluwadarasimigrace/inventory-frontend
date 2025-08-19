import { apiClient } from "@/lib/client";
import { toast } from "sonner";

export const usePdfDownloadProduct = () => {
  const downloadProductPdf = async () => {
    try {
      const res = await apiClient.get("/product/getpdfdownload", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(res.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "product.pdf";
      a.click();
    } catch (error) {
      toast.error("Failed to download PDF");
      console.error("Error downloading PDF:", error);
    }
  };

  return {
    downloadProductPdf,
  };
};
