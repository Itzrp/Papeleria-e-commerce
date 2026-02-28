import { createContext, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import Swal from 'sweetalert2'

const ok = getComputedStyle(document.documentElement).getPropertyValue('--color-secundarioB');
const redB = getComputedStyle(document.documentElement).getPropertyValue('--offer-color');

const carrito = JSON.parse(localStorage.getItem("cart")) || []

const CartContext = createContext(null)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(carrito)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(product => {
                if (product.id === item.id) {
                    return {...product, quantity: product.quantity + quantity}
                } else {
                    return product
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const clearCartAfterPurchase = () => {
        setCart([])
    }

    const clearCart = (navigate) => {
        Swal.fire({
            title: '¿Vaciar carrito?',
            text: "No podrás deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: ok,
            cancelButtonColor: redB,
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                Swal.fire('¡Vaciado!', 'Tu carrito está limpio, Te invitamos a seguir revisando nuestros productos', 'success')
                navigate('/')
            }
        })
    }

    const deleteProduct = (id) => {
        const prodToDelete = cart.find(product => product.id === id)
        const updateCart = cart.filter(product => product.id !== id)
        setCart(updateCart)
        toast.success(`¡Se eliminó ${prodToDelete.name} del carrito!`, {
            position: "top-center", 
            autoClose: 2000,          
            hideProgressBar: true,    
            closeButton: false,    
            className: "toastify-delete",
            transition: Slide
        });
    }

    const showQuantity = cart.reduce((acum, prod) => acum + prod.quantity, 0)

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum + (prod.quantity * prod.price), 0)
    }

    return (
        <CartContext.Provider value = {{cart, isInCart, addToCart, clearCartAfterPurchase, clearCart, deleteProduct, showQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}