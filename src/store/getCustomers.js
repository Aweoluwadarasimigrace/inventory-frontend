const { fetchCustomer } = require("@/services/userService");
const { create } = require("zustand");

const useCustomerStore = create((set) => ({
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
}));

export default useCustomerStore