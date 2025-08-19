import React, { useEffect } from 'react'
import DisplayCustomerTable from './displaycustomertable'
import useCustomerStore from '@/store/getCustomers'
import CreateCustomerButton from './createcustomerButton'
import Loader from '@/sharedComponent/loader'
import { Link } from 'react-router'
import CustomerPdfButton from './pdfdowlaodbutton'

const CustomerPage = () => {
    const { fetchAllCustomer, customers, loading } = useCustomerStore()
    console.log(customers, "vite customer")
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
                <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg shadow-sm h-screen">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Start Managing Your Customer Activities!
                    </h1>
                    <p className="text-gray-600 mb-1">
                        Create, customize, and manage your customers effectively.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Click the button below to add your first customer.
                    </p>
                    <Link to={"/dashboard/createcustomer"}>
                        <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition">
                            Add Customer
                        </button>
                    </Link>
                </div>
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
                        <CustomerPdfButton />
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