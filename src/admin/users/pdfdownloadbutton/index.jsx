import React from 'react'
import { useDownloadPdf } from '../hooks/useDownloadPdf'

const PdfDownloadButton = () => {
    const { downloadPdf } = useDownloadPdf()
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

export default PdfDownloadButton