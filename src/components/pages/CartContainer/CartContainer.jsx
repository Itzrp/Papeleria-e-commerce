import { useContext } from "react";
import { Cart } from "../Cart/Cart"
import { CartContext } from "../../../context/CartContext/CartContext";
import { Link, useNavigate } from "react-router-dom";


const CartContainer = () => {

    const { cart, clearCart, deleteProduct, totalPrice } = useContext(CartContext);
    const navigate = useNavigate()

    if (cart.length === 0) {
        return (
            <div className="status-container">
                <h1>Tu carrito está vacío 🛒</h1>
                <p className='status'>¡Aún no has agregado artículos a tu carrito!</p>
                <Link to="/">
                    <button className="btn-back">Volver al Inicio</button>
                </Link>
            </div>
        );
    }

    return(
        <Cart items = {cart} clear = {() =>clearCart(navigate)} remove = {deleteProduct} totalCompra = {totalPrice()}/>
    )
}

export {CartContainer}