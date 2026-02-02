import { Link, useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { services } from "../../../services"
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const params = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const functionToUse = params.categoryId
                                ? services.mocks.productos.getProductsByCategory
                                : services.mocks.productos.getProducts
        functionToUse(params.categoryId)
        .then((response) => {
            if (response.success) {
                setProducts(response.message)
            } else {
                console.error("Error: ", response.error);
            }
        })
        .catch((error) => {
            console.error("Error buscando productos ", error);
            setProducts([])
        })
        .finally(() => {
            setLoading(false)
        })
    }, [params.categoryId])

    if (loading) {
        return (
            <>
                <div className="status-container">
                    <h1>Cargando... ⏳</h1>
                </div>
            </>
        )
    }

    if (products.length === 0) {
        return (
            <>
                <div className="status-container">
                    <h1>No hay nada que mostrar en esta categoría 😕</h1>
                    <p className='status'>Intenta buscar otra cosa</p>
                    <Link to="/">
                        <button className="btn-back">Volver al Inicio</button>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <ItemList products={products}/>
    )
}