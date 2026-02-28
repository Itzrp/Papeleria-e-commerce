import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { services } from "../../../services"
import { ItemDetail } from "../ItemDetail/ItemDetail.JSX"

const ItemDetailContainer = () =>{

    const params = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        services.firestore.productos.getProduct(params.itemId)
        .then((response) => {
            if (response.success) {
                setProduct(response.message)
            } else {
                console.error("Error: ", response.error);
            }
        })
        .catch((error) => {
            console.error("Error obteniendo el producto ", error);
            setProduct([])
        })
        .finally(() => {
            setLoading(false)
        })
    }, [params.itemId])

    if (loading) {
        return (
            <>
                <div className="status-container">
                    <h1>Cargando detalle... ⏳</h1>
                </div>
            </>
        )
    }

    if (product.length === 0) {
        return (
            <>
                <div className="status-container">
                    <h1>Producto no encontrado 😕</h1>
                    <p className='status'>El producto con el ID {params.itemId} no existe.</p>
                    <Link to="/">
                        <button className="btn-back">Volver al Inicio</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <ItemDetail product={product}/>
    );

}

export {ItemDetailContainer}