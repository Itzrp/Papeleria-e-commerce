import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { services } from "../../../services"
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const params = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let dataToFilter = null
        let functionToUse = null

        if (params.key) {
            functionToUse = services.firestore.productos.getProductsBySearch
            dataToFilter = params.key
        } else {
            functionToUse = params.categoryId
                                ? services.firestore.productos.getProductsByCategory
                                : services.firestore.productos.getProducts
            dataToFilter = params.categoryId
        }

        functionToUse(dataToFilter)
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
    }, [params.categoryId, params.key])

    if (loading) {
        return (
            <>
                <div className="status-container">
                    <h1>Buscando en el inventario... ✏️</h1>
                </div>
            </>
        )
    }

    if ((products.length === 0) && params.key) {
        return (
            <>
                <div className="status-container">
                    <h1>No se encontraron productos para "{params.key}" 😕</h1>
                    <p className='status'>Intenta buscar otra cosa</p>
                    <Link to="/">
                        <button className="btn-back">Volver al Inicio</button>
                    </Link>
                </div>
            </>
        )
    } else if (products.length === 0) {
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
        <ItemList products={products} kw={params.key} category={params.categoryId}/>
    )
}