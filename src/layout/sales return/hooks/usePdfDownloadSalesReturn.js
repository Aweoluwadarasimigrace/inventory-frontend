export const usePdfDownloadSalesReturn = () => {
  const downloadPdf = async () => {
   
  try {
            const res = await apiClient.get('/returns/salesreturnpdf', {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'sales return.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            toast.error(error.message || "Failed to download sales return PDF");
        }

  };

  return { downloadPdf };
};
