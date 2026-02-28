import { useState, useContext } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { Slide, toast } from 'react-toastify'
import { CartContext } from "../../../context/CartContext/CartContext"
import { categoryNames } from '../../../utils/categories'

const ItemDetail = ({product}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addToCart} = useContext(CartContext)

    const displayCategory = categoryNames[product.category] || product.category

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        addToCart(product, quantity)
        toast.success(`¡Agregaste ${quantity} ${product.name} al carrito!`, {
            position: "top-center", 
            autoClose: 2000,          
            hideProgressBar: true,    
            closeButton: false,    
            className: "toastify-style",
            transition: Slide
        });
    }

    return (
        <div className="detail-container">
            <div className="detail-column-img">
                <div className="detail-img" role="img" aria-label={product.name}>
                    {product.image}
                </div>
            </div>

            <div className="detail-column-info">
                <div className="detail-header">
                    <span className="detail-category">{displayCategory}</span>
                    {product.offer && (
                        <span className="detail-offer-tag">
                            <i className="bi bi-lightning-fill text-white"></i> OFERTA
                        </span>
                    )}
                </div>
                <h1 className="detail-title">{product.name}</h1>
                <p className="detail-description">{product.description}</p>
                
                <div className="price-stock-block">
                    <div className="price-container">
                        <span className="current-price detail-price">${product.price} MXN</span>
                        {product.regularPrice && 
                        <span className="old-price">${product.regularPrice} MXN</span>}
                    </div>

                    {product.stock > 0
                        ? <span className="detail-stock stock-ok">Stock disponible</span>
                        : <span className="detail-stock stock-null">Agotado</span>
                    }
                </div>

                <div>
                    {
                        quantityAdded > 0
                        ? (
                            <div className="post-buttons">
                                <Link to='/cart'>
                                    <button className="btn-add-to-cart btn-personalizado">
                                        Terminar mi compra
                                    </button>
                                </Link>
                                <Link to='/'>
                                    <button className="btn-add-to-cart btn-personalizado continue">
                                        Seguir comprando
                                    </button>
                                </Link>
                            </div>
                        )
                        : product.stock >0
                        ? (
                            <ItemCount
                                stock = {product.stock}
                                initial = {1}
                                addToCart = {handleOnAdd}
                            />
                        )
                        : (
                            <button className="disabled" disabled ={true}>
                                No disponible
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export {ItemDetail}