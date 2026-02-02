import { Card } from "../../Card/Card"
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div className="list-container">
        {products.map(prod => <Card key={prod.id} product={prod} />)}
        </div>
    )
}

export {ItemList}