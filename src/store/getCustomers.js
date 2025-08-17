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
  error: null,
  fetchAllCustomer: async () => {
    set({ loading: true, error: null });
    try {
      const customer = await fetchCustomer();
      set({ customers: customer, loading: false });
    } catch (error) {
      set({
        error: error?.response?.data?.message || "failed to fetch user",
        loading: false,
      });
    }
  },
  updateCustomer: async (customerId, payload) => {
    set({ loading: true, error: null });
    console.log(payload, "ki");
    console.log(customerId, "id tru")
    try {
      const updatedUser = await editCustomer(customerId, payload);

      const updatedList = get().customers.map((customer) =>
        customer._id === customerId ? updatedUser : customer
      );
      set({ customers: updatedList, loading: false });
    } catch (error) {
      set({ error: "failed to update customer", loading: false });
      toast.error("failed to updated customer");
      console.log(error);
    }
  },

  removeCustomer: async (customerId) => {
    try {
      const deletecustomer = await deleteCustomer(customerId);
      toast.success(`${deletecustomer.message}`);

      const updateUi = get().customers.filter(
        (customer) => customer._id !== customerId
      );
      set({ customers: updateUi });
    } catch (error) {
      set({ error: "failed to delete customer" });
      toast.error("failed to delete customer, try again later");
      console.log(error);
    }
  },
}));

export default useCustomerStore;
