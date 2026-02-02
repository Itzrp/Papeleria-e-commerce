import { useState } from "react"
import './ItemCount.css'


const ItemCount = ({stock, initial = 1, addToCart}) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) setCount(count + 1)
    }

    const decrement = () => {
        
        if(count > 1) setCount(count - 1)
    }

    return (
        <div className="item-count-container">
            <div className="controls-container">
                <button className="btn-control" onClick={decrement}>-</button>
                <span className="count-display">{count}</span>
                <button className="btn-control" onClick={increment}>+</button>
            </div>

            <button className={`btn-add-to-cart ${stock === 0 ? 'disabled' : ''}`} 
                    onClick={() => addToCart(count)}
                    disabled={stock === 0}
            >
                {stock > 0 ? "Agregar al carrito" : "Agotado"}
            </button>
        </div>
    )
}

export {ItemCount}