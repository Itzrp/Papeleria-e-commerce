import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="error-container">
            <h1>404 NOT FOUND</h1>
            <p>Ups, parece que esta página no fue encontrada.</p>
            <Link to="/">
                <button className="btn-back">Volver al Inicio</button>
            </Link>
        </div>
    )
}

export {NotFound}