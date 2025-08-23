import { apiClient } from "@/lib/client"
import { toast } from "sonner";


export const usePdfDownloadSales = ()=>{


    const downloadSalesPdf = async()=>{
        try {
            const res = await apiClient.get('/sales/salespdf', {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sales.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            toast.error(error.message || "Failed to download sales PDF");
        }
    }

    return { downloadSalesPdf };
}