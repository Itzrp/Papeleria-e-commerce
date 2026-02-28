import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({items, clear, remove, totalCompra}) => {
    return (
        <div className="container mt-4 mb-4">
            <div className="card shadow-sm border-0"> 
                <h1>Carrito de Compras</h1>
                <div className="card-body p-4">
                    {items.map((producto) => (
                        <div 
                            key={producto.id} 
                            className="card border-0 shadow-sm px-2 py-2 mb-3 shadow-sm rounded-3 bg-light" 
                        >
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-start gap-3">
                                    <span className="image-style">
                                        {producto.image} 
                                    </span>
                                    
                                    <div className="d-flex flex-column">
                                        <h3 className="product-title modified">
                                            {producto.name}
                                        </h3>
                                        <span className='old-price modified fw-regular'>
                                            Cantidad: {producto.quantity}
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex flex-column align-items-end">
                                    <h5 className="product-title modified">
                                        ${producto.price * producto.quantity} MXN
                                    </h5>
                                    <span className="mb-2 old-price modified fw-regular">
                                        ${producto.price} MXN c/u
                                    </span>
                                    
                                    <button id={producto.id} 
                                        onClick={() => remove(producto.id)} 
                                        className="btn btn-sm d-flex align-items-center gap-1 border-0 delete-item">
                                        <i className="bi bi-trash-fill"></i> Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="row mt-4 pt-2">
                        <div className="col-12 text-end">
                            <h3 className="mb-4 total">Total a pagar: ${totalCompra} MXN</h3>
                            
                            <div className="d-flex justify-content-end gap-3 flex-wrap">
                                <button 
                                    onClick={clear} 
                                    className="btn-add-to-cart btn-vaciar-carrito px-4"
                                >
                                    Vaciar Carrito
                                </button>

                                <Link to="/checkout">
                                    <button className="btn-add-to-cart btn-terminar-compra">
                                        Finalizar Compra
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Cart };