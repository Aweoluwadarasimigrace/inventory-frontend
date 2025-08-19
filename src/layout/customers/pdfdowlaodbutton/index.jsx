import React from 'react'
import { useCustomerPdfButton } from '../hooks/useCustomerPdfButton'

const UserPdfButton = () => {

    const { downloadUserPdf } = useCustomerPdfButton()
    return (
        <>
            <div>
                <button
                    onClick={downloadUserPdf}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                    Download PDF
                </button>
            </div>
        </>
    )
}

export default UserPdfButton