import { categoryNames } from "../../../utils/categories"
import { Card } from "../../Card/Card"
import './ItemList.css'

const ItemList = ({products, kw, category}) => {

    const displayCategory = categoryNames[category] || category
    return (
        <>
            <div className="header-container">
                {kw ? (
                    <h1>Encontramos {products.length} productos para "{kw}"</h1>
                ) : category ? (
                    <h1>Explorando la categoría: {displayCategory}</h1>
                ) : (
                    <h1>Todos nuestros Productos</h1>
                )}
            </div>
            <div className="list-container">
                {products.map(prod => <Card key={prod.id} product={prod} />)}
            </div>
        </>
    )
}

export {ItemList}