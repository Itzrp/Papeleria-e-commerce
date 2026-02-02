import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({product}) => {
    return (
        <div className="product-card">
        {product.offer && <span className="offer-badge"><i className="bi bi-lightning-fill text-white"></i> OFERTA</span>}

        <div className="image-container">
            <div className="rounded-circle d-flex align-items-center justify-content-center circle-img" role="img" aria-label={product.name}>
                {product.image}
            </div>
        </div>

        <div className="card-content">
            <span className="badge mb-2 brand-tag">{product.brand}</span>

            <h3 className="product-title">{product.name}</h3>

            <div className="price-container">
                <span className="current-price">${product.price} MXN</span>
                {product.regularPrice && 
                <span className="old-price">${product.regularPrice} MXN</span>}
            </div>

            <Link to={`/item/${product.id}`}>    
                <button className="detail-btn">Ver Detalle</button>
            </Link>
        </div>
        </div>
    )
}

export {Card}