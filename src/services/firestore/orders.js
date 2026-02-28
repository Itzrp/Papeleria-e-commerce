import { addDoc, collection, doc, getDoc, getDocs, serverTimestamp } from "firebase/firestore"
import { firestore } from "../../utils/firebase"

const getOrders = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "orders"))

        const orders = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        return{success: true, message:orders}

    } catch (error) {
        return{success: false, message: error}
    }
}

const getOrder = async (id) => {
    try {
        const docRef = await getDoc(doc(firestore, "orders", id))

        if (!docRef.exists()) {
            return{success: false, message: `No se encontró la orden con ID: ${id}`}
        }
        const order = {
            id: docRef.id,
            ...docRef.data()
        }  
        return{success: true, data:order}

    } catch (error) {
        return{success: false, message: error}
    }
}

const createOrder = async (data) => {
    try {
        const docRef = await addDoc(collection(firestore, "orders"), {
            ...data,
            date: serverTimestamp()
        })

        return{success: true, message:`Id de la órden: ${docRef.id}`}
    } catch (error) {
        return{success: false, message: error}
    }
}

export const orders = {getOrders, getOrder, createOrder}