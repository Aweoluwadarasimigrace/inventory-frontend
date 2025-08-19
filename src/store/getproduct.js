

import { deleteProduct, fetchallProduct } from "@/services/productService";
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
        console.log(productId, "productId in removeProduct");
        set({ loading: true, error: null });
        try {
            await deleteProduct(productId);
            const updatedProducts = get().products.filter(product => product._id !== productId);
            set({ products: updatedProducts, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }

}))

export default useProductStore;