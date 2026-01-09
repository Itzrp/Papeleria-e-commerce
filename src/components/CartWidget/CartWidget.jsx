import './CartWidget.css'

export const CartWidget = () => {

    return (

        <button type="button" className="btn position-relative p-0 ms-4 me-3">
            <i className="bi bi-cart4 fs-3"></i>
            <span className="position-absolute badge rounded-pill" style={{ top: '-6px', right: '-10px' }}>
                5
                <span className="visually-hidden">productos en el carrito</span>
            </span>
        </button>
    )
}