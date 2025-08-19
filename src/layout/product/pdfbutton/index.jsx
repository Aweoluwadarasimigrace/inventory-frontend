import React from 'react'
import { usePdfDownloadProduct } from '../hooks/usePdfDownloadProduct'

const ProductPdfButton = () => {

    const { downloadProductPdf } = usePdfDownloadProduct()
    return (
        <>
            <div>
                <button
                    onClick={downloadProductPdf}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                    Download PDF
                </button>
            </div>
        </>
    )
}

export default ProductPdfButton