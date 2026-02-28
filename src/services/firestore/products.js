import { addDoc, collection, getDoc, getDocs, query, where, doc, updateDoc } from "firebase/firestore"
import { firestore } from "../../utils/firebase"
import productsData  from "../../data/products.json";


const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "products"))

        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        return{success: true, message:products}

    } catch (error) {
        return{success: false, message: error}
    }
}

const getProductsBySearch = async (keyword) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "products"))

        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        const productsFiltered = products.filter((prod) => {
            const cleanText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase()
            
            const productName = cleanText(prod.name)
            const searchTerm = cleanText(keyword)

            return productName.includes(searchTerm) 
        })

        return{success: true, message:productsFiltered}

    } catch (error) {
        return{success: false, message: error}
    }
}

const getProduct = async (id) => {
    try {
        const docRef = await getDoc(doc(firestore, "products", id))

        if (!docRef.exists()) {
            return{success: false, message: `No se encontró el producto con ID: ${id}`}
        }
        const product = {
            id: docRef.id,
            ...docRef.data()
        }  
            
        return{success: true, message:product}

    } catch (error) {
        return{success: false, message: error}
    }
}

const getProductsByCategory = async (categoryId) => {
    try {
        const qs = collection(firestore, "products")
        if (categoryId === 'ofertas') {
            const q = query(
                qs, 
                where("offer", "==", true)
            ) 
            const querySnapshot = await getDocs(q)
            const productsByCategory = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        
        return{success: true, message:productsByCategory}

        } else {
            const q = query(
                qs, 
                where("category", "==", categoryId),
            ) 
            const querySnapshot = await getDocs(q)
            const productsByCategory = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            return{success: true, message:productsByCategory}
        } 
        
    } catch (error) {
            return{success: false, message: error}
        }
}

const updateProduct = async (id, data) => {
    try {
        await updateDoc(doc(firestore, "products", id), data)

        return{success: true, message:`Producto ${id} actualizado con éxito`}

    } catch (error) {
        return{success: false, message: error}
    }
}


const addProduct = async (data) => {
    try {
        const docRef = await addDoc(collection(firestore, "products"), data)

        return{success: true, message:`Id: ${docRef.id}`}
    } catch (error) {
        return{success: false, message: error}
    }
}
/*
const newProducts = productsData.map((product) =>({
    sku: product.sku,
    name: product.name,
    description: product.description,
    price: product.price,
    regularPrice: product.regularPrice,
    category: product.category,
    subcategory: product.subcategory,
    type: product.type,
    color: product.color,
    stock: product.stock,
    offer: product.offer,
    image: product.image,
    brand: product.brand
}))

newProducts.forEach(product => {
    console.log(product);
    addProduct(product)
});

*/

export const productos = {getProducts, getProductsBySearch, getProduct, getProductsByCategory, updateProduct, addProduct}