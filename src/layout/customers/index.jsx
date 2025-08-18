 import React, { useEffect } from 'react'
import DisplayCustomerTable from './displaycustomertable'
import useCustomerStore from '@/store/getCustomers'

import NotCreatedYet from '@/sharedComponent/notcreatedyet'
import CreateCustomerButton from './createcustomerButton'
import PdfDownloadButton from '@/admin/users/pdfdownloadbutton'
import Loader from '@/sharedComponent/loader'

const CustomerPage = () => {
    const { fetchAllCustomer, customers, loading } = useCustomerStore()

    useEffect(() => {
        fetchAllCustomer()
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }
    if (customers?.length === 0) {
        return (
            <>

                <div className="max-w-9xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#676e8a]">User Management</h1>
                        <p className="text-gray-600">Manage Your Users</p>
                        <p className="text-gray-500 text-sm">
                            A dashboard provides you an overview of user list with access to the most important data,
                            functions and controls.
                        </p>
                    </div>

                    <div className="flex gap-x-2">
                           <CreateCustomerButton />
                        <PdfDownloadButton />
                       
                    </div>
                </div>
                <NotCreatedYet name={"Customers"} />
            </>
        );
    }
    return (
        <div>
            <div className="min-h-full bg-gray-100">
                {/* HEADER + BUTTON: Responsive Side by Side */}
                <div className="max-w-9xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#676e8a]">Customer Management</h1>
                        <p className="text-gray-600">Manage Your Users</p>
                        <p className="text-gray-500 text-sm">
                            A dashboard provides you an overview of customers list with access to the most important data,
                            functions and controls.
                        </p>
                    </div>

                    <div className="flex gap-x-2">
                        <CreateCustomerButton />
                        {/* <PdfDownloadButton /> */}
                        {/* <CreateUserButton /> */}
                    </div>
                </div>


                {/* USER TABLE BELOW */}
                <div className="max-w-9xl mx-auto p-2 md:p-4">
                    <DisplayCustomerTable />
                </div>
            </div>
        </div>
    )
}

export default CustomerPage