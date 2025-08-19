

import { fetchallProduct } from "@/services/productService";
import { create } from "zustand";

const useProductStore = create((set, get)=>({
 products: [],
 totalPages: 0,
 totalProducts: 0,
 loading: false,
 error: null,

 fetchAllProduct: async(page)=>{
    set({loading: true, error: null});
    try {
        const data = await fetchallProduct(page);
        set({products: data.products, totalPages: data.totalPages, totalProducts: data.total, loading: false});
    } catch (error) {
        set({error: error.message, loading: false});
    }
 },
    removeProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            await deleteProduct(productId);
            set((state) => ({
                products: state.products.filter((product) => product.id !== productId),
                totalProducts: state.totalProducts - 1,
                loading: false
            }));
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }

}))

export default useProductStore;