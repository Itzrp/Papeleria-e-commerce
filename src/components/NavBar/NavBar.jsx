import './NavBar.css'
import { Logo } from "./Logo"
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () =>{

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Logo width= "3.75rem" height= "3.75rem" filter= "drop-shadow(.25rem .25rem .625rem rgba(0,0,0,0.5))" />
                <div className="order-lg-last ms-auto">
                    <CartWidget/>   
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">🔥Ofertas🔥</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Papelería y Oficina</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Complementos
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Tecnología y soporte</a></li>
                            <li><a className="dropdown-item" href="#">Arte y Mercería</a></li>
                            <li><a className="dropdown-item" href="#">Snacks y Bebidas</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 nav-search" type="search" placeholder="¿Te falta algo más?" aria-label="Search"/>
                        <button className="btn btn-search" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}