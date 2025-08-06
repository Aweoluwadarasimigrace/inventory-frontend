import { apiClient } from "@/lib/client";
import { toast } from "sonner";

export const useDownloadPdf = () => {
  const downloadPdf = async () => {
    try {
      const res = await apiClient.get("/pdf/pdfdocument", {
        responseType: "blob",
      });
      console.log(res.data);
      const url = window.URL.createObjectURL(res.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.pdf"; // Specify the file name
      a.click();
    } catch (error) {
      toast.error("Failed to download PDF");
      console.error("Error downloading PDF:", error);
    }
  };
  return {
    downloadPdf,
  };
};
