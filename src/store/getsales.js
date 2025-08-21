const { create } = require("zustand");


const useSalesStore = create((set, get)=>({
    sales: [],
    totalPages: 0,
    totalsales: 0,
    loading: false,
    error: null,


    fetchAllSales: async(page)=>{
        set({loading: true, error: null});
        try {
            const data = await fetchAllSales(page);
            set({sales: data.sales, totalPages: data.totalPages, totalsales: data.total, loading: false});
        } catch (error) {
            set({error: error.message, loading: false});
        }
    },
}))


export default useSalesStore;