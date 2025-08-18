const { fetchallProduct } = require("@/services/productService");

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
        set({products: data.products, totalPages: data.totalPages, totalProducts: data.totalProduct, loading: false});
    } catch (error) {
        set({error: error.message, loading: false});
    }
 }
}))

export default useProductStore;