import {
  deleteCustomer,
  editCustomer,
  fetchCustomer,
} from "@/services/userService";
import { toast } from "sonner";
import { create } from "zustand";

const useCustomerStore = create((set, get) => ({
  customers: [],
  loading: false,
  totalPages: 0,
  totalCustomers: 0,
  error: null,

  fetchAllCustomer: async (page) => {
    set({ loading: true, error: null });
    try {
      const customer = await fetchCustomer(page);
      set({ customers: customer.customers, totalPages: customer.totalPages, totalCustomers: customer.total, loading: false });
    } catch (error) {
      set({
        customers: [],
        error: error?.response?.data?.message || "Failed to fetch customers",
        loading: false,
      });
      toast.error(error?.response?.data?.message || "Failed to fetch customers");
    }
  },

  updateCustomer: async (customerId, payload) => {
    set({ loading: true, error: null });
    try {
      const updatedUser = await editCustomer(customerId, payload);

      const updatedList = get().customers.map((customer) =>
        customer._id === customerId ? { ...customer, ...updatedUser } : customer
      );

      set({ customers: updatedList, loading: false });
      toast.success("Customer updated successfully");
    } catch (error) {
      set({
        error: error?.response?.data?.message || "Failed to update customer",
        loading: false,
      });
      toast.error(error?.response?.data?.message || "Failed to update customer");
      console.log(error);
    }
  },

  removeCustomer: async (customerId) => {
    set({ loading: true, error: null });
    try {
      const deleted = await deleteCustomer(customerId);
      toast.success(deleted?.message || "Customer deleted successfully");

      const updateUi = get().customers.filter(
        (customer) => customer._id !== customerId
      );
      set({ customers: updateUi, loading: false });
    } catch (error) {
      set({
        error: error?.response?.data?.message || "Failed to delete customer",
        loading: false,
      });
      toast.error(error?.response?.data?.message || "Failed to delete customer");
      console.log(error);
    }
  },
}));

export default useCustomerStore;
