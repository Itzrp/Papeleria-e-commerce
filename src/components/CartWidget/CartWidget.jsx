import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext/CartContext'

export const CartWidget = () => {

    const { showQuantity } = useContext(CartContext)

    return (

        <button type="button" className="btn position-relative p-0 ms-4 me-3 btn-clean-border">
            <i className="bi bi-cart4 fs-3"></i>
            <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill badgen-color">
                {showQuantity}
                <span className="visually-hidden">productos en el carrito</span>
            </span>
        </button>
    )
}