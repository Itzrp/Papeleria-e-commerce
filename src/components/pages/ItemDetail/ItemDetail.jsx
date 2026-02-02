import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {

    const categoryNames = {
        "papeleria-y-oficina": "Papelería y Oficina",
        "servicios": "Servicios",
        "tecnologia-y-soporte": "Tecnología y Soporte",
        "arte-y-merceria": "Arte y Mercería",
        "snacks-y-bebidas": "Snacks y Bebidas"
    }

    const displayCategory = categoryNames[product.category] || product.category

    const addToCart = (quantity) => {
        console.log(`Se agregó ${quantity} ${product.name} al carrito`);
        
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
                    {product.stock >0
                        ? (
                            <ItemCount
                                stock = {product.stock}
                                initial = {1}
                                addToCart = {addToCart}
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