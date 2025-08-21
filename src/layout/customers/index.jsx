import React, { useEffect } from "react";
import { Link } from "react-router";
import useCustomerStore from "@/store/getCustomers";
import DisplayCustomerTable from "./displaycustomertable";
import CreateCustomerButton from "./createcustomerButton";
import CustomerPdfButton from "./pdfdowlaodbutton";
import Loader from "@/sharedComponent/loader";

const CustomerPage = () => {
  const { fetchAllCustomer, customers, loading, error } = useCustomerStore();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllCustomer(page);
  }, [fetchAllCustomer, page]);

  // 🔄 Loading State
  if (loading) return <Loader />;

  // ❌ Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-red-50 rounded-lg shadow-sm h-screen">
        <h1 className="text-2xl font-bold text-red-700 mb-2">
          Failed to Load Customers
        </h1>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={fetchAllCustomer}
          className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  // ➕ Empty State
  if (!customers?.length) {
    return (
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
        <Link to="/dashboard/createcustomer">
          <button className="px-6 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition">
            Add Customer
          </button>
        </Link>
      </div>
    );
  }

  // 📋 Customer Table (Main Content)
  return (
    <div className="min-h-full bg-gray-100">
      {/* HEADER + ACTIONS */}
      <div className="max-w-9xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#676e8a]">
            Customer Management
          </h1>
          <p className="text-gray-600">Manage Your Customers</p>
          <p className="text-gray-500 text-sm">
            A dashboard provides you an overview of customers list with access
            to the most important data, functions and controls.
          </p>
        </div>

        <div className="flex gap-x-2">
          <CreateCustomerButton />
          <CustomerPdfButton />
        </div>
      </div>

      {/* CUSTOMER TABLE */}
      <div className="max-w-9xl mx-auto p-2 md:p-4">
        <DisplayCustomerTable page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default CustomerPage;
