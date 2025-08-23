import React from 'react'
import { usePdfDownloadSales } from '../hooks/usePdfDownloadSales'

const SalesPdfButton = () => {
  const { downloadSalesPdf } = usePdfDownloadSales()
  return (
    <div>
      <button
        onClick={downloadSalesPdf}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
      >
        Download PDF
      </button>
    </div>
  )
}

export default SalesPdfButton