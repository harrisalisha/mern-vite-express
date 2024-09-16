import {create} from "zustand"

// THis FILe is TO CONNECT UI to database BACKEND

// custom hook GLOBAL STATE, can use in any Component
//its equal as const [state, setState] = useState([])
export const useProductStore = create((set) => ({
    products : [],
    setProducts: (products) => set({products}),

    createProduct : async(newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success: false , message: "Please fill in all the fields."}
        }
        //const res =  await fetch("http://localhost:5000/api/products", { 
        //set proxy in vite config to 5000
        const res =  await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

        const data =  await res.json()
        set((state) =>  ({products: [...state.products, data.data]}))
        return {success: true, message: "Create product successful"}
    },
    fetchProducts: async() => {
        const res = await fetch("/api/products")
        const data =  await res.json()
        set({products : data.data})
    },
    deleteProduct :  async(id) => {
        const res = await fetch(`/api/products/${id}`, {method: "DELETE",})

        const data = await res.json()
        if(!data.success) return {success: false, message: data.message}; //data.message from backend
        
        //update ui immediately, without refresh
        set((state) => ({products: state.products.filter(product => product._id !== id)}));
        return {success: true, message: data.message};//message from backend
    },  
    updateProduct: async(id, updatedProduct)=> {
    
        const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        });

        const data =  await res.json()
        if(!data.success){
        return {success: false, message: data.message}
        }
            
        //update ui immediately, without refresh
        set((state) => ({products: state.products.map(product => product._id === id ? data.data : product)}));
        return {success: true, message: data.message};
       
    } 
}))