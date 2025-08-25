import React from 'react'
import { usePdfDownloadSalesReturn } from '../hooks/usePdfDownloadSalesReturn'

const SalesReturnPdfButton = () => {
  const {downloadPdf} = usePdfDownloadSalesReturn()
  return (
    <div>
        <button
        onClick={downloadPdf}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Download PDF
      </button>

    </div>
  )
}

export default SalesReturnPdfButton